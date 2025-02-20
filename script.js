document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const convertButton = document.getElementById('convertButton');
    const downloadButton = document.getElementById('downloadButton');
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
    downloadButton.addEventListener('click', downloadImage);

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

            validFiles.forEach((file, index) => {
                const fileItem = document.createElement('div');
                fileItem.className = 'file-item';
                fileItem.innerHTML = `
                    <div class="file-info">
                        <span class="file-name">${file.name}</span>
                        <span class="file-size">${(file.size / 1024).toFixed(2)} KB</span>
                    </div>
                    <div class="file-status">Pending</div>
                `;
                fileList.appendChild(fileItem);
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
            const img = new Image();
            img.onload = function() {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);

                const quality = qualitySlider.value / 100;
                const mimeType = `image/${selectedFormat}`;

                canvas.toBlob(
                    (blob) => {
                        const fileItems = fileList.getElementsByClassName('file-item');
                        if (fileItems[index]) {
                            const statusElement = fileItems[index].querySelector('.file-status');
                            statusElement.textContent = `Converted (${(blob.size / 1024).toFixed(2)} KB)`;
                        }

                        convertedBlobs.set(file.name, blob);
                        if (selectedFiles.length === 1) {
                            const url = URL.createObjectURL(blob);
                            convertedPreview.src = url;
                            updateImageInfo(blob, convertedInfo);
                            downloadButton.disabled = false;
                        }
                        resolve();
                    },
                    mimeType,
                    quality
                );
            };

            img.src = URL.createObjectURL(file);
        });
    }

    function downloadImage() {
        if (selectedFiles.length === 1) {
            const blob = convertedBlobs.get(selectedFiles[0].name);
            if (!blob) return;

            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            const originalName = selectedFiles[0].name.split('.')[0];
            link.download = `${originalName}.${selectedFormat}`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            downloadAllImages();
        }
    }

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
    const updateQuality = (e) => {
        const value = e.target.value;
        qualityValue.textContent = value;
        if (selectedFiles.length > 0) {
            convertAllImages();
        }
    };
    qualitySlider.addEventListener('input', updateQuality);
    qualitySlider.addEventListener('change', updateQuality);

    // 添加批量转换功能
    async function convertAllImages() {
        convertButton.disabled = true;
        for (let i = 0; i < selectedFiles.length; i++) {
            await convertImage(selectedFiles[i], i);
        }
        convertButton.disabled = false;
    }

    // 修改转换按钮事件
    convertButton.addEventListener('click', convertAllImages);

    // 更新下载按钮状态
    function updateDownloadButton() {
        downloadButton.disabled = selectedFiles.length === 0 || convertedBlobs.size === 0;
    }

    // 在相关操作后更新下载按钮状态
    function clearSelection() {
        selectedFiles = [];
        convertedBlobs.clear();
        fileList.style.display = 'none';
        fileList.innerHTML = '';
        previewArea.style.display = 'none';
        updateDownloadButton();
    }

    // 添加清除按钮
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear All';
    clearButton.className = 'clear-button';
    clearButton.onclick = clearSelection;
    fileList.parentNode.insertBefore(clearButton, fileList);

});
