let countdown;

function startCountdown() {
  const countdownInput = document.getElementById("Countdown");
  const time = parseInt(countdownInput.value);
  
  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid positive number.");
    return;
  }

  countdownInput.disabled = true;
  document.querySelector('button').disabled = true;

  let timerDisplay = document.getElementById("timer");
  let endTime = Date.now() + time * 1000;

  countdown = setInterval(function() {
    let remainingTime = Math.round((endTime - Date.now()) / 1000);
    if (remainingTime < 0) {
      clearInterval(countdown);
      timerDisplay.innerHTML = "Time's up!";
      countdownInput.disabled = false;
      document.querySelector('button').disabled = false;
    } else {
      let minutes = Math.floor(remainingTime / 60);
      let seconds = remainingTime % 60;
      timerDisplay.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }
  }, 1000);
}