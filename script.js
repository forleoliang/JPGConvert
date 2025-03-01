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

    // Format selection handling
    formatButtons.forEach(button => {
        button.addEventListener('click', () => {
            formatButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            selectedFormat = button.dataset.format;
            if (selectedFiles.length > 0) convertAllImages();
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
        infoElement.textContent = getTranslatedText('size_info', `Size: ${size} KB`).replace('{0}', size);
    }

    // 在文件顶部添加一个辅助函数来获取当前语言的翻译文本
    function getTranslatedText(key, defaultText) {
        const currentLang = document.documentElement.lang || 'en';
        if (translations && translations[currentLang] && translations[currentLang][key]) {
            return translations[currentLang][key];
        }
        return defaultText;
    }

    async function convertImage(file, index = 0) {
        console.log(`开始转换文件 #${index + 1}: ${file.name}`);
        return new Promise((resolve) => {
            const fileItems = fileList.getElementsByClassName('file-item');
            const statusElement = fileItems[index].querySelector('.file-status');
            
            // 使用当前语言显示转换中的消息
            const currentLang = document.documentElement.lang || 'en';
            let convertingText = 'Converting...';
            if (translations && translations[currentLang] && translations[currentLang].converting) {
                convertingText = translations[currentLang].converting;
            }
            statusElement.innerHTML = `<div class="loading-spinner"></div>${convertingText}`;

            if (selectedFiles.length === 1) {
                const previewBox = convertedPreview.parentNode;
                const convertedTitle = previewBox.querySelector('h3');
                const existingSpinner = previewBox.querySelector('.loading-spinner');
                
                if (existingSpinner) {
                    existingSpinner.remove();
                }

                convertedPreview.style.display = 'none';
                if (convertedTitle) convertedTitle.style.display = 'none';

                const loadingSpinner = document.createElement('div');
                loadingSpinner.className = 'loading-spinner';
                previewBox.insertBefore(loadingSpinner, convertedPreview);
            }

            try {
                // 尝试创建一个worker
                let worker;
                try {
                    worker = new Worker('imageWorker.js');
                } catch (err) {
                    console.error('创建Web Worker失败:', err);
                    fallbackConversion(file, index, resolve);
                    return;
                }

            const quality = qualitySlider.value / 100;

                // 设置超时处理
                const workerTimeout = setTimeout(() => {
                    console.warn('Web Worker响应超时，使用备用方法');
                    worker.terminate();
                    fallbackConversion(file, index, resolve);
                }, 10000); // 10秒超时

            worker.onmessage = function(e) {
                    clearTimeout(workerTimeout);
                    
                if (e.data.success) {
                    const blob = e.data.blob;
                        // 比较原始文件大小和转换后的文件大小
                        if (blob.size > file.size) {
                            console.log(`转换后文件更大，将使用原始文件格式: ${file.name} 原始大小: ${(file.size/1024).toFixed(2)} KB, 转换后大小: ${(blob.size/1024).toFixed(2)} KB`);
                            
                            // 读取原始文件并保存
                            const reader = new FileReader();
                            reader.onload = function(event) {
                                const originalBlob = new Blob([event.target.result], {type: file.type});
                                convertedBlobs.set(file.name, originalBlob);
                                
                    if (fileItems[index]) {
                                    const sizeKB = (file.size / 1024).toFixed(2);
                                    statusElement.innerHTML = getTranslatedText('original_kept', `Original kept (${sizeKB} KB)`).replace('{0}', sizeKB);
                                }
                                
                                if (selectedFiles.length === 1) {
                                    const previewBox = convertedPreview.parentNode;
                                    const loadingSpinner = previewBox.querySelector('.loading-spinner');
                                    const convertedTitle = previewBox.querySelector('h3');

                                    if (loadingSpinner) loadingSpinner.remove();
                                    if (convertedTitle) convertedTitle.style.display = 'block';
                                    
                                    const url = URL.createObjectURL(originalBlob);
                                    convertedPreview.src = url;
                                    convertedPreview.style.display = 'block';
                                    updateImageInfo(originalBlob, convertedInfo);
                                }
                                updateDownloadButtonState();
                                resolve();
                            };
                            reader.readAsArrayBuffer(file);
                        } else {
                            if (fileItems[index]) {
                                const sizeKB = (blob.size / 1024).toFixed(2);
                                const compressionRatio = ((1 - blob.size / file.size) * 100).toFixed(2);
                                const compressionText = compressionRatio > 0 ? 
                                    ` (-${compressionRatio}%)` : '';
                                statusElement.innerHTML = getTranslatedText('converted_size', `Converted (${sizeKB} KB)${compressionText}`).replace('{0}', sizeKB);
                    }

                    convertedBlobs.set(file.name, blob);
                    if (selectedFiles.length === 1) {
                        const previewBox = convertedPreview.parentNode;
                        const loadingSpinner = previewBox.querySelector('.loading-spinner');
                        const convertedTitle = previewBox.querySelector('h3');

                        if (loadingSpinner) loadingSpinner.remove();
                        if (convertedTitle) convertedTitle.style.display = 'block';
                        
                        const url = URL.createObjectURL(blob);
                        convertedPreview.src = url;
                        convertedPreview.style.display = 'block';
                        updateImageInfo(blob, convertedInfo);
                    }
                            updateDownloadButtonState();
                        }
                    worker.terminate();
                    resolve();
                } else {
                    console.error('Conversion failed:', e.data.error);
                        // 如果Worker转换失败，使用备用方法
                        worker.terminate();
                        fallbackConversion(file, index, resolve);
                    }
                };

                worker.onerror = function(e) {
                    clearTimeout(workerTimeout);
                    console.error('Worker error:', e);
                    statusElement.innerHTML = getTranslatedText('conversion_failed', 'Conversion failed');
                    worker.terminate();
                    resolve();
                };

                // 向Worker发送消息
                try {
            worker.postMessage({
                file: file,
                quality: quality,
                selectedFormat: selectedFormat
            });
                } catch (err) {
                    clearTimeout(workerTimeout);
                    console.error('向Worker发送消息失败:', err);
                    worker.terminate();
                    fallbackConversion(file, index, resolve);
                }
            } catch (err) {
                console.error('转换过程中发生错误:', err);
                fallbackConversion(file, index, resolve);
            }
        });
    }

    // 不使用Worker的备用转换方法
    function fallbackConversion(file, index, resolve) {
        const fileItems = fileList.getElementsByClassName('file-item');
        const statusElement = fileItems[index].querySelector('.file-status');
        
        // 使用当前语言显示备用转换中的消息
        const currentLang = document.documentElement.lang || 'en';
        let fallbackText = 'Converting with fallback...';
        if (translations && translations[currentLang] && translations[currentLang].converting_fallback) {
            fallbackText = translations[currentLang].converting_fallback;
        }
        statusElement.innerHTML = `<div class="loading-spinner"></div>${fallbackText}`;
        
        const quality = qualitySlider.value / 100;
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = new Image();
            img.onload = function() {
                // 创建Canvas
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                
                // 转换为Blob
                const mimeType = `image/${selectedFormat}`;
                canvas.toBlob(function(blob) {
                    if (blob) {
                        // 比较原始文件大小和转换后的文件大小
                        if (blob.size > file.size) {
                            console.log(`备用方式转换后文件更大，将使用原始文件格式: ${file.name} 原始大小: ${(file.size/1024).toFixed(2)} KB, 转换后大小: ${(blob.size/1024).toFixed(2)} KB`);
                            
                            if (fileItems[index]) {
                                const sizeKB = (file.size / 1024).toFixed(2);
                                statusElement.innerHTML = getTranslatedText('original_kept', `Original kept (${sizeKB} KB)`).replace('{0}', sizeKB);
                            }
                            
                            // 使用原始文件
                            const reader = new FileReader();
                            reader.onload = function(event) {
                                const originalBlob = new Blob([event.target.result], {type: file.type});
                                convertedBlobs.set(file.name, originalBlob);
                                
                                if (selectedFiles.length === 1) {
                                    const previewBox = convertedPreview.parentNode;
                                    const loadingSpinner = previewBox.querySelector('.loading-spinner');
                                    const convertedTitle = previewBox.querySelector('h3');
                                    
                                    if (loadingSpinner) loadingSpinner.remove();
                                    if (convertedTitle) convertedTitle.style.display = 'block';
                                    
                                    const url = URL.createObjectURL(originalBlob);
                                    convertedPreview.src = url;
                                    convertedPreview.style.display = 'block';
                                    updateImageInfo(originalBlob, convertedInfo);
                                }
                                updateDownloadButtonState();
                                resolve();
                            };
                            reader.readAsArrayBuffer(file);
                        } else {
                            if (fileItems[index]) {
                                const sizeKB = (blob.size / 1024).toFixed(2);
                                const compressionRatio = ((1 - blob.size / file.size) * 100).toFixed(2);
                                const compressionText = compressionRatio > 0 ? 
                                    ` (-${compressionRatio}%)` : '';
                                statusElement.innerHTML = getTranslatedText('converted_size', `Converted (${sizeKB} KB)${compressionText}`).replace('{0}', sizeKB);
                            }
                            
                            convertedBlobs.set(file.name, blob);
                            if (selectedFiles.length === 1) {
                                const previewBox = convertedPreview.parentNode;
                                const loadingSpinner = previewBox.querySelector('.loading-spinner');
                                const convertedTitle = previewBox.querySelector('h3');
                                
                                if (loadingSpinner) loadingSpinner.remove();
                                if (convertedTitle) convertedTitle.style.display = 'block';
                                
                                const url = URL.createObjectURL(blob);
                                convertedPreview.src = url;
                                convertedPreview.style.display = 'block';
                                updateImageInfo(blob, convertedInfo);
                            }
                            updateDownloadButtonState();
                            resolve();
                        }
                    } else {
                        console.error('Fallback conversion failed to create blob');
                        statusElement.innerHTML = getTranslatedText('conversion_failed', 'Conversion failed');
                        resolve();
                    }
                }, mimeType, quality);
            };
            
            img.onerror = function() {
                console.error('Failed to load image in fallback method');
                statusElement.innerHTML = getTranslatedText('conversion_failed', 'Conversion failed');
                resolve();
            };
            
            img.src = e.target.result;
        };
        
        reader.onerror = function() {
            console.error('Failed to read file in fallback method');
            statusElement.innerHTML = getTranslatedText('conversion_failed', 'Conversion failed');
            resolve();
        };
        
        reader.readAsDataURL(file);
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
            const blob = convertedBlobs.get(selectedFiles[0].name);
            if (!blob) return;
    
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
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

        convertedBlobs.forEach((blob, fileName) => {
            const newName = `${fileName.split('.')[0]}.${selectedFormat}`;
            folder.file(newName, blob);
        });

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
        // 禁用转换按钮防止多次点击
        convertButton.disabled = true;

        try {
            // 循环处理每个文件，传递索引
            for (let i = 0; i < selectedFiles.length; i++) {
                await convertImage(selectedFiles[i], i);
            }
            console.log('所有图片转换已完成');
        } catch (error) {
            console.error("转换过程中发生错误:", error);
        } finally {
            // 重新启用转换按钮
            convertButton.disabled = false;
            // 显示下载全部按钮
            downloadAllButton.style.display = 'inline-block';
            
            // 记录转换结果
            console.log(`转换结果统计: 文件总数=${selectedFiles.length}, 已转换=${convertedBlobs.size}`);
            updateDownloadButtonState();
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
            const isOpen = answer.style.maxHeight;
            
            // 先关闭所有已打开的FAQ
            document.querySelectorAll('.faq-answer').forEach(item => {
                item.style.maxHeight = null;
                item.previousElementSibling.classList.remove('active');
            });
            
            // 如果之前不是打开状态，则打开当前FAQ
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                question.classList.add('active');
            }
        });
    });
    
    // 初始化多语言支持
    if (typeof initializeLanguage === 'function') {
        initializeLanguage();
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
                setLanguage(lang);
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
        selectedFiles = [];
        convertedBlobs = new Map();
        fileList.innerHTML = '';
        convertButton.disabled = true;
        downloadAllButton.style.display = 'none';
        clearButton.style.display = 'none';
        // 重置预览区域
        originalPreview.src = '';
        convertedPreview.src = '';
        originalInfo.textContent = '';
        convertedInfo.textContent = '';
        // 隐藏预览区域
        previewArea.style.display = 'none';
    });

    // 添加下载全部按钮的点击事件处理程序
    downloadAllButton.addEventListener('click', () => {
        console.log('点击下载按钮, convertedBlobs大小:', convertedBlobs.size);
        
        if (convertedBlobs.size === 0) {
            alert('没有可下载的转换图片');
            return;
        }
        
        // 如果只有一个文件，直接下载
        if (convertedBlobs.size === 1) {
            const blob = convertedBlobs.values().next().value;
            const filename = selectedFiles[0].name.replace(/\.[^/.]+$/, "") + "." + selectedFormat;
            console.log('下载单个文件:', filename);
            downloadBlob(blob, filename);
            return;
        }
        
        // 多个文件打包下载
        console.log('开始创建ZIP文件...');
        const zip = new JSZip();
        let count = 0;
        
        selectedFiles.forEach((file, index) => {
            if (convertedBlobs.has(file.name)) {
                const blob = convertedBlobs.get(file.name);
                const filename = file.name.replace(/\.[^/.]+$/, "") + "." + selectedFormat;
                console.log('添加文件到ZIP:', filename);
                zip.file(filename, blob);
                count++;
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
