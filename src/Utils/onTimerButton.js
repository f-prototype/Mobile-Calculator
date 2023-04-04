let data = new Date(2023, 0, 1, 0, 0, 0, 0);
export const onTimerButton = (event, playBtn, setPlayBtn) => {
  // if (event.target.parentElement.value === 'play_stop') {
  //   setPlayBtn(!playBtn);
  //   if (event.target.alt === 'play') {
  //     timerId = setInterval(() => {
  //       update();
  //       return obj;
  //     }, 1000);
  //   } else {
  //     stopTimer();
  //   }
  // } else {
  //   clearValueTimer();
  // }
};

export function update() {
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

  return { hour: hour, minutes: minutes, seconds: seconds };
}

export function stopTimer(timerId) {
  clearInterval(timerId);
  timerId = null;
}

export function clearValueTimer() {
  let hour = '00';
  data.setHours(0);
  let minutes = '00';
  data.setMinutes(0);
  let seconds = '00';
  data.setSeconds(0);
  return { hour, minutes, seconds };
}
