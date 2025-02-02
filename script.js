document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const imageStackContainer = document.getElementById('imageStackContainer'); // Get stack container
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const noFileSelectedText = document.getElementById('noFileSelectedText');

    let uploadedFiles = [];

    const imageCompression = window.imageCompression;
    const JSZip = window.JSZip;

    if (!imageCompression || !JSZip) {
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

            imageStackContainer.innerHTML = ''; // Clear any existing previews

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
                compressionInfo.classList.add('hidden'); // Hide compression info initially

                uploadedFiles.forEach((file, index) => { // Loop through each uploaded file
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        const imagePreview = document.createElement('img');
                        imagePreview.src = e.target.result;
                        imagePreview.alt = file.name;
                        imagePreview.classList.add('image-preview-stacked'); // Apply stacked image class

                        const removeButton = document.createElement('button');
                        removeButton.innerHTML = '×';
                        removeButton.classList.add('remove-preview-btn');
                        removeButton.ariaLabel = 'Remove Image';

                        removeButton.addEventListener('click', (event) => {
                            event.preventDefault(); event.stopPropagation(); // Stop event bubbling

                            const fileNameToRemove = file.name;
                            uploadedFiles = uploadedFiles.filter(f => f.name !== fileNameToRemove); // Remove file from array

                            console.log('File removed:', fileNameToRemove, 'Remaining files:', uploadedFiles);
                            imageStackContainer.removeChild(imagePreview.parentNode); // Remove preview from UI

                            if (uploadedFiles.length === 0) {
                                resetUI(); // Reset UI if no files left
                            }

                        });


                        const previewItem = document.createElement('div'); // Container for each preview and remove button
                        previewItem.appendChild(imagePreview);
                        previewItem.appendChild(removeButton);
                        imageStackContainer.appendChild(previewItem); // Add to stack container


                    };
                    reader.readAsDataURL(file); // Read file for preview
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


            webpFiles.forEach(webpFile => {
                zip.file(webpFile.originalName.replace(/\.(png|jpg)$/i, '.webp'), webpFile.file);
            });
            const zipBlob = await zip.generateAsync({ type: "blob" });


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
        }
    });


    function resetUI() {
        uploadedFiles = [];
        imageStackContainer.innerHTML = ''; // Clear image previews
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        fileInput.value = '';
        noFileSelectedText.classList.add('hidden');
    }


    const removeImageButton = null; // removeImageButton from header is removed in HTML, not needed here now.

});
