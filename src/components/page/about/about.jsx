import React from 'react';
import { useEffect } from 'react';
import styles from './about.module.css';
import moment from 'moment';
import { useInterval } from 'react-use';
import { useState } from 'react';

const About = ({ scrollIndex }) => {
  const [realTime, setRealTime] = useState('');
  const [pageFocus, setPageFocus] = useState(null);
  const [showAndHide, setshowAndHide] = useState(styles.hide);
  const pageNum = scrollIndex === 2 ? styles.trans : '';

  useEffect(() => {
    scrollIndex === 2 ? setPageFocus(1000) : setPageFocus(null);
    return () => {};
  }, [scrollIndex]);

  useInterval(() => {
    const date1 = moment();
    const date2 = moment('2022-05-01');
    const diffTime = date1.diff(date2, 'days');
    const hour = date1.hour();
    const min = date1.minute();
    const second = date1.second();
    setRealTime(`
    ${diffTime}DAY 
    ${hour}H 
    ${min}M 
    ${second}S`);
  }, pageFocus);

  const showHistory = () => {
    setshowAndHide(styles.show);
  };
  const hideHistory = () => {
    setshowAndHide(styles.hide);
  };
  return (
    <section className={styles.about}>
      <div className={`${styles.contanierText} ${pageNum}`}>
        <h1 className={styles.title}>ABOUT</h1>
        <p className={styles.info}> FRONT-END STUDY</p>
        <p className={styles.info}>{realTime}</p>
        <div className={styles.contents}>
          <p className={`${styles.comment} ${showAndHide}`}>
            처음 개발자의 길로 들어선 건 FA 소프트웨어 개발자였습니다. 일하면서
            가장 좋았던 것은 내가 만든 프로그램으로 움직이는 기계들을 직관적으로
            볼 수있는 게 가장 좋았던 점이였습니다. 이러한 부분이 프론트엔드
            개발자가 일을 하며 느끼는 것과 같다고 생각하여 프론트엔드 개발자로
            한 걸음 내딛기 시작하였습니다.
          </p>
          <p className={`${styles.comment} ${showAndHide}`}>
            현재는 Html, CSS, Javascript, React, Git 등 프론트엔드를 공부하며
            준비된 개발자로 성장하기 위해 노력 중입니다.
          </p>
          <div className={`${styles.history} ${showAndHide}`}>
            <p>- WRO(World Robot Olympiad) 한국 경진대회 금상 </p>
            <p>- WRO(World Robot Olympiad) 헝가리 본선 7등 </p>
            <p>- 인하공업전문대학교 메카트로닉스 졸업 </p>
            <p>- FA 프로그래머 2년차 퇴사 </p>
            <p>- 메카트로닉스 학사 취득</p>
          </div>
        </div>
      </div>
      <div
        className={styles.contanierImg}
        onMouseOver={showHistory}
        onMouseOut={hideHistory}
      >
        <img className={styles.my} src='img/my.png' alt='my' />
        <div className={styles.hover}>
          Hover <p className={styles.bang}>!</p>
        </div>
      </div>
      <div className={styles.background}></div>
    </section>
  );
};

export default About;
