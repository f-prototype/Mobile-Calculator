import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setResult, setMathHistory } from '../../slices/mathSlice';
import { CalculatorService } from '../../Utils/Calculator';
import { Button } from '../UI/button/Button';
import arr from '../../data/numb_op';
import del from '../../img/del.svg';
import style from './MathButtons.module.css';

export const MathButtons = () => {
  const mathHistory = useSelector((state) => state.math.mathHistory);
  const result = useSelector((state) => state.math.result);
  const theme = useSelector((state) => state.theme.isLight);
  const dispatch = useDispatch();
  const delImg = <img src={del} alt="del" className={style.img} />;
  arr[1] = delImg;

  const onButtonClick = (event) => {
    if (event.target.tagName === 'IMG') {
      let outcome = CalculatorService(
        event.target.parentElement.value,
        mathHistory,
        result
      );
      dispatch(setResult(outcome.result));
      dispatch(setMathHistory(outcome.history));
    } else {
      let outcome = CalculatorService(event.target.value, mathHistory, result);
      dispatch(setResult(outcome.result));
      dispatch(setMathHistory(outcome.history));
    }
  };
  return (
    <div
      className={style.mathContainer}
      onClick={(event) => {
        onButtonClick(event);
      }}
    >
      {arr.map((elem, index) => {
        return (
          <Button
            classButton={
              index === arr.length - 4
                ? style.disabled
                : theme
                ? style.mathButton
                : style.darkMod
            }
            key={index}
            value={index === 1 ? 'D' : elem}
          >
            {elem}
          </Button>
        );
      })}
    </div>
  );
};
