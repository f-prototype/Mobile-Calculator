import React from 'react';
import { Calculator } from '../../components/calculator/Calculator';
import { Circle } from '../../components/circle/Circle';
import style from './Container.module.css';

export const Container = () => {
  return (
    <div className={style.container}>
      <Calculator />
      <Circle
        coords={{
          left: '0',
          top: '0',
          backgroundColor: '#43c08c',
          clipPath: 'circle(600px at left 100%)',
        }}
      />
      <Circle
        coords={{
          right: '0',
          bottom: '0',
          backgroundColor: '#474e87',
          clipPath: 'circle(600px at right 0%)',
        }}
      />
    </div>
  );
};
