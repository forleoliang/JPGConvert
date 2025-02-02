document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImageArea = document.getElementById('previewImageArea'); // Get preview image area container
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const removeAllImagesButton = document.getElementById('removeAllImagesButton'); // Get remove all button (if you add one)
    const noFileSelectedText = document.getElementById('noFileSelectedText');

    let uploadedFiles = []; // Array to store multiple uploaded files

    const imageCompression = window.imageCompression;
    const JSZip = window.JSZip; // Access JSZip library

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

        const files = Array.from(e.dataTransfer.files); // Convert FileList to Array
        handleFilesSelection(files); // Call the new handler for file list
    }

    function handleFile(event) {
        const files = Array.from(event.target.files); // Convert FileList to Array
        handleFilesSelection(files); // Call the new handler for file list
    }


    function handleFilesSelection(files) {
        if (files && files.length > 0) {
            uploadedFiles = [...files]; // Store all selected files
            console.log('Files selected:', uploadedFiles);

            previewImageArea.innerHTML = ''; // Clear any existing previews

            let allValid = true;
            for (const file of uploadedFiles) {
                if (!file.type.startsWith('image/png') && !file.type.startsWith('image/jpeg')) {
                    allValid = false;
                    break;
                }
            }

            if (allValid) {
                previewArea.classList.remove('hidden');
                convertButton.classList.remove('hidden');
                convertButton.disabled = false;
                noFileSelectedText.classList.add('hidden');
                removeAllImagesButton.classList.remove('hidden'); // Show remove ALL button (if you have one)
                compressionInfo.classList.add('hidden');


                // Create and append preview images
                uploadedFiles.forEach((file, index) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const container = document.createElement('div');
                        container.classList.add('preview-image-container');

                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = file.name;
                        img.classList.add('preview-image');


                        const removeButton = document.createElement('button');
                        removeButton.innerHTML = '×';
                        removeButton.classList.add('remove-image-btn');
                        removeButton.ariaLabel = 'Remove Image';
                        removeButton.addEventListener('click', (event) => {
                            event.preventDefault();
                            removePreviewImage(index); // Call function to remove this preview image
                        });


                        container.appendChild(img);
                        container.appendChild(removeButton);
                        previewImageArea.appendChild(container);
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

    function removePreviewImage(indexToRemove) {
        console.log('Removing image at index:', indexToRemove);
        uploadedFiles = uploadedFiles.filter((_, index) => index !== indexToRemove); // Remove file from array
        previewImageArea.innerHTML = ''; // Clear all previews
        if (uploadedFiles.length > 0) {
            // Re-display remaining previews
            handleFilesSelection(uploadedFiles); // Re-render previews with updated file list
        } else {
            resetUI(); // Reset UI if no images left
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
        removeAllImagesButton.classList.add('hidden'); // Hide remove ALL button during conversion


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
                    quality: 0.6, // Or your desired default quality
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
            removeAllImagesButton.classList.remove('hidden'); // Show remove ALL button after conversion
        }
    });


    function resetUI() {
        uploadedFiles = [];
        previewImageArea.innerHTML = ''; // Clear preview images
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeAllImagesButton.classList.add('hidden'); // Hide remove ALL images button
        fileInput.value = '';
        noFileSelectedText.classList.add('hidden');
    }


    removeAllImagesButton.addEventListener('click', () => {
        console.log('Remove All Images button clicked.');
        resetUI();
        noFileSelectedText.classList.remove('hidden');
    });
});
