document.addEventListener('DOMContentLoaded', () => {
    // 页面切换逻辑
    const navLinks = document.querySelectorAll('nav a[data-page]');
    const pages = document.querySelectorAll('#converterPage, #contactPage');
    const converterPage = document.getElementById('converterPage');
    const contactPage = document.getElementById('contactPage');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetPageId = link.getAttribute('data-page');

            if (targetPageId === 'converterPage') {
                converterPage.classList.remove('hidden');
                contactPage.classList.add('hidden');
            } else if (targetPageId === 'contactPage') {
                contactPage.classList.remove('hidden');
                converterPage.classList.add('hidden');
            }
        });
    });

    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const thumbnailArea = document.getElementById('thumbnailArea');
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const removeAllImagesButton = document.getElementById('removeAllImagesButton');
    const noFileSelectedText = document.getElementById('noFileSelectedText');
    const qualitySlider = document.getElementById('qualitySlider');
    const qualityValueDisplay = document.getElementById('qualityValue');
    const originalPreviewImage = document.getElementById('originalPreviewImage');
    const webpPreviewImage = document.getElementById('webpPreviewImage');

    let uploadedFiles = [];
    let currentQuality = 75;

    // Verify required libraries
    if (typeof imageCompression === 'undefined' || typeof JSZip === 'undefined') {
        console.error('Required libraries not loaded');
        alert('Required libraries failed to load. Please check your internet connection.');
        return;
    }

    // Event Listeners
    fileInput.addEventListener('change', handleFile);
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('border-blue-500', 'bg-gray-50');
    });
    dropArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        dropArea.classList.remove('border-blue-500', 'bg-gray-50');
    });
    dropArea.addEventListener('drop', dropHandler);
    qualitySlider.addEventListener('input', handleQualityChange);

    function dropHandler(e) {
        e.preventDefault();
        dropArea.classList.remove('border-blue-500', 'bg-gray-50');
        const files = Array.from(e.dataTransfer.files);
        handleFilesSelection(files);
    }

    function handleFile(event) {
        const files = Array.from(event.target.files);
        handleFilesSelection(files);
    }

    async function handleFilesSelection(files) {
        if (!files || files.length === 0) {
            resetUI();
            noFileSelectedText.classList.remove('hidden');
            return;
        }

        // Filter valid image files
        const validFiles = files.filter(file =>
            file.type.startsWith('image/png') ||
            file.type.startsWith('image/jpeg')
        );

        if (validFiles.length === 0) {
            alert('Please select only PNG or JPG images.');
            resetUI();
            return;
        }

        uploadedFiles = validFiles;

        // Show UI elements
        previewArea.classList.remove('hidden');
        convertButton.classList.remove('hidden');
        convertButton.disabled = false;
        noFileSelectedText.classList.add('hidden');
        removeAllImagesButton.hidden = false;

        // Clear existing thumbnails
        thumbnailArea.innerHTML = '';

        // Create thumbnails and set preview
        for (let i = 0; i < uploadedFiles.length; i++) {
            const file = uploadedFiles[i];
            createThumbnail(file, i);

            // Set the first image as preview
            if (i === 0) {
                setPreviewImage(file);
            }
        }
    }

    function createThumbnail(file, index) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const thumbnailContainer = document.createElement('div');
            thumbnailContainer.className = 'relative group thumbnail-container';

            const img = document.createElement('img');
            img.src = e.target.result;
            img.alt = file.name;
            img.className = 'w-full h-full object-cover rounded-md thumbnail-image';

             const removeButton = document.createElement('button');
            removeButton.innerHTML = '×';
            removeButton.className = 'absolute top-1 right-1 w-6 h-6 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity thumbnail-remove-button';
            removeButton.onclick = () => removeThumbnail(index);

            thumbnailContainer.appendChild(img);
            thumbnailContainer.appendChild(removeButton);
            thumbnailArea.appendChild(thumbnailContainer);
        };
        reader.readAsDataURL(file);
    }

    async function setPreviewImage(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            originalPreviewImage.src = e.target.result;
            previewFirstImageWithQuality(file, currentQuality);
        };
        reader.readAsDataURL(file);
    }

    async function previewFirstImageWithQuality(file, quality) {
        if (!file) return;

        try {
            const options = {
                maxSizeMB: 2,
                maxWidthOrHeight: 2000,
                useWebWorker: true,
                fileType: 'webp',
                quality: quality / 100
            };

            const compressedFile = await imageCompression(file, options);
            const reader = new FileReader();

            reader.onload = (e) => {
                webpPreviewImage.src = e.target.result;

                const originalSize = (file.size / 1024).toFixed(2);
                const compressedSize = (compressedFile.size / 1024).toFixed(2);
                const savings = (100 * (1 - compressedFile.size / file.size)).toFixed(1);

                compressionInfo.textContent =
                    `Compression: ${savings}% reduction ` +
                    `(${originalSize}KB → ${compressedSize}KB)`;
                compressionInfo.classList.remove('hidden');
            };

            reader.readAsDataURL(compressedFile);

        } catch (error) {
            console.error('Preview generation failed:', error);
            alert('Failed to generate preview. Please try again.');
        }
    }

    function handleQualityChange(event) {
        currentQuality = parseInt(event.target.value);
        qualityValueDisplay.textContent = currentQuality;

        if (uploadedFiles.length > 0) {
            previewFirstImageWithQuality(uploadedFiles[0], currentQuality);
        }
    }

    function removeThumbnail(index) {
        uploadedFiles.splice(index, 1);
        thumbnailArea.innerHTML = '';

        if (uploadedFiles.length > 0) {
            uploadedFiles.forEach((file, i) => createThumbnail(file, i));
            setPreviewImage(uploadedFiles[0]);
        } else {
            resetUI();
        }
    }

    convertButton.onclick = async () => {
        if (uploadedFiles.length === 0) {
            alert('请先选择图片。');
            return;
        }

        convertButton.disabled = true;
        convertButton.textContent = '转换中...';

        try {
            const options = {
                maxSizeMB: 2,
                maxWidthOrHeight: 2000,
                useWebWorker: true,
                fileType: 'webp',
                quality: currentQuality / 100
            };

            let downloadUrl;
            let downloadFileName;
            let totalOriginalSize = 0;
            let totalCompressedSize = 0;

            if (uploadedFiles.length === 1) {
                // 单张图片直接下载WebP
                const compressedFile = await imageCompression(uploadedFiles[0], options);
                const blob = new Blob([await compressedFile.arrayBuffer()], { type: 'image/webp' });
                downloadUrl = URL.createObjectURL(blob);
                downloadFileName = uploadedFiles[0].name.replace(/\.(png|jpg|jpeg)$/i, '.webp');
                totalOriginalSize = uploadedFiles[0].size;
                totalCompressedSize = compressedFile.size;
            } else {
                // 多张图片打包下载
                const zip = new JSZip();
                for (const file of uploadedFiles) {
                    const compressedFile = await imageCompression(file, options);
                    totalOriginalSize += file.size;
                    totalCompressedSize += compressedFile.size;
                    const newFileName = file.name.replace(/\.(png|jpg|jpeg)$/i, '.webp');
                    zip.file(newFileName, await compressedFile.arrayBuffer());
                }
                const zipBlob = await zip.generateAsync({ type: 'blob' });
                downloadUrl = URL.createObjectURL(zipBlob);
                downloadFileName = 'converted-images.zip';
            }

            // 设置下载链接和事件处理
            downloadLink.onclick = (e) => {
                e.preventDefault();
                const a = document.createElement('a');
                a.href = downloadUrl;
                a.download = downloadFileName;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(downloadUrl);
            };
            downloadLinkArea.classList.remove('hidden');

            const savings = (100 * (1 - totalCompressedSize / totalOriginalSize)).toFixed(1);
            compressionInfo.textContent =
                `总压缩率: ${savings}% ` +
                `(${(totalOriginalSize / 1024).toFixed(2)}KB → ${(totalCompressedSize / 1024).toFixed(2)}KB)`;

        } catch (error) {
            console.error('转换失败:', error);
            alert('图片转换失败，请重试。');
        } finally {
            convertButton.disabled = false;
            convertButton.textContent = '转换图片';
        }
    };

    function resetUI() {
        uploadedFiles = [];
        thumbnailArea.innerHTML = '';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeAllImagesButton.hidden = true;
        fileInput.value = '';
        originalPreviewImage.src = '#';
        webpPreviewImage.src = '#';
    }

    removeAllImagesButton.onclick = () => {
        resetUI();
    };

    // 初始化页面显示
    const hash = window.location.hash;
    if (hash === '#contactPage') {
        converterPage.classList.add('hidden');
        contactPage.classList.remove('hidden');
    } else {
        converterPage.classList.remove('hidden');
        contactPage.classList.add('hidden');
    }
});
