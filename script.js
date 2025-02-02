document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');

    let uploadedFile = null;

    // 引入 browser-image-compression 库 (通过 CDN 引入，在 index.html 中已引入)
    const imageCompression = window.imageCompression;

    // 检查 imageCompression 库是否成功加载 (调试用)
    if (typeof imageCompression === 'undefined') {
        console.error('Error: browser-image-compression library not loaded! Please check the CDN link in index.html.');
        alert('图片转换功能依赖的库加载失败，请检查网络连接和 index.html 中的 CDN 引入。');
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
        if (file && file.type.startsWith('image/png')) {
            uploadedFile = file;
            console.log('PNG file uploaded:', uploadedFile); // 调试信息
            displayPreview(file);
        } else {
            alert('请选择 PNG 图片文件');
            console.warn('Invalid file type selected. Please select a PNG image.'); // 调试信息
            resetUI();
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
        };
        reader.readAsDataURL(file);
    }

    // 转换按钮点击事件
    convertButton.addEventListener('click', async () => {
        if (!uploadedFile) {
            alert('请先选择或拖拽 PNG 图片');
            return;
        }

        convertButton.textContent = '转换中...'; // 按钮显示 "转换中..."
        convertButton.disabled = true; // 禁用按钮
        downloadLinkArea.classList.add('hidden'); // 转换前先隐藏下载链接区域

        try {
            console.log('Starting image compression...'); // 调试信息
            const compressedFile = await imageCompression(uploadedFile, {
                maxSizeMB: 2,          // (可选) 最大文件大小 MB，根据需要调整，这里设置为 2MB
                maxWidthOrHeight: 2000, // (可选) 图片最大宽度或高度，根据需要调整，这里设置为 2000px
                useWebWorker: true,     // 使用 Web Worker，避免阻塞主线程
                fileType: 'webp',       // 强制输出为 webp 格式
                // quality: 0.8          // (可选) WebP 图片质量，0-1 之间，默认 0.8，可以尝试调整
            });
            console.log('Image compression completed successfully.'); // 调试信息
            console.log('Compressed image file:', compressedFile); // 调试信息

            // 创建下载链接
            const downloadUrl = URL.createObjectURL(compressedFile);
            downloadLink.href = downloadUrl;
            downloadLink.download = uploadedFile.name.replace('.png', '.webp'); // 下载的文件名
            downloadLinkArea.classList.remove('hidden');

        } catch (error) {
            console.error('图片压缩/转换失败:', error);
            console.error('Error details:', error); // 打印更详细的错误信息
            alert('图片转换失败，请稍后重试，并查看控制台错误信息。');
        } finally {
            convertButton.textContent = '转换为 WebP 并下载'; // 按钮恢复文字
            convertButton.disabled = false; // 启用按钮 (允许用户再次转换，虽然通常用户只会转换一次)
        }
    });

    // 重置 UI 状态
    function resetUI() {
        uploadedFile = null;
        previewImage.src = '#';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        convertButton.disabled = true; // 重置后禁用转换按钮
        downloadLinkArea.classList.add('hidden');
        fileInput.value = ''; // 清空文件 input 的值
    }
});
