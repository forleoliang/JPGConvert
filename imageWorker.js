self.onmessage = function(e) {
    const { file, quality, selectedFormat } = e.data;
    
    const reader = new FileReader();
    reader.onload = function(event) {
        createImageBitmap(file).then(imageBitmap => {
            const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(imageBitmap, 0, 0);

            const mimeType = `image/${selectedFormat}`;
            canvas.convertToBlob({
                type: mimeType,
                quality: quality
            }).then(blob => {
                self.postMessage({
                    success: true,
                    blob: blob,
                    fileName: file.name,
                    size: blob.size
                });
            }).catch(error => {
                self.postMessage({
                    success: false,
                    error: 'Failed to convert image'
                });
            });
        }).catch(error => {
            self.postMessage({
                success: false,
                error: 'Failed to create image bitmap'
            });
        });
    };
    reader.onerror = function() {
        self.postMessage({
            success: false,
            error: 'Failed to read file'
        });
    };
    reader.readAsArrayBuffer(file);
};