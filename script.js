// Loading Screen Logic
const loadingScreen = document.getElementById('loadingScreen');
const loadingPercentage = document.getElementById('loadingPercentage');
const enterSiteButton = document.getElementById('enterSiteButton');
let loadPercent = 0;

function increaseLoading() {
    if (loadPercent < 100) {
        loadPercent++;
        loadingPercentage.textContent = loadPercent + '%';
        setTimeout(increaseLoading, 20); // Adjust time as needed for loading effect
    } else {
        enterSiteButton.style.display = 'block';
    }
}

// Start loading when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(increaseLoading, 1000); // Start loading 1 second after page load
});

// Event listener for 'Enter Site' button
enterSiteButton.addEventListener('click', () => {
    // Hide loading screen and show terminal
    loadingScreen.style.display = 'none';
    terminal.style.display = 'block';

    // Start the music
    matrixAudio.play().catch(err => {
        console.error("Audio playback was prevented by the browser.", err);
    });

    // Start the terminal typing effect after a short delay
    setTimeout(typeMessage, 1000); // Adjust delay as needed
});

// Attempt to play the audio when the DOM has loaded
document.addEventListener('DOMContentLoaded', (event) => {
    matrixAudio.play().catch(err => {
        console.error("Audio playback was prevented by the browser.", err);
        // Handle blocked autoplay here if necessary
    });
});

// Keydown event for user interaction
document.addEventListener('keydown', (e) => {
    if ((e.key === 'Y' || e.key === 'y') && currentMessageIndex >= fullMessages.length) {
        terminal.style.display = 'none';
    } else if ((e.key === 'N' || e.key === 'n') && currentMessageIndex >= fullMessages.length) {
        messageElement.innerHTML += "\nGoodbye!";
        setTimeout(() => {
            window.close(); // Closes the window after 2 seconds
            matrixAudio.pause(); // Stop the music when user chooses to leave
        }, 2000);
    }
});
