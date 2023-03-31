const operations = ['%', '÷', '×', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let currentNum = '';
let prevNum = '';
let selectedOperation = '';
let prevOperation = '';
export function CalculatorService(
  value,
  mathHistory,
  setMathHistory,
  result,
  setResult
) {
  const pressed = (value) => {
    if (result !== '') {
      if (value === 'C') {
        clear();
      } else {
        return;
      }
    }
    if (value === '=') {
      calculate(prevOperation);
      setResult(prevNum);
    } else if (value === '%') percentage();
    else if (value === 'C') clear();
    else if (value === 'D') deleteValue();
    else if (operations.includes(value)) applyOperation(value);
    else if (numbers.includes(value)) appendNumber(value);
  };
  // ОТРИСОВКА ВВЕДЕНЫХ ЧИСЕЛ
  const appendNumber = (value) => {
    setMathHistory(mathHistory + value);
    currentNum += value;
  };
  // ПОДГОТОВКА ОПЕРАЦИИ
  const applyOperation = (value) => {
    selectedOperation = value;
    calculate(prevOperation);
    setMathHistory(mathHistory + value);
  };

  const calculate = (Operation) => {
    if (Operation === '') {
      prevNum = currentNum;
      currentNum = '';
      prevOperation = selectedOperation;
    } else if (Operation === '×') multiply();
    else if (Operation === '÷') divide();
    else if (Operation === '-') subtract();
    else if (Operation === '+') sum();
  };

  const multiply = () => {
    prevNum = prevNum * currentNum;
    currentNum = '';
    prevOperation = selectedOperation;
  };
  const divide = () => {
    prevNum = prevNum / currentNum;
    currentNum = '';
    prevOperation = selectedOperation;
  };
  const subtract = () => {
    prevNum = prevNum - currentNum;
    currentNum = '';
    prevOperation = selectedOperation;
  };
  const sum = () => {
    prevNum = +prevNum + +currentNum;
    currentNum = '';
    console.log(prevNum);
    prevOperation = selectedOperation;
  };
  const clear = () => {
    currentNum = '';
    prevNum = '';
    selectedOperation = '';
    prevOperation = '';
    currentNum = '';
    setMathHistory('');
    setResult('');
  };
  const deleteValue = () => {
    setMathHistory(mathHistory.slice(0, -1));
    currentNum = currentNum.slice(0, -1);
  };
  const percentage = () => {
    setMathHistory(mathHistory + '%');
    currentNum = currentNum / 100;
  };

  pressed(value);
}
