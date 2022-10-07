import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import About from '../page/about/about';
import Contact from '../page/contact/contact';
import Home from '../page/home/home';
import Projects from '../page/projects/projects';
import Skills from '../page/skills/skills';
import Animation from '../page/animation/animation';
import styles from './main_page.module.css';
import { useRef } from 'react';
import { useState } from 'react';

const MainPage = (props) => {
  const mainRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [color, setColor] = useState('white');
  const [workHeight, SetWorkHeight] = useState(0);

  useEffect(() => {
    const wheelHandler = (e) => {
      const { deltaY } = e;
      const { scrollTop } = mainRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight &&
          scrollTop < pageHeight * 2 + 480
        ) {
          setScrollIndex(2);
        } else if (
          scrollTop >= pageHeight * 2 &&
          scrollTop < pageHeight * 3 + 480 * 2
        ) {
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 3 &&
          scrollTop < pageHeight * 3 + 480 * 4 + workHeight
        ) {
          setScrollIndex(4);
        } else {
          setScrollIndex(5);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight &&
          scrollTop < pageHeight * 2 + 480
        ) {
          setScrollIndex(2);
        } else if (
          scrollTop >= pageHeight * 2 &&
          scrollTop < pageHeight * 3 + 480 * 2
        ) {
          setScrollIndex(3);
        } else if (
          scrollTop >= pageHeight * 3 &&
          scrollTop < pageHeight * 3 + 480 * 4 + workHeight
        ) {
          setScrollIndex(4);
        } else {
          setScrollIndex(5);
        }
      }
    };
    const mainRefCurrent = mainRef.current;
    mainRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      mainRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [scrollIndex, workHeight]);

  const onPageMove = (pageNum) => {
    const pageHeight = window.innerHeight;
    const setColorIndex = pageNum + 1;
    console.log(pageNum);
    if (setColorIndex === 1) {
      mainRef.current.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else if (setColorIndex === 5) {
      mainRef.current.scrollTo({
        top: (pageHeight + 480) * pageNum + workHeight,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      mainRef.current.scrollTo({
        top: (pageHeight + 480) * pageNum,
        left: 0,
        behavior: 'smooth',
      });
    }

    setScrollIndex(setColorIndex);
  };

  return (
    <div ref={mainRef} className={`${styles.main}`}>
      <Navbar
        onPageMove={onPageMove}
        scrollIndex={scrollIndex}
        navColor={color}
      />
      {/* <Dots scrollIndex={scrollIndex} color={color} /> */}
      <Home />
      <div className={styles.empty}></div>
      <About scrollIndex={scrollIndex} />
      <div className={styles.empty}></div>
      <Skills />
      <div className={styles.empty}></div>
      <Animation SetWorkHeight={SetWorkHeight} />
      <div className={`${styles.empty} ${styles.pageFive}`}></div>
      <Projects scrollIndex={scrollIndex} />
      <Contact color={color} />
    </div>
  );
};

export default MainPage;
