document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');
    const compressionInfo = document.getElementById('compressionInfo');
    const removeImageButton = document.getElementById('removeImageButton'); // 获取移除图片按钮
    const noFileSelectedText = document.getElementById('noFileSelectedText'); // 获取 "No file selected." 提示文字

    let uploadedFile = null;

    // 引入 browser-image-compression 库 (通过 CDN 引入，在 index.html 中已引入)
    const imageCompression = window.imageCompression;

    // 检查 imageCompression 库是否成功加载 (调试用)
    if (typeof imageCompression === 'undefined') {
        console.error('Error: browser-image-compression library not loaded! Please check the CDN link in index.html.');
        alert('Image conversion library failed to load. Please check your network connection and CDN link in index.html.'); // 英文提示
        return; // 停止执行后续代码
    } else {
        console.log('browser-image-compression library loaded successfully.'); // 调试信息
    }

    // 文件选择事件
    fileInput.addEventListener('change', handleFile);

    // 拖拽事件
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

    // 处理文件上传和拖拽
    function handleFile(event) {
        const file = event.target.files[0] || uploadedFile; //优先使用 input file 选择的文件，其次使用拖拽上传的文件
        if (file && (file.type.startsWith('image/png') || file.type.startsWith('image/jpeg'))) {
            uploadedFile = file;
            console.log('PNG/JPG file uploaded:', uploadedFile); // 调试信息
            displayPreview(file);
            noFileSelectedText.classList.add('hidden'); // 隐藏 "No file selected." 提示
        } else if (file) { // 选择了文件，但不是 PNG/JPG
            alert('Please select a PNG or JPG image file.'); // 英文提示
            console.warn('Invalid file type selected. Please select a PNG or JPG image.'); // 调试信息
            resetUI();
        } else { // 没有选择文件 (例如，点击取消)
            uploadedFile = null; // 确保 uploadedFile 为 null
            resetUI();
            noFileSelectedText.classList.remove('hidden'); // 显示 "No file selected." 提示
        }
    }

    // 显示图片预览
    function displayPreview(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            previewImage.src = e.target.result;
            previewArea.classList.remove('hidden');
            convertButton.classList.remove('hidden');
            convertButton.disabled = false; // 上传图片后启用转换按钮
            compressionInfo.classList.add('hidden');
            removeImageButton.classList.remove('hidden'); // 显示移除图片按钮
        };
        reader.readAsDataURL(file);
    }

    // 转换按钮点击事件
    convertButton.addEventListener('click', async () => {
        if (!uploadedFile) {
            alert('Please select or drag and drop a PNG or JPG image first.'); // 英文提示
            return;
        }

        convertButton.textContent = 'Converting...'; // 按钮显示 "Converting..."
        convertButton.disabled = true; // 禁用按钮
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeImageButton.classList.add('hidden'); // 转换时隐藏移除图片按钮

        try {
            console.log('Starting image compression...'); // 调试信息
            const originalFileSize = uploadedFile.size;
            const compressedFile = await imageCompression(uploadedFile, {
                maxSizeMB: 2,          // (可选) 最大文件大小 MB，根据需要调整，这里设置为 2MB
                maxWidthOrHeight: 2000, // (可选) 图片最大宽度或高度，根据需要调整，这里设置为 2000px
                useWebWorker: true,     // 使用 Web Worker，避免阻塞主线程
                fileType: 'webp',       // 强制输出为 webp 格式
                // quality: 0.8          // (可选) WebP 图片质量，0-1 之间，默认 0.8，可以尝试调整
            });
            console.log('Image compression completed successfully.'); // 调试信息
            console.log('Compressed image file:', compressedFile); // 调试信息
            const compressedFileSize = compressedFile.size;
            const compressionPercentage = ((originalFileSize - compressedFileSize) / originalFileSize) * 100;
            const formattedPercentage = compressionPercentage.toFixed(2);
            console.log(`Compression percentage: ${formattedPercentage}%`); // 调试信息

           compressionInfo.textContent = `Compression Ratio: ${formattedPercentage}% (Original Size: ${(originalFileSize / 1024).toFixed(2)}KB, Compressed Size: ${(compressedFileSize / 1024).toFixed(2)}KB)`; // 英文压缩信息
            compressionInfo.classList.remove('hidden');

            // 创建下载链接
            const downloadUrl = URL.createObjectURL(compressedFile);
            downloadLink.href = downloadUrl;
            const fileName = uploadedFile.name.replace(/\.(png|jpg)$/i, '.webp'); // 使用正则表达式同时替换 .png 和 .jpg，忽略大小写
            downloadLink.download = fileName;
            downloadLinkArea.classList.remove('hidden');

        } catch (error) {
            console.error('Image conversion failed:', error); // 英文错误信息
            console.error('Error details:', error);
            alert('Image conversion failed. Please try again later, and check the console for error details.'); // 英文提示
        } finally {
            convertButton.textContent = 'Convert'; // 按钮恢复文字 "Convert"
            convertButton.disabled = false; // 启用按钮 (允许用户再次转换)
            removeImageButton.classList.remove('hidden'); // 转换完成后显示移除图片按钮
        }
    });

    // 重置 UI 状态
    function resetUI() {
        uploadedFile = null;
        previewImage.src = '#';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true;
        downloadLinkArea.classList.add('hidden');
        compressionInfo.classList.add('hidden');
        removeImageButton.classList.add('hidden'); // 重置时隐藏移除图片按钮
        fileInput.value = ''; // 清空文件 input 的值
        noFileSelectedText.classList.add('hidden'); // 重置时隐藏 "No file selected." 提示
    }

    // 移除图片按钮点击事件
    removeImageButton.addEventListener('click', () => {
        console.log('Remove Image button clicked.'); // 调试信息
        resetUI();
        noFileSelectedText.classList.remove('hidden'); // 显示 "No file selected." 提示
    });
});
