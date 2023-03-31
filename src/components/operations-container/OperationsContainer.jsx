import { useContext } from 'react';
import { CalculatorContext } from '../calculator/Calculator';

export const OperationsContainer = () => {
  const Calculator = useContext(CalculatorContext);
  return <div style={{ fontSize: '20px' }}>{Calculator.mathHistory}</div>;
};
