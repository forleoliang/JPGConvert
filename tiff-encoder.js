// 简单的TIFF编码器
// 基于TIFF 6.0规范实现基本的RGB TIFF编码

class TIFFEncoder {
    constructor() {
        this.littleEndian = true; // 使用小端字节序
    }

    // 将图像数据编码为TIFF格式
    encode(imageData, width, height) {
        const { data } = imageData;
        
        // 计算图像数据大小（RGB，每像素3字节）
        const imageSize = width * height * 3;
        const rgbData = new Uint8Array(imageSize);
        
        // 将RGBA转换为RGB
        for (let i = 0, j = 0; i < data.length; i += 4, j += 3) {
            rgbData[j] = data[i];     // R
            rgbData[j + 1] = data[i + 1]; // G
            rgbData[j + 2] = data[i + 2]; // B
            // 忽略Alpha通道
        }
        
        // 创建TIFF文件
        const tiffData = this.createTIFF(rgbData, width, height);
        return new Blob([tiffData], { type: 'image/tiff' });
    }
    
    createTIFF(imageData, width, height) {
        // TIFF文件结构：
        // 1. TIFF Header (8 bytes)
        // 2. IFD (Image File Directory)
        // 3. Image data
        
        const ifdEntries = 12; // IFD条目数量
        const ifdSize = 2 + (ifdEntries * 12) + 4; // IFD大小
        const imageDataOffset = 8 + ifdSize; // 图像数据偏移
        
        const totalSize = imageDataOffset + imageData.length;
        const buffer = new ArrayBuffer(totalSize);
        const view = new DataView(buffer);
        const uint8View = new Uint8Array(buffer);
        
        let offset = 0;
        
        // TIFF Header
        // 字节序标识 (II = little endian)
        view.setUint16(offset, 0x4949, false); offset += 2;
        // TIFF版本号 (42)
        view.setUint16(offset, 42, this.littleEndian); offset += 2;
        // 第一个IFD的偏移
        view.setUint32(offset, 8, this.littleEndian); offset += 4;
        
        // IFD (Image File Directory)
        // IFD条目数量
        view.setUint16(offset, ifdEntries, this.littleEndian); offset += 2;
        
        // IFD条目
        // 1. ImageWidth (256)
        this.writeIFDEntry(view, offset, 256, 4, 1, width); offset += 12;
        
        // 2. ImageLength (257)
        this.writeIFDEntry(view, offset, 257, 4, 1, height); offset += 12;
        
        // 3. BitsPerSample (258) - RGB每通道8位
        const bitsPerSampleOffset = totalSize - 6; // 放在文件末尾
        this.writeIFDEntry(view, offset, 258, 3, 3, bitsPerSampleOffset); offset += 12;
        
        // 4. Compression (259) - 无压缩
        this.writeIFDEntry(view, offset, 259, 3, 1, 1); offset += 12;
        
        // 5. PhotometricInterpretation (262) - RGB
        this.writeIFDEntry(view, offset, 262, 3, 1, 2); offset += 12;
        
        // 6. StripOffsets (273) - 图像数据偏移
        this.writeIFDEntry(view, offset, 273, 4, 1, imageDataOffset); offset += 12;
        
        // 7. SamplesPerPixel (277) - RGB 3个通道
        this.writeIFDEntry(view, offset, 277, 3, 1, 3); offset += 12;
        
        // 8. RowsPerStrip (278) - 所有行在一个strip中
        this.writeIFDEntry(view, offset, 278, 4, 1, height); offset += 12;
        
        // 9. StripByteCounts (279) - 图像数据大小
        this.writeIFDEntry(view, offset, 279, 4, 1, imageData.length); offset += 12;
        
        // 10. XResolution (282)
        const xResolutionOffset = totalSize - 14;
        this.writeIFDEntry(view, offset, 282, 5, 1, xResolutionOffset); offset += 12;
        
        // 11. YResolution (283)
        const yResolutionOffset = totalSize - 22;
        this.writeIFDEntry(view, offset, 283, 5, 1, yResolutionOffset); offset += 12;
        
        // 12. ResolutionUnit (296) - 英寸
        this.writeIFDEntry(view, offset, 296, 3, 1, 2); offset += 12;
        
        // 下一个IFD的偏移 (0 = 没有更多IFD)
        view.setUint32(offset, 0, this.littleEndian); offset += 4;
        
        // 写入图像数据
        uint8View.set(imageData, imageDataOffset);
        
        // 写入BitsPerSample数据 (8, 8, 8)
        view.setUint16(bitsPerSampleOffset, 8, this.littleEndian);
        view.setUint16(bitsPerSampleOffset + 2, 8, this.littleEndian);
        view.setUint16(bitsPerSampleOffset + 4, 8, this.littleEndian);
        
        // 写入分辨率数据 (72 DPI)
        // XResolution
        view.setUint32(xResolutionOffset, 72, this.littleEndian);
        view.setUint32(xResolutionOffset + 4, 1, this.littleEndian);
        
        // YResolution
        view.setUint32(yResolutionOffset, 72, this.littleEndian);
        view.setUint32(yResolutionOffset + 4, 1, this.littleEndian);
        
        return uint8View;
    }
    
    writeIFDEntry(view, offset, tag, type, count, value) {
        view.setUint16(offset, tag, this.littleEndian);      // Tag
        view.setUint16(offset + 2, type, this.littleEndian); // Type
        view.setUint32(offset + 4, count, this.littleEndian); // Count
        view.setUint32(offset + 8, value, this.littleEndian); // Value/Offset
    }
}

// 导出TIFF编码器
window.TIFFEncoder = TIFFEncoder;