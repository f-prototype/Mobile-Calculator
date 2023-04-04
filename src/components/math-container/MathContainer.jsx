import { useSelector } from 'react-redux';
import { OperationsContainer } from '../operations-container/OperationsContainer';
import { Result } from '../result/Result';
import { TimerResult } from '../timer-result/TimerResult';
import style from './MathContainer.module.css';

export const MathContainer = () => {
  const page = useSelector((state) => state.page.isCalculator);

  return (
    <div
      className={style.container}
      style={page ? {} : { paddingRight: '0px' }}
    >
      {page ? (
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
