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
          <p className={styles.welcome}>HELLO,WORLD!</p>
          <p className={styles.name}>SEONG-IN</p>
          <p className={styles.portfolio}>PORTFOLIO</p>
        </div>
        {/* <div className={styles.comment}>
          <p>저의 포트폴리오에 오신 것을 환영합니다</p>
          <p>프론트엔드 공부를 하며 만들어본</p>
          <p>프로젝트들을 담아봤습니다</p>
          <p>부족하지만 즐거운 감상 하시길 바랍니다.</p>
        </div> */}
      </div>
      <FontAwesomeIcon className={styles.arrowDown} icon={faArrowDown} />
    </section>
  );
};

export default Home;
