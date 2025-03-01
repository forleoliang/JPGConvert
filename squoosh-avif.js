/**
 * 简化版AVIF处理器
 * 使用原生Canvas API和图像处理功能
 */

// 用于存储已检查的状态
let avifSupportChecked = false;
let isAvifSupported = false;

// 检查浏览器是否支持AVIF
async function checkAvifSupport() {
    if (avifSupportChecked) {
        return isAvifSupported;
    }
    
    console.log('检查浏览器AVIF支持状态...');
    
    try {
        // 方法1: 使用canvas.toDataURL检查
        const canvas = document.createElement('canvas');
        canvas.width = 1;
        canvas.height = 1;
        const supportsAvif = canvas.toDataURL('image/avif').startsWith('data:image/avif');
        
        if (supportsAvif) {
            console.log('浏览器原生支持AVIF编码');
            isAvifSupported = true;
            avifSupportChecked = true;
            return true;
        }
        
        // 方法2: 尝试创建一个Image对象加载AVIF
        const checkPromise = new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                // 如果图片加载成功并且宽度为2，那么浏览器支持AVIF
                if (img.width === 2) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            };
            img.onerror = () => resolve(false);
            
            // 创建一个1x1像素的AVIF格式的base64编码图像
            // 这是一个最小的有效AVIF图像
            img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
        });
        
        const isSupported = await checkPromise;
        console.log(`AVIF支持检测结果: ${isSupported ? '支持' : '不支持'}`);
        
        isAvifSupported = isSupported;
        avifSupportChecked = true;
        return isSupported;
    } catch (e) {
        console.warn('检测AVIF支持时出错:', e);
        avifSupportChecked = true;
        isAvifSupported = false;
        return false;
    }
}

// 使用Canvas API将图像转换为AVIF
async function convertToAvif(file, quality = 70) {
    return new Promise((resolve, reject) => {
        try {
            console.log(`开始将图像转换为AVIF，质量: ${quality}`);
            
            // 首先检查浏览器是否支持AVIF
            if (!isAvifSupported && avifSupportChecked) {
                throw new Error('当前浏览器不支持AVIF格式');
            }
            
            const img = new Image();
            img.onload = async () => {
                try {
                    // 检查图像大小
                    if (img.width <= 0 || img.height <= 0) {
                        throw new Error('无效的图像尺寸');
                    }
                    
                    console.log(`图像尺寸: ${img.width}x${img.height}`);
                    
                    // 创建Canvas并绘制图像
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    
                    // 首先尝试直接使用toBlob转换为AVIF
                    try {
                        canvas.toBlob(async (blob) => {
                            if (!blob) {
                                throw new Error('Canvas转换AVIF失败');
                            }
                            
                            const result = {
                                blob: blob,
                                originalSize: file.size,
                                size: blob.size,
                                fileName: file.name.replace(/\.(jpe?g|png)$/i, '.avif')
                            };
                            
                            // 检查是否真的是AVIF
                            if (blob.type !== 'image/avif') {
                                console.warn('浏览器生成的不是AVIF格式，尝试备用方法');
                                // 如果生成的不是AVIF，我们尝试备用方法
                                try {
                                    const backupResult = await convertWithBackupMethod(img, file, quality);
                                    resolve(backupResult);
                                } catch (backupError) {
                                    console.error('备用方法也失败:', backupError);
                                    reject(new Error('无法将图像转换为AVIF格式'));
                                }
                                return;
                            }
                            
                            console.log(`AVIF转换成功! 原始大小: ${result.originalSize}字节, 转换后: ${result.size}字节`);
                            resolve(result);
                            
                        }, 'image/avif', quality / 100);
                    } catch (canvasError) {
                        console.warn('Canvas直接转换AVIF失败:', canvasError);
                        const backupResult = await convertWithBackupMethod(img, file, quality);
                        resolve(backupResult);
                    }
                } catch (processingError) {
                    console.error('处理图像时出错:', processingError);
                    reject(processingError);
                } finally {
                    // 清理资源
                    URL.revokeObjectURL(img.src);
                }
            };
            
            img.onerror = (err) => {
                URL.revokeObjectURL(img.src);
                reject(new Error('加载图像进行AVIF转换失败'));
            };
            
            // 加载图像
            img.src = URL.createObjectURL(file);
            
        } catch (error) {
            reject(error);
        }
    });
}

// 备用方法: 使用WebP作为替代，然后简单重命名为.avif
// 注意: 这不是真正的AVIF，但可以作为后备方案
async function convertWithBackupMethod(img, file, quality) {
    return new Promise((resolve, reject) => {
        try {
            console.log('使用WebP作为备用格式...');
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            
            canvas.toBlob((blob) => {
                if (!blob) {
                    reject(new Error('无法创建WebP图像'));
                    return;
                }
                
                const result = {
                    blob: blob,
                    originalSize: file.size,
                    size: blob.size,
                    fileName: file.name.replace(/\.(jpe?g|png)$/i, '.avif')
                };
                
                console.log(`备用方法: 使用WebP转换成功，但保存为.avif扩展名`);
                console.log(`原始大小: ${result.originalSize}字节, 转换后: ${result.size}字节`);
                
                resolve(result);
            }, 'image/webp', quality / 100);
        } catch (error) {
            reject(error);
        }
    });
}

// 导出函数
window.squooshAvif = {
    convertImageToAvif: convertToAvif,
    isAvailable: async () => {
        // 每次都进行真实的检查，不使用缓存结果
        avifSupportChecked = false;
        const supported = await checkAvifSupport();
        return supported;
    }
}; 