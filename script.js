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
                quality: 0.6, // IMPORTANT: Ensure quality is set here
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
