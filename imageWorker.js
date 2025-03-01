self.onmessage = function(e) {
    const { file, quality, selectedFormat } = e.data;
    
    try {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                createImageBitmap(file).then(imageBitmap => {
                    try {
                        // 检查是否支持OffscreenCanvas
                        if (typeof OffscreenCanvas !== 'undefined') {
                            const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
                            const ctx = canvas.getContext('2d');
                            ctx.drawImage(imageBitmap, 0, 0);

                            const mimeType = `image/${selectedFormat}`;
                            
                            // 检查是否支持canvas.convertToBlob
                            if (canvas.convertToBlob) {
                                canvas.convertToBlob({
                                    type: mimeType,
                                    quality: quality
                                }).then(blob => {
                                    // 比较转换前后大小
                                    if (blob.size > file.size) {
                                        console.log(`转换后图片更大: 原始: ${file.size}字节, 转换后: ${blob.size}字节`);
                                        // 返回一个标志，表明转换后文件更大
                                        self.postMessage({
                                            success: true,
                                            blob: blob,
                                            fileName: file.name,
                                            size: blob.size,
                                            originalSize: file.size,
                                            sizeIncreased: true
                                        });
                                    } else {
                                        self.postMessage({
                                            success: true,
                                            blob: blob,
                                            fileName: file.name,
                                            size: blob.size,
                                            originalSize: file.size,
                                            sizeIncreased: false
                                        });
                                    }
                                }).catch(error => {
                                    console.error('Blob conversion error:', error);
                                    self.postMessage({
                                        success: false,
                                        error: 'Failed to convert image to blob'
                                    });
                                });
                            } else {
                                // 如果不支持convertToBlob，发送图像数据回主线程
                                const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                                self.postMessage({
                                    success: false,
                                    fallback: true,
                                    imageData: imageData,
                                    width: canvas.width,
                                    height: canvas.height,
                                    fileName: file.name,
                                    originalSize: file.size,
                                    quality: quality,
                                    format: selectedFormat
                                });
                            }
                        } else {
                            // 如果不支持OffscreenCanvas，发送回主线程处理
                            self.postMessage({
                                success: false,
                                fallback: true,
                                bitmap: imageBitmap,
                                fileName: file.name,
                                originalSize: file.size,
                                quality: quality,
                                format: selectedFormat
                            });
                        }
                    } catch (err) {
                        console.error('Canvas operation error:', err);
                        self.postMessage({
                            success: false,
                            error: 'Failed to process image with canvas'
                        });
                    }
                }).catch(error => {
                    console.error('Bitmap creation error:', error);
                    self.postMessage({
                        success: false,
                        error: 'Failed to create image bitmap'
                    });
                });
            } catch (err) {
                console.error('Worker bitmap error:', err);
                self.postMessage({
                    success: false,
                    error: 'Failed in bitmap processing'
                });
            }
        };
        
        reader.onerror = function(err) {
            console.error('File reading error:', err);
            self.postMessage({
                success: false,
                error: 'Failed to read file'
            });
        };
        
        reader.readAsArrayBuffer(file);
    } catch (err) {
        console.error('Worker general error:', err);
        self.postMessage({
            success: false,
            error: 'General worker error'
        });
    }
};