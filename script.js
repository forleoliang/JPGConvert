document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const convertButton = document.getElementById('convertButton');
    const clearButton = document.getElementById('clearButton');
    const downloadAllButton = document.getElementById('downloadAllButton');

    const previewArea = document.getElementById('previewArea');
    const originalPreview = document.getElementById('originalPreview');
    const convertedPreview = document.getElementById('convertedPreview');
    const originalInfo = document.getElementById('originalInfo');
    const convertedInfo = document.getElementById('convertedInfo');
    const formatButtons = document.querySelectorAll('.format-button');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValue = document.getElementById('qualityValue');
    const fileList = document.getElementById('fileList');

    let selectedFiles = [];
    let selectedFormat = 'webp';
    let convertedBlobs = new Map();
    fileInput.multiple = true;

    // 检查AVIF支持并在不支持时禁用AVIF按钮
    async function checkAvifSupport() {
        const avifButton = document.querySelector('.format-button[data-format="avif"]');
        if (!avifButton) return;
        
        try {
            // 不再检查是否可用，始终启用AVIF按钮
            avifButton.disabled = false;
            avifButton.title = 'AVIF格式 - 高压缩比，更小文件体积';
            console.log('AVIF button enabled');
            
            // 尝试加载AVIF编码器，但不影响按钮状态
            const isAvailable = await window.squooshAvif.isAvailable();
            if (!isAvailable) {
                console.warn('AVIF encoder not available, but button remains enabled');
            } else {
                console.log('AVIF encoder loaded successfully');
            }
        } catch (e) {
            // 即使出错，也保持按钮启用
            console.error('Failed to check AVIF support, but button remains enabled:', e);
        }
    }
    
    // 页面加载后检查AVIF支持
    checkAvifSupport();

    // Format selection handling
    formatButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.disabled) return;
            
            formatButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedFormat = button.dataset.format;
        });
    });

    // Drag and drop handling
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.add('drag-over');
        });
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropZone.addEventListener(eventName, () => {
            dropZone.classList.remove('drag-over');
        });
    });

    dropZone.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        handleFiles(files);
    });

    // 添加点击整个dropZone区域触发fileInput点击的功能
    dropZone.addEventListener('click', (e) => {
        // 如果点击的是上传按钮(label)，不需要额外处理，因为label已经关联了fileInput
        if (e.target.tagName === 'LABEL' || e.target.closest('label')) {
            return;
        }
        // 触发fileInput的点击事件
        fileInput.click();
    });

    fileInput.addEventListener('change', (e) => {
        handleFiles(e.target.files);
    });

    convertButton.addEventListener('click', convertAllImages);

    function handleFiles(files) {
        if (files.length === 0) return;
        
        const validFiles = Array.from(files).filter(file => file.type.match('image/(jpeg|png)'));
        if (validFiles.length === 0) {
            alert('请上传JPG或PNG格式的图片。');
            return;
        }
        
            selectedFiles = validFiles;
        updateFileList();
        convertButton.disabled = false;
        
        // 显示清除按钮
        clearButton.style.display = 'inline-block';
        
        // 提示用户如果有不支持的文件
        if (files.length > validFiles.length) {
            alert('部分文件被跳过。只支持JPG和PNG格式。');
        }
    }

    function updateFileList() {
            fileList.innerHTML = '';
            fileList.style.display = 'block';
            convertedBlobs.clear();
        clearButton.style.display = 'inline-block';
        downloadAllButton.style.display = 'inline-block';
        downloadAllButton.disabled = true;
        
        selectedFiles.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
            fileItem.dataset.index = index;
                
                const thumbnailContainer = document.createElement('div');
                thumbnailContainer.className = 'thumbnail-container';
                const thumbnail = document.createElement('img');
                thumbnail.className = 'file-thumbnail';
                thumbnailContainer.appendChild(thumbnail);

                const fileInfoContainer = document.createElement('div');
                fileInfoContainer.className = 'file-info';
                fileInfoContainer.innerHTML = `
                    <span class="file-name">${file.name}</span>
                    <span class="file-size">${(file.size / 1024).toFixed(2)} KB</span>
                `;

                const statusContainer = document.createElement('div');
                statusContainer.className = 'file-status';
                const spinner = document.createElement('div');
                spinner.className = 'pending-spinner';
                statusContainer.appendChild(spinner);

                fileItem.appendChild(thumbnailContainer);
                fileItem.appendChild(fileInfoContainer);
                fileItem.appendChild(statusContainer);
                fileList.appendChild(fileItem);

                const reader = new FileReader();
                reader.onload = function(e) {
                    thumbnail.src = e.target.result;
                };
                reader.readAsDataURL(file);
            });

        if (selectedFiles.length === 1) {
            displayOriginalImage(selectedFiles[0]);
            } else {
                previewArea.style.display = 'none';
        }
        updateDownloadButtonState();
    }

    function displayOriginalImage(file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            originalPreview.src = e.target.result;
            previewArea.style.display = 'block';
            updateImageInfo(file, originalInfo);
        };
        reader.readAsDataURL(file);
    }

    function updateImageInfo(file, infoElement) {
        if (!infoElement) return;
        
        const size = (file.size / 1024).toFixed(2);
        infoElement.textContent = getTranslation('size_info').replace('{0}', size);
    }

    // 辅助函数：获取翻译文本
    function getTranslation(key) {
        // 使用window上全局定义的getTranslation函数
        return window.getTranslation ? window.getTranslation(key) : key;
    }

    // 修改convertImage函数以支持AVIF转换
    async function convertImage(file, index) {
        const quality = parseInt(qualitySlider.value);
        const fileItem = document.querySelector(`.file-item[data-index="${index}"]`);
        const statusElement = fileItem.querySelector('.file-status');
        
        statusElement.textContent = getTranslation('converting');
        statusElement.classList.add('converting');
        
        try {
            let result;
            
            if (selectedFormat === 'avif') {
                // 使用Squoosh进行AVIF转换
                statusElement.textContent = getTranslation('using_avif_encoder');
                try {
                    // 检查AVIF编码器是否可用
                    const isAvailable = await window.squooshAvif.isAvailable();
                    if (!isAvailable) {
                        throw new Error(getTranslation('avif_not_available'));
                    }
                    result = await window.squooshAvif.convertImageToAvif(file, quality);
                } catch (avifError) {
                    console.error(getTranslation('avif_conversion_failed') + ':', avifError);
                    statusElement.textContent = `${getTranslation('avif_conversion_failed')}: ${avifError.message}`;
                    statusElement.classList.remove('converting');
                    statusElement.classList.add('failed');
                    return null;
                }
            } else if (selectedFormat === 'webp') {
                // 使用现有的WebP转换方法
                result = await convertToWebP(file, quality);
            }
            
            // 这里处理转换结果，和原来的逻辑一致
            if (result) {
                convertedBlobs.set(index, result);
                updateFileItemStatus(fileItem, result);
                return result;
            }
        } catch (error) {
            console.error(getTranslation('conversion_failed') + ':', error);
            statusElement.textContent = getTranslation('conversion_failed');
            statusElement.classList.remove('converting');
            statusElement.classList.add('failed');
        }
        
        return null;
    }
    
    // 添加WebP转换函数，将原convertImage的WebP处理逻辑移到这里
    async function convertToWebP(file, quality) {
        return new Promise((resolve, reject) => {
            try {
                // 创建Web Worker处理图像转换
                const worker = new Worker('imageWorker.js');
                
                worker.onmessage = function(e) {
                    worker.terminate();
                    
                    if (e.data.success) {
                        resolve(e.data);
                    } else if (e.data.needFallback) {
                        // 使用回退方法
                        console.log('使用回退方法处理WebP转换');
                        convertWithFallbackMethod(file, quality).then(resolve).catch(reject);
                    } else {
                        reject(new Error(e.data.error || '转换失败'));
                    }
                };
                
                worker.onerror = function(error) {
                    worker.terminate();
                    console.error('Worker错误:', error);
                    
                    // 尝试使用回退方法
                    convertWithFallbackMethod(file, quality).then(resolve).catch(reject);
                };
                
                // 将文件和设置发送到Worker
                worker.postMessage({
                    file: file,
                    quality: quality / 100,
                    selectedFormat: 'webp'
                });
            } catch (error) {
                console.error('创建Worker失败:', error);
                // 尝试使用回退方法
                convertWithFallbackMethod(file, quality).then(resolve).catch(reject);
            }
        });
    }

    // 添加回退方法转换函数
    async function convertWithFallbackMethod(file, quality) {
        console.log('使用回退方法处理图像转换');
        return new Promise((resolve, reject) => {
            try {
                const img = new Image();
                img.onload = function() {
                    try {
                        const canvas = document.createElement('canvas');
                        canvas.width = img.width;
                        canvas.height = img.height;
                        const ctx = canvas.getContext('2d');
                        ctx.drawImage(img, 0, 0);
                        
                        const mimeType = `image/${selectedFormat}`;
                        canvas.toBlob(
                            function(blob) {
                                // 释放URL对象
                                URL.revokeObjectURL(img.src);
                                
                                if (!blob) {
                                    reject(new Error('Failed to create blob in fallback method'));
                                    return;
                                }
                                
                                // 返回结果对象，与Worker返回的结构一致
                                resolve({
                                    success: true,
                                    blob: blob,
                                    fileName: file.name,
                                    size: blob.size,
                                    originalSize: file.size,
                                    sizeIncreased: blob.size > file.size
                                });
                            },
                            mimeType,
                            quality / 100
                        );
                    } catch (err) {
                        URL.revokeObjectURL(img.src);
                        reject(err);
                    }
                };
                
                img.onerror = function() {
                    URL.revokeObjectURL(img.src);
                    reject(new Error('Failed to load image in fallback method'));
                };
                
                img.src = URL.createObjectURL(file);
            } catch (err) {
                reject(err);
            }
        });
    }
    
    // 更新文件项状态的函数
    function updateFileItemStatus(fileItem, result) {
        const statusElement = fileItem.querySelector('.file-status');
        statusElement.classList.remove('converting');
        
        if (result.sizeIncreased) {
            // 如果转换后的文件大小增加，使用原始文件
            const sizeKB = (result.originalSize / 1024).toFixed(2);
            statusElement.textContent = getTranslation('original_kept').replace('{0}', sizeKB);
            statusElement.classList.add('original-kept');
        } else {
            // 使用转换后的文件
            const sizeKB = (result.size / 1024).toFixed(2);
            const compressionRatio = ((1 - result.size / result.originalSize) * 100).toFixed(2);
            const compressionText = compressionRatio > 0 ? ` (-${compressionRatio}%)` : '';
            statusElement.textContent = getTranslation('converted_size').replace('{0}', sizeKB) + compressionText;
            statusElement.classList.add('converted');
        }
        
        // 启用下载按钮
        if (downloadAllButton) {
            downloadAllButton.disabled = false;
        }
        
        // 如果只有一个文件，更新预览
        if (selectedFiles.length === 1) {
            updatePreview(result);
        }
    }
    
    // 更新预览区域
    function updatePreview(result) {
        const url = URL.createObjectURL(result.blob);
        convertedPreview.src = url;
        convertedPreview.style.display = 'block';
        const convertedTitle = convertedPreview.parentNode.querySelector('h3');
        if (convertedTitle) convertedTitle.style.display = 'block';
        
        // 更新转换信息
        updateImageInfo(result.blob, convertedInfo);
        
        // 移除加载动画
        const loadingSpinner = convertedPreview.parentNode.querySelector('.loading-spinner');
        if (loadingSpinner) loadingSpinner.remove();
    }
    
    // 下载Blob的通用函数
    function downloadBlob(blob, filename) {
        try {
            // 确保blob是有效的
            if (!blob || !(blob instanceof Blob)) {
                console.error('无效的blob对象', blob);
                alert('下载失败，文件数据无效');
                return;
            }
            
            // 使用URL.createObjectURL创建临时URL
            const url = URL.createObjectURL(blob);
            
            // 创建下载链接
            const link = document.createElement('a');
            link.href = url;
            link.download = filename;
            link.style.display = 'none';
            
            // 添加到body并触发点击
            document.body.appendChild(link);
            link.click();
            
            // 清理
            setTimeout(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(url); // 释放URL对象
            }, 100);
            
            console.log('文件下载已触发:', filename);
        } catch (error) {
            console.error('下载过程中发生错误:', error);
            alert('下载失败，请重试');
        }
    }

    // 下载单个图片函数
    function downloadImage() {
        if (selectedFiles.length === 1 && convertedBlobs.size === 1) {
            const result = convertedBlobs.get(0); // 使用索引0获取转换结果
            if (!result || !result.blob) {
                console.error('无效的blob数据');
                alert('下载失败，文件数据无效');
                return;
            }
    
            const link = document.createElement('a');
            link.href = URL.createObjectURL(result.blob);
            const originalName = selectedFiles[0].name.split('.')[0];
            link.download = `${originalName}.${selectedFormat}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else if (convertedBlobs.size > 1) {
            downloadAllImages();
        }
    }

    // 下载多个图片为zip文件
    async function downloadAllImages() {
        if (convertedBlobs.size === 0) return;

        const zip = new JSZip();
        const folder = zip.folder('converted_images');

        // 使用索引遍历convertedBlobs
        for (let [index, result] of convertedBlobs.entries()) {
            if (index >= 0 && index < selectedFiles.length && result && result.blob) {
                const file = selectedFiles[index];
                const newName = `${file.name.split('.')[0]}.${selectedFormat}`;
                folder.file(newName, result.blob);
            }
        }

        const content = await zip.generateAsync({type: 'blob'});
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = `converted_images.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Quality slider handling
    qualitySlider.addEventListener('input', () => {
        const quality = qualitySlider.value;
        qualityValue.textContent = quality + ' '; // 添加空格
        
        // 更新滑块的背景渐变
        updateSliderBackground(quality);
        
        if (selectedFiles.length > 0) {
            const activeFileItem = fileList.querySelector('.file-item.active');
            if (activeFileItem) {
                displayOriginalImage(selectedFiles[activeFileItem.dataset.index]);
            }
        }
    });
    
    // 更新滑块背景渐变
    function updateSliderBackground(value) {
        qualitySlider.style.background = `linear-gradient(to right, #007aff 0%, #007aff ${value}%, #e1e1e1 ${value}%, #e1e1e1 100%)`;
    }
    
    // 初始化滑块背景
    updateSliderBackground(qualitySlider.value);

    // 批量转换功能
    async function convertAllImages() {
        if (selectedFiles.length === 0) return;
        
        // 禁用转换按钮防止重复点击
        convertButton.disabled = true;
        downloadAllButton.disabled = true;
        
        // 重置转换状态
        convertedBlobs.clear();
        
        try {
            // 为每个文件创建转换Promise
            const promises = selectedFiles.map((file, index) => 
                convertImage(file, index)
            );
            
            // 等待所有转换完成
            await Promise.all(promises);
            
            // 转换完成后启用按钮
            convertButton.disabled = false;
            updateDownloadButtonState();
        } catch (error) {
            console.error('批量转换过程中出错:', error);
            convertButton.disabled = false;
        }
    }

    // 处理下载操作，根据图片数量决定下载方式
    function handleDownload() {
        if (selectedFiles.length === 1 && convertedBlobs.size === 1) {
            downloadImage(); // 单张图片直接下载
        } else if (convertedBlobs.size > 1) {
            downloadAllImages(); // 多张图片下载zip
        }
    }

    // 在相关操作后更新下载按钮状态
    function clearSelection() {
        selectedFiles = [];
        convertedBlobs.clear();
        fileList.style.display = 'none';
        fileList.innerHTML = '';
        previewArea.style.display = 'none';
        clearButton.style.display = 'none';
        downloadAllButton.style.display = 'none';

        updateDownloadButtonState();
    }

    // 更新下载按钮状态
    function updateDownloadButtonState() {
        const hasFiles = selectedFiles.length > 0;
        const hasConvertedFiles = convertedBlobs.size > 0;
        const allFilesConverted = hasFiles && (convertedBlobs.size === selectedFiles.length);
        
        console.log(`下载按钮状态更新: 文件数量=${selectedFiles.length}, 已转换=${convertedBlobs.size}, 全部完成=${allFilesConverted}`);
        
        downloadAllButton.disabled = !allFilesConverted;
        
        // 如果所有文件都已转换，确保下载按钮显示
        if (allFilesConverted) {
            downloadAllButton.style.display = 'inline-block';
            console.log('所有文件已转换，启用下载按钮');
        }
    }

    // 处理FAQ点击展开/收起
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            const isActive = question.classList.contains('active');
            
            // 先关闭所有已打开的FAQ
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active');
            });
            
            // 如果之前不是激活状态，则打开当前FAQ
            if (!isActive) {
                question.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
    
    // 初始化多语言支持 - 仅在尚未初始化时执行
    if (typeof initializeLanguage === 'function' && !window.languageInitialized) {
        initializeLanguage();
        window.languageInitialized = true;
    }
    
    // 添加地球图标语言切换器的交互逻辑
    const globeIcon = document.getElementById('language-globe');
    const languageContainer = document.querySelector('.language-selector-container');
    const languageOptions = document.querySelectorAll('.language-option');
    
    // 点击地球图标显示/隐藏语言选项
    if (globeIcon) {
        globeIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            languageContainer.classList.toggle('active');
        });
    }
    
    // 点击语言选项切换语言
    languageOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (typeof setLanguage === 'function' && lang) {
                // 移除所有语言选项的active类
                languageOptions.forEach(opt => opt.classList.remove('active'));
                // 给当前选中的语言选项添加active类
                this.classList.add('active');
                // 设置语言
                setLanguage(lang);
                // 关闭语言选择器
                languageContainer.classList.remove('active');
            }
        });
    });
    
    // 点击页面其他位置关闭语言选项
    document.addEventListener('click', function(e) {
        if (!languageContainer.contains(e.target)) {
            languageContainer.classList.remove('active');
        }
    });
    
    // 更新UI元素的语言
    function updateDynamicElements() {
        // 使用languages.js中的函数处理动态文本翻译
        if (typeof updateDynamicTranslations === 'function') {
            const currentLang = document.documentElement.lang || 'en';
            updateDynamicTranslations(currentLang);
        }
        
        // 更新下载按钮状态（这部分与语言无关）
        updateDownloadButtonState();
    }
    
    // 监听语言变化
    if (typeof setLanguage === 'function') {
        const originalSetLanguage = setLanguage;
        setLanguage = function(language) {
            originalSetLanguage(language);
            updateDynamicElements();
        };
    }
    
    // 初次加载也更新动态元素
    if (typeof translations !== 'undefined') {
        setTimeout(updateDynamicElements, 100);
    }

    // 清理按钮事件
    clearButton.addEventListener('click', () => {
        // 清空文件和状态
        selectedFiles = [];
        convertedBlobs = new Map();
        
        // 清空文件列表
        fileList.innerHTML = '';
        fileList.style.display = 'none';
        
        // 禁用或隐藏按钮
        convertButton.disabled = true;
        downloadAllButton.style.display = 'none';
        downloadAllButton.disabled = true;
        clearButton.style.display = 'none';
        
        // 重置预览区域
        originalPreview.src = '';
        convertedPreview.src = '';
        originalInfo.textContent = '';
        convertedInfo.textContent = '';
        
        // 隐藏预览区域
        previewArea.style.display = 'none';
        
        // 提示用户操作已完成
        console.log('已清除所有文件和转换结果');
    });

    // 添加下载全部按钮的点击事件处理程序
    downloadAllButton.addEventListener('click', () => {
        console.log('点击下载按钮, convertedBlobs大小:', convertedBlobs.size);
        
        if (convertedBlobs.size === 0) {
            alert('没有可下载的转换图片');
            return;
        }
        
        // 如果只有一个文件，直接下载
        if (convertedBlobs.size === 1 && selectedFiles.length === 1) {
            const blob = convertedBlobs.get(0);  // 使用索引0获取唯一的blob
            if (!blob || !blob.blob) {
                console.error('无效的blob数据');
                alert('下载失败，文件数据无效');
                return;
            }
            const filename = selectedFiles[0].name.replace(/\.[^/.]+$/, "") + "." + selectedFormat;
            console.log('下载单个文件:', filename);
            downloadBlob(blob.blob, filename);  // 使用blob.blob获取实际的Blob对象
            return;
        }
        
        // 多个文件打包下载
        console.log('开始创建ZIP文件...');
        const zip = new JSZip();
        let count = 0;
        
        // 使用索引作为键来获取blob数据
        selectedFiles.forEach((file, index) => {
            if (convertedBlobs.has(index)) {
                const result = convertedBlobs.get(index);
                if (result && result.blob) {
                    const filename = file.name.replace(/\.[^/.]+$/, "") + "." + selectedFormat;
                    console.log('添加文件到ZIP:', filename);
                    zip.file(filename, result.blob);
                    count++;
                } else {
                    console.warn(`索引${index}的blob数据无效`);
                }
            } else {
                console.warn(`索引${index}的文件没有对应的转换结果`);
            }
        });
        
        if (count > 0) {
            console.log('生成ZIP文件，包含', count, '个文件');
            zip.generateAsync({type: "blob"})
                .then(function(content) {
                    console.log('ZIP文件生成完成，开始下载');
                    downloadBlob(content, "converted_images.zip");
                })
                .catch(function(error) {
                    console.error('生成ZIP文件时出错:', error);
                    alert('创建ZIP文件失败，请重试');
                });
        } else {
            console.error('没有文件被添加到ZIP');
            alert('没有文件可以下载');
        }
        
        console.log('下载按钮点击处理完成');
    });
});
