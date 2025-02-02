document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage'); // Reusing previewImage for "Before"
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const removeImageButton = document.getElementById('removeImageButton');
    const noFileSelectedText = document.getElementById('noFileSelectedText');
    const comparisonArea = document.getElementById('comparisonArea'); // Get comparison area
    const beforeImage = document.getElementById('beforeImage');       // Get before image element
    const afterImage = document.getElementById('afterImage');         // Get after image element


    let uploadedFile = null;

    const imageCompression = window.imageCompression;

    if (typeof imageCompression === 'undefined') {
        console.error('Error: browser-image-compression library not loaded!');
        alert('Image conversion library failed to load.');
        return;
    } else {
        console.log('browser-image-compression library loaded successfully.');
    }

    fileInput.addEventListener('change', handleFile);
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('hover:border-blue-500', 'hover:bg-gray-50');
    });
    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50');
    });
    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50');

        const files = e.dataTransfer.files;
        if (files && files.length > 0) {
            uploadedFile = files[0];
            displayPreview(uploadedFile);
        }
    });

    function handleFile(event) {
        const file = event.target.files[0] || uploadedFile;
        if (file && (file.type.startsWith('image/png') || file.type.startsWith('image/jpeg'))) {
            uploadedFile = file;
            console.log('PNG/JPG file uploaded:', uploadedFile);
            displayPreview(file);
            noFileSelectedText.classList.add('hidden');
        } else if (file) {
            alert('Please select a PNG or JPG image file.');
            console.warn('Invalid file type selected.');
            resetUI();
        } else {
            uploadedFile = null;
            resetUI();
            noFileSelectedText.classList.remove('hidden');
        }
    }

    function displayPreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result; // Preview image is now "Before" image visually
            beforeImage.src = e.target.result; // Set "Before" image in comparison
            previewArea.classList.remove('hidden');
            convertButton.classList.remove('hidden');
            convertButton.disabled = false;
            compressionInfo.classList.add('hidden');
            removeImageButton.classList.remove('hidden');
            comparisonArea.classList.add('hidden'); // Hide comparison area initially on new preview
        };
        reader.readAsDataURL(file);
    }

    convertButton.addEventListener('click', async () => {
        if (!uploadedFile) {
            alert('Please select or drag and drop a PNG or JPG image first.');
            return;
        }

        convertButton.textContent = 'Converting...';
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeImageButton.classList.add('hidden');
        comparisonArea.classList.add('hidden'); // Hide comparison area before new conversion

        try {
            console.log('Starting image compression...');
            const originalFileSize = uploadedFile.size;
            console.log('Original File Size (bytes):', originalFileSize);

            const compressedFile = await imageCompression(uploadedFile, {
                maxSizeMB: 2,
                maxWidthOrHeight: 2000,
                useWebWorker: true,
                fileType: 'webp',
                quality: 0.6,
            });
            console.log('Image compression completed successfully.');
            const compressedFileSize = compressedFile.size;
            console.log('Compressed File Size (bytes):', compressedFileSize);

            const compressionPercentage = ((originalFileSize - compressedFileSize) / originalFileSize) * 100;
            const formattedPercentage = compressionPercentage.toFixed(2);
            console.log(`Compression percentage: ${formattedPercentage}%`);

            compressionInfo.textContent = `Compression Ratio: ${formattedPercentage}% (Original Size: ${(originalFileSize / 1024).toFixed(2)}KB, Compressed Size: ${(compressedFileSize / 1024).toFixed(2)}KB)`;
            compressionInfo.classList.remove('hidden');

            const downloadUrl = URL.createObjectURL(compressedFile);
            downloadLink.href = downloadUrl;
            const fileName = uploadedFile.name.replace(/\.(png|jpg)$/i, '.webp');
            downloadLink.download = fileName;
            downloadLinkArea.classList.remove('hidden');

            afterImage.src = downloadUrl; // Set "After" image in comparison
            comparisonArea.classList.remove('hidden'); // Show comparison area after conversion

        } catch (error) {
            console.error('Image conversion failed:', error);
            console.error('Error details:', error);
            alert('Image conversion failed. Please try again and check the console.');
        } finally {
            convertButton.textContent = 'Convert';
            convertButton.disabled = false;
            removeImageButton.classList.remove('hidden');
        }
    });

    function resetUI() {
        uploadedFile = null;
        previewImage.src = '#'; // Clear preview/before image
        beforeImage.src = '#';    // Clear before image explicitly
        afterImage.src = '#';     // Clear after image
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeImageButton.classList.add('hidden');
        comparisonArea.classList.add('hidden'); // Hide comparison area on reset
        fileInput.value = '';
        noFileSelectedText.classList.add('hidden');
    }

    removeImageButton.addEventListener('click', () => {
        console.log('Remove Image button clicked.');
        resetUI();
        noFileSelectedText.classList.remove('hidden');
    });
});
