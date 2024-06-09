document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.getElementById('fileInput');
    const uploadButton = document.getElementById('uploadButton');
    const fileList = document.getElementById('fileList');

    uploadButton.addEventListener('click', () => {
        if (fileInput.files.length > 0) {
            const file = fileInput.files[0];
            const listItem = document.createElement('li');
            listItem.textContent = file.name;
            fileList.appendChild(listItem);
            // Note: Actual file upload functionality would require server-side code
            alert(`File "${file.name}" uploaded successfully!`);
        } else {
            alert("Please select a file to upload.");
        }
    });
});
