document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileList = document.getElementById('fileList');

    uploadButton.addEventListener('click', () => {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const listItem = document.createElement('li');
            
            const fileName = document.createElement('span');
            fileName.textContent = file.name;
            listItem.appendChild(fileName);

            const actions = document.createElement('div');
            actions.classList.add('file-actions');

            const downloadButton = document.createElement('button');
            downloadButton.textContent = 'Download';
            downloadButton.addEventListener('click', () => {
                const link = document.createElement('a');
                link.href = URL.createObjectURL(file);
                link.download = file.name;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

            const shareButton = document.createElement('button');
            shareButton.textContent = 'Share';
            shareButton.addEventListener('click', () => {
                const dummyInput = document.createElement('input');
                document.body.appendChild(dummyInput);
                dummyInput.value = window.location.href + '#file=' + encodeURIComponent(file.name);
                dummyInput.select();
                document.execCommand('copy');
                document.body.removeChild(dummyInput);
                alert('Link copied to clipboard!');
            });

            actions.appendChild(downloadButton);
            actions.appendChild(shareButton);

            listItem.appendChild(actions);
            fileList.appendChild(listItem);

            alert(`File "${file.name}" uploaded successfully!`);
        } else {
            alert("Please select a file to upload.");
        }
    });

    // Load file from URL hash
    const loadFileFromHash = () => {
        const urlHash = window.location.hash;
        if (urlHash.startsWith('#file=')) {
            const fileName = decodeURIComponent(urlHash.substring(6));
            alert(`Shared link opened for file: "${fileName}"`);
        }
    };

    window.addEventListener('hashchange', loadFileFromHash);
    loadFileFromHash(); // Load file if hash present on initial load
});
