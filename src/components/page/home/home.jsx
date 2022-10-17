import React from 'react';
import styles from './home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import { useState } from 'react';

const Home = (props) => {
  return (
    <section className={styles.home}>
      <FontAwesomeIcon icon={faLightbulb} className={styles.bulb} />
      <div className={styles.language}>
        <div className={styles.Title}>
          <p className={styles.welcome}>HELLO!</p>
          <p className={styles.name}>우아한테크코스</p>
          {/* <p className={styles.portfolio}></p> */}
        </div>
      </div>
      <FontAwesomeIcon className={styles.arrowDown} icon={faArrowDown} />
    </section>
  );
};

export default Home;
