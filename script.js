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

    let uploadedFiles = [];

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
                const filesToPreview = uploadedFiles.slice(0, 20); // Take only the first 20 files
                filesToPreview.forEach((file, index) => {
                    console.log("Processing file for thumbnail:", file.name); // DEBUG
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log("FileReader onload triggered for:", file.name, e.target.result); // DEBUG
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
                    reader.onerror = (error) => { // Add error handling for FileReader
                        console.error("FileReader error for:", file.name, error);
                        alert(`Error reading file: ${file.name}. Please check console for details.`); // User friendly error message
                    };
                    reader.readAsDataURL(file);
                });


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
        } else {
            resetUI();
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
        previewArea.classList.remove('hidden');
        compressionInfo.classList.add('hidden');
        removeAllImagesButton.classList.add('hidden');


        const zip = new JSZip();
        const webpFiles = [];
        let totalOriginalSize = 0;
        let totalCompressedSize = 0;

        try {
            console.log('Starting batch image conversion...');

            for (let i = 0; i < uploadedFiles.length; i++) {
                const file = uploadedFiles[i];
                console.log(`Processing file ${i + 1} of ${uploadedFiles.length}:`, file.name);
                totalOriginalSize += file.size;

                const compressedFile = await imageCompression(file, {
                    maxSizeMB: 2,
                    maxWidthOrHeight: 2000,
                    useWebWorker: true,
                    fileType: 'webp',
                    quality: 0.6,
                });

                totalCompressedSize += compressedFile.size;
                webpFiles.push({ file: compressedFile, originalName: file.name });
                console.log(`File ${i + 1} converted:`, file.name, '->', compressedFile.name);
            }


            console.log('Batch image conversion completed successfully.');

            const totalCompressionPercentage = ((totalOriginalSize - totalCompressedSize) / totalOriginalSize) * 100;
            const formattedPercentage = totalCompressionPercentage.toFixed(2);
            console.log(`Total Compression percentage for all files: ${formattedPercentage}%`);

            compressionInfo.textContent = `Total Compression Ratio: ${formattedPercentage}% (Original Total Size: ${(totalOriginalSize / 1024).toFixed(2)}KB, Compressed Total Size: ${(totalCompressedSize / 1024).toFixed(2)}KB)`;
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
    }


    removeAllImagesButton.addEventListener('click', () => {
        console.log('Remove All Images button clicked.');
        resetUI();
        noFileSelectedText.classList.remove('hidden');
    });
});
