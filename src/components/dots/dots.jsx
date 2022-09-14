import React from 'react';
import styles from './dots.module.css';
import Dot from './dot';
const Dots = ({ scrollIndex, color }) => {
  return (
    <div className={styles.dots}>
      <Dot scrollIndex={scrollIndex} color={color} />
    </div>
  );
};

export default Dots;
