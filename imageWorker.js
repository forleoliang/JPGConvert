self.onmessage = function(e) {
    const { file, quality, selectedFormat } = e.data;
    
    try {
        const reader = new FileReader();
        reader.onload = function(event) {
            try {
                createImageBitmap(file).then(imageBitmap => {
                    try {
                        // 检查是否支持OffscreenCanvas
                        let canvas;
                        let ctx;
                        
                        if (typeof OffscreenCanvas !== 'undefined') {
                            canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
                            ctx = canvas.getContext('2d');
                        } else {
                            // 如果不支持OffscreenCanvas，通知主线程使用回退方法
                            self.postMessage({
                                success: false,
                                error: 'OffscreenCanvas not supported',
                                needFallback: true
                            });
                            return;
                        }
                        
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
                                    error: 'Failed to convert image to blob',
                                    needFallback: true
                                });
                            });
                        } else if (canvas.toBlob) {
                            // 备用方法
                            canvas.toBlob(
                                blob => {
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
                                },
                                mimeType,
                                quality
                            );
                        } else {
                            // 不支持toBlob，通知主线程使用回退方法
                            self.postMessage({
                                success: false,
                                error: 'Canvas blob methods not supported',
                                needFallback: true
                            });
                        }
                    } catch (err) {
                        console.error('Canvas operation error:', err);
                        self.postMessage({
                            success: false,
                            error: 'Failed to process image with canvas',
                            needFallback: true
                        });
                    }
                }).catch(error => {
                    console.error('Bitmap creation error:', error);
                    self.postMessage({
                        success: false,
                        error: 'Failed to create image bitmap',
                        needFallback: true
                    });
                });
            } catch (err) {
                console.error('Worker bitmap error:', err);
                self.postMessage({
                    success: false,
                    error: 'Failed in bitmap processing',
                    needFallback: true
                });
            }
        };
        
        reader.onerror = function(err) {
            console.error('File reading error:', err);
            self.postMessage({
                success: false,
                error: 'Failed to read file',
                needFallback: true
            });
        };
        
        reader.readAsArrayBuffer(file);
    } catch (err) {
        console.error('Worker general error:', err);
        self.postMessage({
            success: false,
            error: 'General worker error',
            needFallback: true
        });
    }
};