document.getElementById('ai-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        const input = e.target;
        const chatBox = document.getElementById('chat-box');

        if (input.value.trim() !== "") {
            // Add user message
            const userMsg = document.createElement('p');
            userMsg.className = 'msg-student';
            userMsg.textContent = "Student: " + input.value;
            chatBox.appendChild(userMsg);

            // Simulate AI Response
            setTimeout(() => {
                const aiMsg = document.createElement('p');
                aiMsg.className = 'msg-ai';
                aiMsg.textContent = "AI: Let me look that up for you...";
                chatBox.appendChild(aiMsg);
                chatBox.scrollTop = chatBox.scrollHeight;
            }, 1000);

            input.value = "";
        }
    }

    const uploadBtn = document.getElementById('upload-trigger');
    const fileInput = document.getElementById('file-input');

    uploadBtn.addEventListener('click', () => {
        fileInput.click(); // Triggers the hidden file selector
    });

    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (file) {
            alert(`Uploading: ${file.name}`);
            // Here you would typically use FormData and fetch() to send the file to a server
        }
    });

});