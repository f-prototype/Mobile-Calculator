import { Navigation } from '../navigation/Navigation';
import { MathContainer } from '../math-container/MathContainer';
import { ButtonsContainer } from '../buttons-container/ButtonsContainer';
import style from './Calculator.module.css';
import { useSelector } from 'react-redux';

export const Calculator = () => {
  const theme = useSelector((state) => state.theme.isLight);
  return (
    <div className={!theme ? style.darkMod : style.calculator}>
      <Navigation />
      <MathContainer />
      <ButtonsContainer />
    </div>
  );
};
