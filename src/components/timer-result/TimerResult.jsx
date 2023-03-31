import { useContext } from 'react';
import { CalculatorContext } from '../calculator/Calculator';
import style from './TimerResult.module.css';

export const TimerResult = () => {
  const Context = useContext(CalculatorContext);

  return (
    <div
      className={style.container}
    >{`${Context.timerValue.hour}:${Context.timerValue.minutes}:${Context.timerValue.seconds}`}</div>
  );
};
