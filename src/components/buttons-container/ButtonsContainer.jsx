import { useSelector } from 'react-redux';
import { MathButtons } from '../math-buttons/MathButtons';
import { TimerButtons } from '../timer-buttons/TimerButtons';
import style from './ButtonsContainer.module.css';

export const ButtonsContainer = () => {
  const page = useSelector((state) => state.page.isCalculator);
  return (
    <div className={style.container}>
      {page ? <MathButtons /> : <TimerButtons />}
    </div>
  );
};
