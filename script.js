document.addEventListener('DOMContentLoaded', () => {
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
    const qualitySlider = document.getElementById('qualitySlider'); // 获取质量滑块
    const qualityValueDisplay = document.getElementById('qualityValue'); // 获取质量值显示 span
    const originalPreviewImage = document.getElementById('originalPreviewImage'); // 获取原始预览图 img 元素
    const webpPreviewImage = document.getElementById('webpPreviewImage'); // 获取 WebP 预览图 img 元素


    let uploadedFiles = [];
    let currentQuality = 75; // 初始质量值，与滑块初始值一致


    const imageCompression = window.imageCompression;
    const JSZip = window.JSZip;

    if (typeof imageCompression === 'undefined' || typeof JSZip === 'undefined') {
        console.error('Error: Required libraries not loaded! Check CDN links.');
        alert('Libraries failed to load. Check network and CDN links.');
        return;
    } else {
        console.log('Required libraries loaded successfully.');
    }

    fileInput.addEventListener('change', handleFile);
    dropArea.addEventListener('dragover', dragOverHandler);
    dropArea.addEventListener('dragleave', dragLeaveHandler);
    dropArea.addEventListener('drop', dropHandler);
    qualitySlider.addEventListener('input', handleQualityChange); // 监听质量滑块 input 事件


    function dragOverHandler(e) {
        e.preventDefault();
        dropArea.classList.add('hover:border-blue-500', 'hover:bg-gray-50');
    }

    function dragLeaveHandler() {
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50');
    }

    function dropHandler(e) {
        e.preventDefault();
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50');

        const files = Array.from(e.dataTransfer.files);
        handleFilesSelection(files);
    }

    function handleFile(event) {
        const files = Array.from(event.target.files);
        handleFilesSelection(files);
    }


    function handleFilesSelection(files) {
        if (files && files.length > 0) {
            uploadedFiles = [...files];
            console.log('Files selected:', uploadedFiles);

            thumbnailArea.innerHTML = ''; // Clear previous thumbnails
            previewArea.classList.remove('hidden');
            convertButton.classList.remove('hidden');
            convertButton.disabled = false;
            noFileSelectedText.classList.add('hidden');
            removeAllImagesButton.classList.remove('hidden');

            let allValid = true;
            for (const file of uploadedFiles) {
                if (!file.type.startsWith('image/png') && !file.type.startsWith('image/jpeg')) {
                    allValid = false;
                    break;
                }
            }

            if (allValid) {
                // Limit to max 20 thumbnails for display
                const filesToPreview = uploadedFiles.slice(0, 20);
                filesToPreview.forEach((file, index) => {
                    console.log("Processing file for thumbnail:", file.name);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log("FileReader onload triggered for:", file.name, e.target.result);
                        const thumbnailContainer = document.createElement('div');
                        thumbnailContainer.classList.add('thumbnail-container');

                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = file.name;
                        img.classList.add('thumbnail-image');

                        const removeButton = document.createElement('button');
                        removeButton.innerHTML = '×';
                        removeButton.classList.add('thumbnail-remove-button');
                        removeButton.ariaLabel = 'Remove Image';
                        removeButton.addEventListener('click', () => {
                            removeThumbnail(index);
                        });

                        thumbnailContainer.appendChild(img);
                        thumbnailContainer.appendChild(removeButton);
                        thumbnailArea.appendChild(thumbnailContainer);
                    }
                    reader.onerror = (error) => {
                        console.error("FileReader error for:", file.name, error);
                        alert(`Error reading file: ${file.name}. Please check console for details.`);
                    };
                    reader.readAsDataURL(file);

                    // 显示第一张上传的图片作为原始预览图 (只显示一次)
                    if (index === 0) {
                        originalPreviewImage.src = e.target.result;
                    }
                });

                // 初始时，用默认质量值压缩并预览第一张图片
                if (uploadedFiles.length > 0) {
                    previewFirstImageWithQuality(uploadedFiles[0], currentQuality);
                }


            } else {
                alert('Please select only PNG or JPG image files.');
                console.warn('Invalid file types selected.');
                resetUI();
            }


        } else {
            uploadedFiles = [];
            resetUI();
            noFileSelectedText.classList.remove('hidden');
        }
    }

    function removeThumbnail(indexToRemove) {
        console.log('Removing thumbnail at index:', indexToRemove);
        uploadedFiles = uploadedFiles.filter((_, index) => index !== indexToRemove);
        console.log('Remaining files:', uploadedFiles);
        thumbnailArea.innerHTML = ''; // Clear all thumbnails
        if (uploadedFiles.length > 0) {
             // Limit to max 20 thumbnails for re-render as well
            const filesToPreview = uploadedFiles.slice(0, 20);
             filesToPreview.forEach((file, index) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    const thumbnailContainer = document.createElement('div');
                    thumbnailContainer.classList.add('thumbnail-container');

                    const img = document.createElement('img');
                    img.src = e.target.result;
                    img.alt = file.name;
                    img.classList.add('thumbnail-image');

                    const removeButton = document.createElement('button');
                    removeButton.innerHTML = '×';
                    removeButton.classList.add('thumbnail-remove-button');
                    removeButton.ariaLabel = 'Remove Image';
                    removeButton.addEventListener('click', () => {
                        removeThumbnail(index);
                    });

                    thumbnailContainer.appendChild(img);
                    thumbnailContainer.appendChild(removeButton);
                    thumbnailArea.appendChild(thumbnailContainer);
                }
                reader.readAsDataURL(file);
            });
            // 移除图片后，如果还有图片，重新预览第一张
            previewFirstImageWithQuality(uploadedFiles[0], currentQuality);
        } else {
            resetUI();
        }
    }


    async function previewFirstImageWithQuality(imageFile, quality) {
        if (!imageFile) return; // 如果没有图片，则返回

        console.log(`Previewing first image: ${imageFile.name} with quality: ${quality}`);
        previewArea.classList.remove('hidden'); // 确保预览区域显示
        webpPreviewImage.src = '#'; // 清空 WebP 预览图，显示加载状态

        try {
            const compressedFile = await imageCompression(imageFile, {
                maxSizeMB: 2,
                maxWidthOrHeight: 2000,
                useWebWorker: true,
                fileType: 'webp',
                quality: quality / 100, // 质量值从 0-100 转换为 0-1 范围
            });
            const webpURL = URL.createObjectURL(compressedFile);
            webpPreviewImage.src = webpURL; // 显示 WebP 预览图

            const originalFileSize = imageFile.size;
            const compressedFileSize = compressedFile.size;
            const compressionPercentage = ((originalFileSize - compressedFileSize) / originalFileSize) * 100;
            const formattedPercentage = compressionPercentage.toFixed(2);

            compressionInfo.textContent = `Compression Ratio (Quality: ${quality}): ${formattedPercentage}% (Original Size: ${(originalFileSize / 1024).toFixed(2)}KB, Compressed Size: ${(compressedFileSize / 1024).toFixed(2)}KB)`;
            compressionInfo.classList.remove('hidden');


        } catch (error) {
            console.error('Preview generation failed:', error);
            webpPreviewImage.src = '#'; // 预览失败时，清空 WebP 预览图
            compressionInfo.textContent = 'Preview generation failed.';
            compressionInfo.classList.remove('hidden');
        }
    }


    function handleQualityChange(event) {
        currentQuality = parseInt(event.target.value); // 获取滑块的整数值
        qualityValueDisplay.textContent = currentQuality; // 更新显示的质量值

        if (uploadedFiles.length > 0) {
            previewFirstImageWithQuality(uploadedFiles[0], currentQuality); // 使用新的质量值重新预览第一张图片
        }
    }



    convertButton.addEventListener('click', async () => {
        if (!uploadedFiles || uploadedFiles.length === 0) {
            alert('Please select or drag and drop PNG or JPG images first.');
            return;
        }

        convertButton.textContent = 'Converting Images...';
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        previewArea.classList.remove('hidden'); // 确保预览区域显示
        compressionInfo.classList.add('hidden');
        removeAllImagesButton.classList.add('hidden');


        const zip = new JSZip();
        const webpFiles = [];
        let totalOriginalSize = 0;
        let totalCompressedSize = 0;

        try {
            console.log('Starting batch image conversion with quality:', currentQuality); // 记录当前质量值

            for (let i = 0; i < uploadedFiles.length; i++) {
                const file = uploadedFiles[i];
                const options = {
                    maxSizeMB: 2,
                    maxWidthOrHeight: 2000,
                    useWebWorker: true,
                    fileType: 'webp',
                    quality: currentQuality / 100, // 使用当前的质量值
                };
                console.log(`Processing file ${i + 1} of ${uploadedFiles.length}:`, file.name, file.type, file.size);
                console.log("Compression options:", options);
                totalOriginalSize += file.size;

                const startTime = performance.now();
                const compressedFile = await imageCompression(file, options);
                const endTime = performance.now();
                console.log(`imageCompression execution time: ${endTime - startTime} milliseconds`);


                totalCompressedSize += compressedFile.size;
                webpFiles.push({ file: compressedFile, originalName: file.name });
                console.log(`File ${i + 1} converted:`, file.name, '->', compressedFile.name, 'Original Size:', file.size, 'Compressed Size:', compressedFile.size);


            }


            console.log('Batch image conversion completed successfully.');

            const totalCompressionPercentage = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100;
            const formattedPercentage = totalCompressionPercentage.toFixed(2);
            console.log(`Total Compression percentage for all files: ${formattedPercentage}%`);

            compressionInfo.textContent = `Total Compression Ratio (Quality: ${currentQuality}): ${formattedPercentage}% (Original Total Size: ${(totalOriginalSize / 1024).toFixed(2)}KB, Compressed Total Size: ${(totalCompressedSize / 1024).toFixed(2)}KB)`; // 显示当前质量值
            compressionInfo.classList.remove('hidden');


            // Create ZIP archive
            webpFiles.forEach(webpFile => {
                zip.file(webpFile.originalName.replace(/\.(png|jpg)$/i, '.webp'), webpFile.file);
            });
            const zipBlob = await zip.generateAsync({ type: "blob" });


            // Create download link for ZIP
            const downloadUrlZip = URL.createObjectURL(zipBlob);
            downloadLink.href = downloadUrlZip;
            downloadLinkArea.classList.remove('hidden');


        } catch (error) {
            console.error('Batch image conversion failed:', error);
            console.error('Error details:', error);
            alert('Batch image conversion failed. See console for details.');
        } finally {
            convertButton.textContent = 'Convert Images';
            convertButton.disabled = false;
            removeAllImagesButton.classList.remove('hidden');
        }
    });


    function resetUI() {
        uploadedFiles = [];
        thumbnailArea.innerHTML = '';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeAllImagesButton.classList.add('hidden');
        fileInput.value = '';
        noFileSelectedText.classList.add('hidden');
        originalPreviewImage.src = '#'; // 清空原始预览图
        webpPreviewImage.src = '#';    // 清空 WebP 预览图
    }


    removeAllImagesButton.addEventListener('click', () => {
        console.log('Remove All Images button clicked.');
        resetUI();
        noFileSelectedText.classList.remove('hidden');
    });
});
