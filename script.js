document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const thumbnailArea = document.getElementById('thumbnailArea'); // Updated to thumbnailArea
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const removeCardButton = document.getElementById('removeCardButton'); // Updated ID
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
                removeCardButton.classList.add('hidden'); // Keep card remove button hidden
                compressionInfo.classList.add('hidden');
                displayThumbnails(); // Call function to display thumbnails
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


    function displayThumbnails() {
        thumbnailArea.innerHTML = ''; // Clear existing thumbnails

        uploadedFiles.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const thumbnailContainer = document.createElement('div');
                thumbnailContainer.classList.add('thumbnail-container');
                thumbnailContainer.dataset.index = index; // Store index for removal

                const img = document.createElement('img');
                img.src = e.target.result;
                img.alt = 'Thumbnail';
                img.classList.add('thumbnail-img');

                const removeButton = document.createElement('button');
                removeButton.type = 'button';
                removeButton.classList.add('thumbnail-remove-btn');
                removeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 17.47a.75.75 0 11-1.06-1.06L10.94 12 5.47 5.47z" clip-rule="evenodd" /></svg>`; // X icon SVG

                removeButton.addEventListener('click', (event) => {
                    event.stopPropagation(); // Prevent container click if any
                    const indexToRemove = parseInt(thumbnailContainer.dataset.index, 10);
                    removeThumbnail(indexToRemove);
                });


                thumbnailContainer.appendChild(img);
                thumbnailContainer.appendChild(removeButton);
                thumbnailArea.appendChild(thumbnailContainer);
            };
            reader.readAsDataURL(file);
        });
    }

    function removeThumbnail(indexToRemove) {
        console.log('Removing thumbnail at index:', indexToRemove);
        uploadedFiles.splice(indexToRemove, 1); // Remove file from array
        displayThumbnails(); // Re-render thumbnails
        if (uploadedFiles.length === 0) { // If no files left, reset UI
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
        removeCardButton.classList.add('hidden');


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
            removeCardButton.classList.add('hidden');
        }
    });


    function resetUI() {
        uploadedFiles = [];
        thumbnailArea.innerHTML = ''; // Clear thumbnails on reset
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeCardButton.classList.add('hidden');
        fileInput.value = '';
        noFileSelectedText.classList.add('hidden');
    }


    removeCardButton.addEventListener('click', () => { // No function bound to card remove button currently
        console.log('Remove All Images button clicked.');
        resetUI();
        noFileSelectedText.classList.remove('hidden');
    });
});
