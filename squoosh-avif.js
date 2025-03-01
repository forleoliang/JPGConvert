/**
 * Squoosh AVIF Encoder
 * 基于谷歌Squoosh项目的AVIF编码器封装
 */

// AVIF编码器URL - 使用更稳定的CDN托管的Squoosh编码器
const AVIF_ENCODER_URL = 'https://unpkg.com/@squoosh/lib@0.4.0/build/squoosh.js';
const AVIF_ENCODER_WASM_URL = 'https://unpkg.com/@squoosh/lib@0.4.0/build/avif/enc/avif_enc.wasm';
const AVIF_CODEC_META_URL = 'https://unpkg.com/@squoosh/lib@0.4.0/build/avif/enc/avif_enc_meta.js';

// 用于存储已加载的编码器实例
let avifEncoderInstance = null;
let avifEncoderPromise = null;

// 初始化AVIF编码器
async function initAvifEncoder() {
    if (avifEncoderPromise) return avifEncoderPromise;
    
    avifEncoderPromise = new Promise(async (resolve, reject) => {
        try {
            console.log('开始加载AVIF编码器...');
            
            // 动态加载Squoosh AVIF编码器脚本
            const scriptEl = document.createElement('script');
            scriptEl.src = AVIF_ENCODER_URL;
            scriptEl.crossOrigin = 'anonymous'; // 添加跨域支持
            
            const scriptPromise = new Promise((resolveScript, rejectScript) => {
                scriptEl.onload = () => {
                    console.log('Squoosh主脚本加载成功');
                    resolveScript();
                };
                scriptEl.onerror = (err) => {
                    console.error('加载AVIF编码器脚本失败:', err);
                    rejectScript(new Error('加载AVIF编码器脚本失败'));
                };
            });
            
            document.head.appendChild(scriptEl);
            await scriptPromise;
            
            // 加载元数据脚本
            const metaScriptEl = document.createElement('script');
            metaScriptEl.src = AVIF_CODEC_META_URL;
            metaScriptEl.crossOrigin = 'anonymous'; // 添加跨域支持
            
            const metaScriptPromise = new Promise((resolveMetaScript, rejectMetaScript) => {
                metaScriptEl.onload = () => {
                    console.log('AVIF元数据脚本加载成功');
                    resolveMetaScript();
                };
                metaScriptEl.onerror = (err) => {
                    console.error('加载AVIF元数据脚本失败:', err);
                    rejectMetaScript(new Error('加载AVIF元数据脚本失败'));
                };
            });
            
            document.head.appendChild(metaScriptEl);
            await metaScriptPromise;
            
            // 检查全局对象
            if (typeof Squoosh !== 'undefined' && Squoosh.codecs && Squoosh.codecs.avif) {
                console.log('使用新版Squoosh API');
                avifEncoderInstance = Squoosh.codecs.avif;
                resolve(avifEncoderInstance);
                return;
            }
            
            // 兼容旧版API
            if (typeof AvifEncoderModule === 'undefined') {
                console.error('找不到AVIF编码器模块');
                throw new Error('AVIF编码器模块加载失败');
            }
            
            console.log('使用旧版AvifEncoderModule API');
            
            // 配置WASM路径
            const avifModule = await AvifEncoderModule({
                locateFile: (file) => {
                    if (file.endsWith('.wasm')) {
                        return AVIF_ENCODER_WASM_URL;
                    }
                    return file;
                }
            });
            
            avifEncoderInstance = avifModule;
            console.log('AVIF编码器初始化成功');
            resolve(avifEncoderInstance);
        } catch (error) {
            console.error('AVIF编码器初始化错误:', error);
            avifEncoderPromise = null;
            reject(new Error('AVIF编码失败: ' + error.message));
        }
    });
    
    return avifEncoderPromise;
}

// 将图像数据编码为AVIF
async function encodeImageToAvif(imageData, quality = 70) {
    try {
        const encoder = await initAvifEncoder();
        console.log('获取到AVIF编码器:', typeof encoder);
        
        // 配置AVIF编码选项
        const options = {
            // AVIF特定选项
            cqLevel: Math.floor(100 - quality), // 质量级别转换
            cqAlphaLevel: -1, // 自动
            subsample: 1, // 4:2:0 色度子采样
            tileColsLog2: 0, // 自动
            tileRowsLog2: 0, // 自动
            speed: 4, // 编码速度 (0-10, 越小质量越好但越慢)
            quantizer: 100 - quality // 量化参数 (较低值 = 较高质量)
        };
        
        // 检查是否为新版Squoosh API
        if (typeof Squoosh !== 'undefined' && Squoosh.codecs && Squoosh.codecs.avif) {
            console.log('使用新版Squoosh API进行AVIF编码');
            try {
                const pixelData = {
                    data: new Uint8ClampedArray(imageData.data),
                    width: imageData.width,
                    height: imageData.height
                };
                
                const encoded = await Squoosh.codecs.avif.encode(pixelData, {
                    cqLevel: options.cqLevel,
                    cqAlphaLevel: options.cqAlphaLevel,
                    subsample: options.subsample,
                    tileColsLog2: options.tileColsLog2,
                    tileRowsLog2: options.tileRowsLog2,
                    speed: options.speed
                });
                
                return new Blob([encoded], { type: 'image/avif' });
            } catch (err) {
                console.error('新版API编码失败:', err);
                throw err;
            }
        }
        
        // 使用旧版API
        console.log('使用旧版API进行AVIF编码');
        
        // 编码图像
        const result = encoder.encode(
            new Uint8ClampedArray(imageData.data),
            imageData.width,
            imageData.height,
            options
        );
        
        return new Blob([result.binary], { type: 'image/avif' });
    } catch (error) {
        console.error('AVIF编码错误:', error);
        throw new Error('AVIF编码失败: ' + error.message);
    }
}

// 转换图像文件为AVIF格式
async function convertImageToAvif(file, quality = 70) {
    return new Promise((resolve, reject) => {
        try {
            const img = new Image();
            img.onload = async () => {
                try {
                    // 创建Canvas并绘制图像
                    const canvas = document.createElement('canvas');
                    canvas.width = img.width;
                    canvas.height = img.height;
                    const ctx = canvas.getContext('2d');
                    ctx.drawImage(img, 0, 0);
                    
                    // 获取图像数据
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    
                    // 转换为AVIF
                    const avifBlob = await encodeImageToAvif(imageData, quality);
                    
                    // 清理
                    URL.revokeObjectURL(img.src);
                    
                    resolve({
                        blob: avifBlob,
                        originalSize: file.size,
                        size: avifBlob.size,
                        fileName: file.name.replace(/\.(jpe?g|png)$/i, '.avif')
                    });
                } catch (err) {
                    console.error('AVIF conversion error:', err);
                    reject(err);
                }
            };
            
            img.onerror = (err) => {
                URL.revokeObjectURL(img.src);
                reject(new Error('加载图像进行AVIF转换失败'));
            };
            
            img.src = URL.createObjectURL(file);
        } catch (error) {
            reject(error);
        }
    });
}

// 导出函数
window.squooshAvif = {
    convertImageToAvif,
    isAvailable: async () => {
        try {
            console.log('开始检查AVIF编码器可用性...');
            
            // 首先检查浏览器是否原生支持AVIF
            const canvas = document.createElement('canvas');
            canvas.width = 2;
            canvas.height = 2;
            const supportsAvif = canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
            
            if (supportsAvif) {
                console.log('浏览器原生支持AVIF编码');
                return true;
            }
            
            // 检查Squoosh全局对象
            if (typeof Squoosh !== 'undefined' && Squoosh.codecs && Squoosh.codecs.avif) {
                console.log('检测到Squoosh AVIF编码器');
                return true;
            }
            
            // 尝试加载Squoosh编码器
            await initAvifEncoder();
            console.log('AVIF编码器加载成功');
            return true;
        } catch (e) {
            console.warn('AVIF编码器不可用:', e);
            return false;
        }
    }
}; 