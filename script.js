//your JS code here. If required.
const meditationVideo = document.getElementById('meditation-video');
const meditationAudio = document.getElementById('meditation-audio');
const timeDisplay = document.getElementById('time-display');
const playPauseButton = document.getElementById('play-pause');

let meditationDuration = 600; // 10 minutes in seconds
let interval;

const updateTimeDisplay = () => {
    const minutes = Math.floor(meditationDuration / 60);
    const seconds = meditationDuration % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const startMeditation = () => {
    interval = setInterval(() => {
        if (meditationDuration > 0) {
            meditationDuration--;
            updateTimeDisplay();
        } else {
            clearInterval(interval);
            meditationAudio.pause();
            playPauseButton.textContent = 'Play';
        }
    }, 1000);
};

const selectTime = (duration) => {
    meditationDuration = duration;
    updateTimeDisplay();
};

document.getElementById('smaller-mins').addEventListener('click', () => selectTime(120)); // 2 min
document.getElementById('medium-mins').addEventListener('click', () => selectTime(300)); // 5 min
document.getElementById('long-mins').addEventListener('click', () => selectTime(600)); // 10 min

document.getElementById('beach-sound').addEventListener('click', () => {
    meditationAudio.src = 'Sounds/beach.mp3';
    meditationVideo.src = 'video/beach.mp4';
    meditationAudio.play();
    playPauseButton.textContent = 'Pause';
});

document.getElementById('rain-sound').addEventListener('click', () => {
    meditationAudio.src = 'Sounds/rain.mp3';
    meditationVideo.src = 'video/rain.mp4';
    meditationAudio.play();
    playPauseButton.textContent = 'Pause';
});

playPauseButton.addEventListener('click', () => {
    if (meditationAudio.paused) {
        meditationAudio.play();
        startMeditation();
        playPauseButton.textContent = 'Pause';
    } else {
        meditationAudio.pause();
        clearInterval(interval);
        playPauseButton.textContent = 'Play';
    }
});

// Initialize the display
updateTimeDisplay();