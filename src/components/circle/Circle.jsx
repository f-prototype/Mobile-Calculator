import style from './Circle.module.css';

export const Circle = ({ coords }) => {
  return <div className={style.circle} style={{ ...coords }}></div>;
};
