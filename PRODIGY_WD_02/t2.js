let startTime;
let elapsedTime = 0;
let timerInterval;

function updateDisplay() {
  const time = Date.now() - startTime + elapsedTime;
  const hours = Math.floor(time / (1000 * 60 * 60)).toString().padStart(2, '0');
  const minutes = Math.floor((time / (1000 * 60)) % 60).toString().padStart(2, '0');
  const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
  document.getElementById('display').textContent = `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateDisplay, 1000);
  }
}

function pause() {
  if (timerInterval) {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    timerInterval = null;
  }
}

function reset() {
  clearInterval(timerInterval);
  timerInterval = null;
  startTime = null;
  elapsedTime = 0;
  document.getElementById('display').textContent = '00:00:00';
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (!timerInterval) return;
  const lapTime = document.getElementById('display').textContent;
  const lapItem = document.createElement('li');
  lapItem.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(lapItem);
}
