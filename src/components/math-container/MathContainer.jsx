import style from './MathContainer.module.css';
import { OperationsContainer } from '../operations-container/OperationsContainer';
import { Result } from '../result/Result';
import { useContext } from 'react';
import { CalculatorContext } from '../calculator/Calculator';
import { TimerResult } from '../timer-result/TimerResult';

export const MathContainer = () => {
  const Context = useContext(CalculatorContext);
  return (
    <div
      className={style.container}
      style={Context.isCalculatorPage ? {} : { paddingRight: '0px' }}
    >
      {Context.isCalculatorPage ? (
        <>
          <OperationsContainer />
          <Result />
        </>
      ) : (
        <TimerResult />
      )}
    </div>
  );
};
