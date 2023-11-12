let timers = [null, 0, 0, 0, 0, 0];

function startTimer(timerIndex) {
  if (timers[timerIndex] === null) {
    timers[timerIndex] = setInterval(() => {
      const timerElement = document.getElementById(`timer${timerIndex}`);
      const time = timerElement.textContent.split(':');
      let minutes = parseInt(time[0]);
      let seconds = parseInt(time[1]);

      if (seconds === 59) {
        minutes++;
        seconds = 0;
      } else {
        seconds++;
      }

      timerElement.innerText = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
  }
}

function stopTimer(timerIndex) {
  clearInterval(timers[timerIndex]);
  timers[timerIndex] = null;
}

function stopAllTimers() {
  for (let i = 1; i <= 5; i++) {
    clearInterval(timers[i]);
    timers[i] = null;
    document.getElementById(`timer${i}`).innerText = '0:00';
  }
}
