const operations = ['%', '÷', '×', '-', '+', '='];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
let currentNum = '';
let prevNum = '';
let selectedOperation = '';
let prevOperation = '';
export function CalculatorService(value, mathHistory, result) {
  let resultObj = {
    history: mathHistory,
    result: result,
  };

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
      resultObj = { ...resultObj, result: prevNum };
    } else if (value === '%') percentage();
    else if (value === 'C') clear();
    else if (value === 'D') deleteValue();
    else if (operations.includes(value)) applyOperation(value);
    else if (numbers.includes(value)) appendNumber(value);
  };
  // ОТРИСОВКА ВВЕДЕНЫХ ЧИСЕЛ
  const appendNumber = (value) => {
    resultObj = { ...resultObj, history: resultObj.history + value };

    currentNum += value;
  };
  // ПОДГОТОВКА ОПЕРАЦИИ
  const applyOperation = (value) => {
    selectedOperation = value;
    calculate(prevOperation);
    resultObj = { ...resultObj, history: resultObj.history + value };
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
    resultObj = { result: '', history: '' };
  };
  const deleteValue = () => {
    resultObj = { ...resultObj, history: resultObj.history.slice(0, -1) };
    currentNum = currentNum.slice(0, -1);
  };
  const percentage = () => {
    resultObj = { ...resultObj, history: resultObj.history + '%' };
    currentNum = currentNum / 100;
  };

  pressed(value);
  return resultObj;
}
