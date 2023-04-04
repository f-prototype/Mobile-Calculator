import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setTimerValue } from '../../slices/mathSlice';
import { Button } from '../UI/button/Button';
import { update, clearValueTimer } from '../../Utils/onTimerButton';
import play from '../../img/play.svg';
import stop from '../../img/cancel.svg';
import cancel from '../../img/stop.svg';
import style from './TimerButtons.module.css';

let timerId;

export const TimerButtons = () => {
  const theme = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch();
  const [playBtn, setPlayBtn] = useState(true);

  const onTimerClick = (event) => {
    if (event.target.parentElement.value === 'play_stop') {
      if (event.target.alt === 'play') {
        timerId = setInterval(() => {
          let res = update();
          dispatch(setTimerValue(res));
        }, 1000);
      } else {
        clearInterval(timerId);
        timerId = null;
      }
      setPlayBtn(!playBtn);
    } else {
      let res = clearValueTimer();
      clearInterval(timerId);
      timerId = null;
      dispatch(setTimerValue(res));
      setPlayBtn(true);
    }
  };
  return (
    <div
      className={style.timerContainer}
      onClick={(event) => {
        onTimerClick(event);
      }}
    >
      <Button
        classButton={theme ? style.timerBtn : style.darkModBtn}
        value="play_stop"
      >
        <img src={playBtn ? play : stop} alt={playBtn ? 'play' : 'stop'} />
      </Button>
      <Button
        classButton={theme ? style.timerBtn : style.darkModBtn}
        value="cancel"
      >
        <img src={cancel} alt="cancel" />
      </Button>
    </div>
  );
};
