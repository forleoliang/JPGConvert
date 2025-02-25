document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const convertButton = document.getElementById('convertButton');

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

    dropZone.addEventListener('drop', handleDrop);
    fileInput.addEventListener('change', handleFileSelect);
    convertButton.addEventListener('click', convertAllImages);


    function handleDrop(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    }

    function handleFileSelect(e) {
        const files = e.target.files;
        handleFiles(files);
    }

    function handleFiles(files) {
        const validFiles = Array.from(files).filter(file => file.type.match('image/(jpeg|png)'));
        if (validFiles.length > 0) {
            selectedFiles = validFiles;
            fileList.innerHTML = '';
            fileList.style.display = 'block';
            convertedBlobs.clear();
            document.querySelector('.clear-button').style.display = 'block';
            batchDownloadButton.style.display = 'block';
        
            validFiles.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                
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

            if (validFiles.length === 1) {
                displayOriginalImage(validFiles[0]);
            } else {
                previewArea.style.display = 'none';
            }
            convertButton.disabled = false;
            updateDownloadButton();
        }

        if (files.length > validFiles.length) {
            alert('Some files were skipped. Only JPEG and PNG files are supported.');
        }
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
        const size = (file.size / 1024).toFixed(2);
        infoElement.textContent = `Size: ${size} KB`;
    }

    async function convertImage(file, index = 0) {
        return new Promise((resolve) => {
            const fileItems = fileList.getElementsByClassName('file-item');
            const statusElement = fileItems[index].querySelector('.file-status');
            statusElement.innerHTML = '<div class="loading-spinner"></div>Converting...';

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

            const worker = new Worker('imageWorker.js');
            const quality = qualitySlider.value / 100;

            worker.onmessage = function(e) {
                if (e.data.success) {
                    const blob = e.data.blob;
                    if (fileItems[index]) {
                        statusElement.innerHTML = `Converted (${(blob.size / 1024).toFixed(2)} KB)`;
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
                    updateDownloadButton();
                    worker.terminate();
                    resolve();
                } else {
                    console.error('Conversion failed:', e.data.error);
                    statusElement.innerHTML = 'Conversion failed';
                    worker.terminate();
                    resolve();
                }
            };

            worker.onerror = function(error) {
                console.error('Worker error:', error);
                statusElement.innerHTML = 'Conversion failed';
                worker.terminate();
                resolve();
            };

            worker.postMessage({
                file: file,
                quality: quality,
                selectedFormat: selectedFormat
            });
        });
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

    // 添加质量控制滑块事件
    let qualityDebounceTimer;
    qualitySlider.addEventListener('input', function() {
        document.getElementById('qualityValue').textContent = this.value;
    });

    qualitySlider.addEventListener('change', function() {
        if (selectedFiles.length > 0) {
            clearTimeout(qualityDebounceTimer);
            qualityDebounceTimer = setTimeout(() => {
                convertAllImages();
            }, 300);
        }
    });

    // 批量转换功能
    async function convertAllImages() {
        convertButton.disabled = true;

        try {
            for (let i = 0; i < selectedFiles.length; i++) {
                await convertImage(selectedFiles[i], i);
            }

        } catch (error) {
            console.error('Error during conversion:', error);
        } finally {
            convertButton.disabled = false;
            updateDownloadButton(); // 更新下载按钮状态
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
        document.querySelector('.clear-button').style.display = 'none';
        batchDownloadButton.style.display = 'none';

        updateDownloadButton();
    }

    // 添加清除按钮和下载按钮
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear All';
    clearButton.className = 'clear-button';
    clearButton.onclick = clearSelection;

    const batchDownloadButton = document.createElement('button');
    batchDownloadButton.textContent = 'Download';
    batchDownloadButton.className = 'batch-download-button';
    batchDownloadButton.onclick = handleDownload; // 修改为使用handleDownload函数
    batchDownloadButton.disabled = true;
    batchDownloadButton.style.display = 'none';

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';
    buttonContainer.appendChild(clearButton);
    buttonContainer.appendChild(batchDownloadButton);
    fileList.parentNode.insertBefore(buttonContainer, fileList);

    // 更新下载按钮状态
    function updateDownloadButton() {
        const hasFiles = selectedFiles.length > 0;
        const hasConvertedFiles = convertedBlobs.size > 0;
        const allFilesConverted = hasFiles && (convertedBlobs.size === selectedFiles.length);
        
        batchDownloadButton.disabled = !allFilesConverted;
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
});
