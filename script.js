document.addEventListener('DOMContentLoaded', () => {
    // ... (previous code remains the same until handleFilesSelection function)

    function handleFilesSelection(files) {
        if (files && files.length > 0) {
            uploadedFiles = [...files];
            console.log('Files selected:', uploadedFiles);

            thumbnailArea.innerHTML = '';
            previewArea.classList.remove('hidden');
            convertButton.classList.remove('hidden');
            convertButton.disabled = false;
            noFileSelectedText.classList.add('hidden');
            removeAllImagesButton.hidden = false;

            let allValid = true;
            for (const file of uploadedFiles) {
                if (!file.type.startsWith('image/png') && !file.type.startsWith('image/jpeg')) {
                    allValid = false;
                    break;
                }
            }

            if (allValid) {
                const filesToPreview = uploadedFiles.slice(0, 20);
                filesToPreview.forEach((file, index) => {
                    console.log("Processing file for thumbnail:", file.name);
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        console.log("FileReader onload triggered for:", file.name, e.target.result);
                        const thumbnailContainer = document.createElement('div');
                        thumbnailContainer.classList.add('thumbnail-container');

                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = file.name;
                        img.classList.add('thumbnail-image');

                        const removeButton = document.createElement('button');
                        removeButton.innerHTML = '×';
                        removeButton.classList.add('thumbnail-remove-button');
                        removeButton.ariaLabel = 'Remove Image';
                        removeButton.addEventListener('click', () => {
                            removeThumbnail(index);
                        });

                        thumbnailContainer.appendChild(img);
                        thumbnailContainer.appendChild(removeButton);
                        thumbnailArea.appendChild(thumbnailContainer);

                        // Set original preview image if this is the first file
                        if (index === 0) {
                            originalPreviewImage.src = e.target.result;
                            // Preview the WebP version of the first image
                            previewFirstImageWithQuality(file, currentQuality);
                        }
                    }
                    reader.onerror = (error) => {
                        console.error("FileReader error for:", file.name, error);
                        alert(`Error reading file: ${file.name}. Please check console for details.`);
                    };
                    reader.readAsDataURL(file);
                });
            } else {
                alert('Please select only PNG or JPG image files.');
                console.warn('Invalid file types selected.');
                resetUI();
            }
        } else {
            uploadedFiles = [];
            resetUI();
            noFileSelectedText.classList.remove('hidden');
        }
    }

    // ... (rest of the code remains the same)
});
