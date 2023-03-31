import { useContext } from 'react';
import { CalculatorContext } from '../calculator/Calculator';

export const Result = () => {
  const Calculator = useContext(CalculatorContext);
  return <div>= {Calculator.result}</div>;
};
