document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');

    let uploadedFile = null;

    const imageCompression = window.imageCompression;

    if (typeof imageCompression === 'undefined') {
        console.error('Error: browser-image-compression library not loaded! Please check the CDN link in index.html.');
        alert('Image conversion library failed to load. Please check your network connection and the CDN link in index.html.'); // 英文错误提示
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
        if (file && file.type.startsWith('image/png')) {
            uploadedFile = file;
            console.log('PNG file uploaded:', uploadedFile);
            displayPreview(file);
        } else {
            alert('Please select a PNG image file.'); // 英文提示
            console.warn('Invalid file type selected. Please select a PNG image.');
            resetUI();
        }
    }

    function displayPreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewArea.classList.remove('hidden');
            convertButton.classList.remove('hidden');
            convertButton.disabled = false;
            compressionInfo.classList.add('hidden');
        };
        reader.readAsDataURL(file);
    }

    convertButton.addEventListener('click', async () => {
        if (!uploadedFile) {
            alert('Please select or drag and drop a PNG image first.'); // 英文提示
            return;
        }

        convertButton.textContent = 'Converting...'; // 英文转换中按钮文字
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');

        try {
            console.log('Starting image compression...');
            const originalFileSize = uploadedFile.size;
            const compressedFile = await imageCompression(uploadedFile, {
                maxSizeMB: 2,
                maxWidthOrHeight: 2000,
                useWebWorker: true,
                fileType: 'webp',
            });
            console.log('Image compression completed successfully.');
            console.log('Compressed image file:', compressedFile);
            const compressedFileSize = compressedFile.size;
            const compressionPercentage = ((originalFileSize - compressedFileSize) / originalFileSize) * 100;
            const formattedPercentage = compressionPercentage.toFixed(2);
            console.log(`Compression percentage: ${formattedPercentage}%`);

            compressionInfo.textContent = `Compression Ratio: ${formattedPercentage}% (Original Size: ${(originalFileSize / 1024).toFixed(2)}KB, Compressed Size: ${(compressedFileSize / 1024).toFixed(2)}KB)`; // 英文压缩信息
            compressionInfo.classList.remove('hidden');

            const downloadUrl = URL.createObjectURL(compressedFile);
            downloadLink.href = downloadUrl;
            downloadLink.download = uploadedFile.name.replace('.png', '.webp');
            downloadLinkArea.classList.remove('hidden');

        } catch (error) {
            console.error('Image compression/conversion failed:', error);
            console.error('Error details:', error);
            alert('Image conversion failed. Please try again later and check the console for error details.'); // 英文错误提示
        } finally {
            convertButton.textContent = 'Convert to WebP & Download'; // 英文转换按钮文字
            convertButton.disabled = false;
        }
    });

    function resetUI() {
        uploadedFile = null;
        previewImage.src = '#';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        fileInput.value = '';
    }
});
