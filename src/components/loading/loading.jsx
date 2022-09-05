import React from 'react';
import styles from './loading.module.css';

const Loading = ({ onLoad }) => {
  const animationEnd = () => {
    onLoad(true);
  };
  return (
    <div className={styles.load} onAnimationEnd={animationEnd}>
      <div>
        <p className={styles.left}>SUNGIN</p>
        <p className={styles.right}>PORTFOLIO</p>
        <p className={styles.top}>F O R</p>
        <p className={styles.bottom}>REACT</p>
      </div>
    </div>
  );
};

export default Loading;
