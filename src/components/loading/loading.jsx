import React from 'react';
import styles from './loading.module.css';

const Loading = ({ onLoad }) => {
  const animationEnd = () => {
    onLoad(true);
  };
  return (
    <div className={styles.load} onAnimationEnd={animationEnd}>
      <div>
        <p className={styles.left}>WELCOME</p>
        <p className={styles.top}>T O</p>
        <p className={styles.right}>SEONG-IN</p>
        <p className={styles.bottom}>PORTFOLIO</p>
      </div>
    </div>
  );
};

export default Loading;
