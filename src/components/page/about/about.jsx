import React, { useRef } from 'react';
import { useEffect } from 'react';
import styles from './about.module.css';

const About = (props) => {
  const aboutRef = useRef();
  return (
    <section className={styles.about}>
      <div className={styles.contanier}>
        <h1 className={styles.title}>ABOUT</h1>
        <p className={styles.info}>"Dreams come true."</p>
        <p className={styles.comment}>
          처음 개발자로 일하게 되었던건 FA 소프트웨어 개발자로 일을 하였습니다.
          개발자로 일하면서 가장좋았던 것은 내가 만든 프로그램으로 움직이는
          기계들을 직관적으로 볼수 있는게 가장 좋았던 점이였습니다 이러한 부분과
          프론트엔드 개발자가 일을 하며 느끼는것들이 같다고 생각하며 프론트엔드
          개발자로 한걸음 내딛기 시작하였습니다. 현재는 더 나은 개발자로
          성장하기 위해 우아한테크코스 교육을 준비중입니다.
        </p>
      </div>
    </section>
  );
};

export default About;
