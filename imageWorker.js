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
                            // 降级使用普通Canvas (仍然在worker中)
                            canvas = new self.Canvas(imageBitmap.width, imageBitmap.height);
                            ctx = canvas.getContext('2d');
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
                                    error: 'Failed to convert image to blob'
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
                            // 最后的备用方法
                            const dataURL = canvas.toDataURL(mimeType, quality);
                            const byteString = atob(dataURL.split(',')[1]);
                            const ab = new ArrayBuffer(byteString.length);
                            const ia = new Uint8Array(ab);
                            
                            for (let i = 0; i < byteString.length; i++) {
                                ia[i] = byteString.charCodeAt(i);
                            }
                            
                            const blob = new Blob([ab], { type: mimeType });
                            
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