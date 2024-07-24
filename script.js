let hours = 0;
let minutes = 0;
let seconds = 0;
let intervalId = null;

document.getElementById('start-button').addEventListener('click', startTimer);
document.getElementById('reset-button').addEventListener('click', resetTimer);

function startTimer() {
  intervalId = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      minutes++;
      seconds = 0;
    }
    if (minutes === 60) {
      hours++;
      minutes = 0;
    }
    updateDisplay();
  }, 1000);
}

function resetTimer() {
  clearInterval(intervalId);
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('hours').innerText = pad(hours);
  document.getElementById('minutes').innerText = pad(minutes);
  document.getElementById('seconds').innerText = pad(seconds);
}

function pad(number) {
  return (number < 10 ? '0' : '') + number;
}