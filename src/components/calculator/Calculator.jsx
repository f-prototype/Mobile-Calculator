import { useState, createContext } from 'react';
import { Navigation } from '../navigation/Navigation';
import { MathContainer } from '../math-container/MathContainer';
import { ButtonsContainer } from '../buttons-container/ButtonsContainer';
import style from './Calculator.module.css';

export const CalculatorContext = createContext();
export const Calculator = () => {
  const [isLightTheme, setIsLightTheme] = useState(true);
  const [result, setResult] = useState('');
  const [mathHistory, setMathHistory] = useState('');
  const [isCalculatorPage, setIsCalculatorPage] = useState(true);
  const [timerValue, setTimerValue] = useState({
    hour: '00',
    minutes: '00',
    seconds: '00',
  });
  return (
    <CalculatorContext.Provider
      value={{
        isLightTheme,
        setIsLightTheme,
        result,
        setResult,
        mathHistory,
        setMathHistory,
        isCalculatorPage,
        setIsCalculatorPage,
        timerValue,
        setTimerValue,
      }}
    >
      <div className={!isLightTheme ? style.darkMod : style.calculator}>
        <Navigation />
        <MathContainer />
        <ButtonsContainer />
      </div>
    </CalculatorContext.Provider>
  );
};
