import React from 'react';
import styles from './dot.module.css';

const Dot = ({ scrollIndex, color }) => {
  const setcolor = color === 'black' ? styles.black : styles.white;
  const one = scrollIndex === 1 ? styles.one : styles.dot;
  const two = scrollIndex === 2 ? styles.two : styles.dot;
  const three = scrollIndex === 3 ? styles.three : styles.dot;
  const four = scrollIndex === 4 ? styles.four : styles.dot;
  const five = scrollIndex === 5 ? styles.five : styles.dot;

  return (
    <div>
      <div className={`${setcolor} ${one}`}></div>
      <div className={`${setcolor} ${two}`}></div>
      <div className={`${setcolor} ${three}`}></div>
      <div className={`${setcolor} ${four}`}></div>
      <div className={`${setcolor} ${five}`}></div>
    </div>
  );
};

export default Dot;
