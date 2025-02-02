document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('imageUpload');
    const dropArea = document.getElementById('dropArea');
    const previewArea = document.getElementById('previewArea');
    const previewImage = document.getElementById('previewImage');
    const convertButton = document.getElementById('convertButton');
    const downloadLinkArea = document.getElementById('downloadLinkArea');
    const downloadLink = document.getElementById('downloadLink');

    let uploadedFile = null;

    // 引入 browser-image-compression 库 (通过 CDN 引入，无需额外安装)
    // 也可以下载库文件到本地，然后本地引入
    const imageCompression = window.imageCompression; // 假设 browser-image-compression 库已经通过 CDN 引入，并挂载到 window.imageCompression

    // 文件选择事件
    fileInput.addEventListener('change', handleFile);

    // 拖拽事件
    dropArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        dropArea.classList.add('hover:border-blue-500', 'hover:bg-gray-50'); // 添加 hover 样式
    });

    dropArea.addEventListener('dragleave', () => {
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50'); // 移除 hover 样式
    });

    dropArea.addEventListener('drop', (e) => {
        e.preventDefault();
        dropArea.classList.remove('hover:border-blue-500', 'hover:bg-gray-50'); // 移除 hover 样式

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
            displayPreview(file);
        } else {
            alert('请选择 PNG 图片文件');
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

        try {
            const compressedFile = await imageCompression(uploadedFile, {
                maxSizeMB: 2,          // (可选) 最大文件大小 MB，根据需要调整，这里设置为 2MB
                maxWidthOrHeight: 2000, // (可选) 图片最大宽度或高度，根据需要调整，这里设置为 2000px
                useWebWorker: true,     // 使用 Web Worker，避免阻塞主线程
                fileType: 'webp',       // 强制输出为 webp 格式
                // quality: 0.8          // (可选) WebP 图片质量，0-1 之间，默认 0.8，可以尝试调整
            });

            console.log('压缩后的图片:', compressedFile);

            // 创建下载链接
            const downloadUrl = URL.createObjectURL(compressedFile);
            downloadLink.href = downloadUrl;
            downloadLink.download = uploadedFile.name.replace('.png', '.webp'); // 下载的文件名
            downloadLinkArea.classList.remove('hidden');

        } catch (error) {
            console.error('图片压缩/转换失败:', error);
            alert('图片转换失败，请稍后重试');
        } finally {
            convertButton.textContent = '转换为 WebP 并下载'; // 按钮恢复文字
            convertButton.disabled = false; // 启用按钮
        }
    });

    // 重置 UI 状态
    function resetUI() {
        uploadedFile = null;
        previewImage.src = '#';
        previewArea.classList.add('hidden');
        convertButton.classList.add('hidden');
        downloadLinkArea.classList.add('hidden');
        fileInput.value = ''; // 清空文件 input 的值
    }
});
