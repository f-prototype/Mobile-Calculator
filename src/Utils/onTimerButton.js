let data = new Date(2023, 0, 1, 0, 0, 0, 0);
let timerId;
export const onTimerButton = (event, playBtn, setPlayBtn, setTimerValue) => {
  if (event.target.parentElement.value === 'play_stop') {
    setPlayBtn(!playBtn);
    if (event.target.alt === 'play') {
      timerId = setInterval(() => update(setTimerValue), 1000);
    } else {
      stopTimer();
    }
  } else {
    clearValueTimer(setTimerValue);
  }
};

function update(setTimerValue) {
  data.setSeconds(data.getSeconds() + 1);

  let hour = data.getHours();
  if (hour < 10) {
    hour = '0' + hour;
  }

  let minutes = data.getMinutes();
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  let seconds = data.getSeconds();
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  setTimerValue({ hour: hour, minutes: minutes, seconds: seconds });
}

export function stopTimer() {
  clearInterval(timerId);
  timerId = null;
}

export function clearValueTimer(setTimerValue) {
  let hour = '00';
  data.setHours(0);
  let minutes = '00';
  data.setMinutes(0);
  let seconds = '00';
  data.setSeconds(0);
  setTimerValue({ hour, minutes, seconds });
}
