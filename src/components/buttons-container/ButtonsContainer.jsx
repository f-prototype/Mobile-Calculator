import { useContext, useState } from 'react';
import style from './ButtonsContainer.module.css';
import { Button } from '../UI/button/Button';
import del from '../../img/del.svg';
import { CalculatorContext } from '../calculator/Calculator';
import { CalculatorService } from '../../Utils/Calculator';
import play from '../../img/play.svg';
import stop from '../../img/cancel.svg';
import cancel from '../../img/stop.svg';
import { onTimerButton } from '../../Utils/onTimerButton';

export const ButtonsContainer = () => {
  const delImg = <img src={del} alt="del" className={style.img} />;
  const Calculator = useContext(CalculatorContext);
  const arr = [
    'C',
    delImg,
    '%',
    '÷',
    '7',
    '8',
    '9',
    '×',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '',
    '0',
    '.',
    '=',
  ];
  const [playBtn, setPlayBtn] = useState(true);

  return (
    <div
      className={style.container}
      onClick={(event) => {
        if (event.target.tagName === 'IMG') {
          CalculatorService(
            event.target.parentElement.value,
            Calculator.mathHistory,
            Calculator.setMathHistory,
            Calculator.result,
            Calculator.setResult
          );
        } else {
          CalculatorService(
            event.target.value,
            Calculator.mathHistory,
            Calculator.setMathHistory,
            Calculator.result,
            Calculator.setResult
          );
        }
      }}
    >
      {Calculator.isCalculatorPage ? (
        arr.map((elem, index) => {
          return (
            <Button
              classButton={
                index === arr.length - 4
                  ? style.disabled
                  : Calculator.isLightTheme
                  ? style.mathButton
                  : style.darkMod
              }
              key={index}
              value={index === 1 ? 'D' : elem}
            >
              {elem}
            </Button>
          );
        })
      ) : (
        <div
          style={{ display: 'flex' }}
          onClick={(event) => {
            onTimerButton(event, playBtn, setPlayBtn, Calculator.setTimerValue);
          }}
        >
          <Button
            classButton={
              Calculator.isLightTheme ? style.timerBtn : style.darkModBtn
            }
            value="play_stop"
          >
            <img src={playBtn ? play : stop} alt={playBtn ? 'play' : 'stop'} />
          </Button>
          <Button
            classButton={
              Calculator.isLightTheme ? style.timerBtn : style.darkModBtn
            }
            value="cancel"
          >
            <img src={cancel} alt="cancel" />
          </Button>
        </div>
      )}
    </div>
  );
};
