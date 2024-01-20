const terminal = document.getElementById('terminal');
const messageElement = document.getElementById('message');
const mainContent = document.getElementById('main-content');
let messageIndex = 0;
const messages = ["welcome", "you've chosen to see how deep the rabbit hole goes. Type Y to continue or N to exit."];
let currentString = '';
let typingSpeed = 100;

function typeMessage() {
    if (messageIndex < messages.length) {
        let text = messages[messageIndex];
        currentString = text.substring(0, currentString.length + 1);
        messageElement.innerHTML = currentString;
        
        if (currentString === text) {
            messageIndex++;
        } else {
            setTimeout(typeMessage, typingSpeed);
        }
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Y' || e.key === 'y') {
        terminal.style.display = 'none';
        mainContent.style.display = 'block';
    } else if (e.key === 'N' || e.key === 'n') {
        messageElement.innerHTML = "Goodbye!";
        setTimeout(() => window.close(), 2000); // Closes the window after 2 seconds
    }
});

typeMessage();
