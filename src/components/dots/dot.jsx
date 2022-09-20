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
      <div className={`${styles.white} ${one}`}></div>
      <div className={`${styles.white} ${two}`}></div>
      <div className={`${styles.white} ${three}`}></div>
      <div className={`${styles.white} ${four}`}></div>
      <div className={`${styles.white} ${five}`}></div>
    </div>
  );
};

export default Dot;
