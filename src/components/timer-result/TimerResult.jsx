import { useSelector } from 'react-redux/es/exports';
import style from './TimerResult.module.css';

export const TimerResult = () => {
  const timerValue = useSelector((state) => state.math.timerValue);

  return (
    <div className={style.container}>
      {`${timerValue.hour}:${timerValue.minutes}:${timerValue.seconds}`}
    </div>
  );
};
