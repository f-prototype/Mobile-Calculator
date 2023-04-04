import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../../slices/themeSlice';
import { setPage } from '../../slices/pageSlice';
import { Button } from '../UI/button/Button';
import dark from '../../img/dark.svg';
import light from '../../img/light1.svg';
import style from './Navigation.module.css';

export const Navigation = () => {
  const theme = useSelector((state) => state.theme.isLight);
  const page = useSelector((state) => state.page.isCalculator);
  const dispatch = useDispatch();

  const onButtonClick = (event) => {
    if (event.target.classList.contains('img')) {
      dispatch(setTheme(!theme));
    } else if (
      event.target.classList.contains(style.navButton) ||
      event.target.classList.contains(style.darkMode)
    ) {
      let value = event.target.value;
      dispatch(setPage(value === 'Calculator' ? true : false));
    }
  };

  return (
    <div className={style.navigation} onClick={(event) => onButtonClick(event)}>
      <Button
        classButton={`${theme ? style.navButton : style.darkMode} ${
          page && style.active
        }`}
        value="Calculator"
      >
        Calculator
      </Button>
      <Button
        classButton={`${theme ? style.navButton : style.darkMode} ${
          !page && style.active
        }`}
        value="Timer"
      >
        Timer
      </Button>
      <Button classButton={style.navImg}>
        {theme ? (
          <img className="img" src={dark} alt="dark theme" />
        ) : (
          <img className="img" src={light} alt="light theme" />
        )}
      </Button>
    </div>
  );
};
