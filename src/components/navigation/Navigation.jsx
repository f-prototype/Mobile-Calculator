import { useContext } from 'react';
import { Button } from '../UI/button/Button';
import dark from '../../img/dark.svg';
import light from '../../img/light1.svg';
import style from './Navigation.module.css';
import { CalculatorContext } from '../calculator/Calculator';

export const Navigation = () => {
  const ThemeContext = useContext(CalculatorContext);
  const onButtonClick = (event) => {
    if (event.target.classList.contains('img')) {
      ThemeContext.setIsLightTheme(!ThemeContext.isLightTheme);
    } else if (
      event.target.classList.contains(style.navButton) ||
      event.target.classList.contains(style.darkMode)
    ) {
      let target = event.target;
      ThemeContext.setIsCalculatorPage(
        target.value === 'Calculator' ? true : false
      );
    }
  };
  return (
    <div className={style.navigation} onClick={(event) => onButtonClick(event)}>
      <Button
        classButton={`${
          ThemeContext.isLightTheme ? style.navButton : style.darkMode
        } ${ThemeContext.isCalculatorPage && style.active}`}
        value="Calculator"
      >
        Calculator
      </Button>
      <Button
        classButton={`${
          ThemeContext.isLightTheme ? style.navButton : style.darkMode
        } ${!ThemeContext.isCalculatorPage && style.active}`}
        value="Timer"
      >
        Timer
      </Button>
      <Button classButton={style.navImg}>
        {ThemeContext.isLightTheme ? (
          <img className="img" src={dark} alt="dark theme" />
        ) : (
          <img className="img" src={light} alt="light theme" />
        )}
      </Button>
    </div>
  );
};
