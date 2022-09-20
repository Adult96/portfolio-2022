import React, { useEffect } from 'react';
import Navbar from '../navbar/navbar';
import About from '../page/about/about';
import Contact from '../page/contact/contact';
import Home from '../page/home/home';
import Projects from '../page/projects/projects';
import Skills from '../page/skills/skills';
import Work from '../page/work/work';
import styles from './main_page.module.css';
import { useRef } from 'react';
import { useState } from 'react';
import Dots from '../dots/dots';

const MainPage = (props) => {
  const mainRef = useRef();
  const [scrollIndex, setScrollIndex] = useState(1);
  const [color, setColor] = useState('white');
  const [navColor, setNavColor] = useState('white');
  const [skillsHeight, setSkillsHeight] = useState(0);
  // const [scrollSnapAlign, setScrollSnapAlign] = useState(styles.start);
  useEffect(() => {
    const wheelHandler = (e) => {
      const { deltaY } = e;
      const { scrollTop } = mainRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight - 100) {
          // console.log('현재 1페이지, down');
          setScrollIndex(1);
        } else if (
          scrollTop + 500 + 480 >= pageHeight &&
          scrollTop < pageHeight * 2 - 100 + 480
        ) {
          // console.log('현재 2페이지, down');
          setScrollIndex(2);
          setColor('white');
          setNavColor('white');
        } else if (
          scrollTop + 500 >= pageHeight * 2 &&
          scrollTop < pageHeight * 2 + skillsHeight - 100
        ) {
          // console.log('현재 3페이지, down');
          setScrollIndex(3);
          setColor('black');
          setNavColor('black');
        } else if (
          scrollTop + 500 >= pageHeight * 2 + skillsHeight &&
          scrollTop < pageHeight * 3 + skillsHeight - 100
        ) {
          // console.log('현재 4페이지, down');
          setScrollIndex(4);
          setColor('white');
        } else {
          // console.log('현재 5페이지, down');
          setScrollIndex(5);
          setNavColor('white');
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight - 400) {
          // console.log('현재 1페이지, up');
          setScrollIndex(1);
        } else if (
          scrollTop >= pageHeight - 400 &&
          scrollTop < pageHeight * 2 - 400
        ) {
          // console.log('현재 2페이지, up');
          setScrollIndex(2);
          setColor('white');
          setNavColor('white');
        } else if (
          scrollTop >= pageHeight * 2 - 400 &&
          scrollTop < pageHeight * 2 + skillsHeight - 400
        ) {
          // console.log('현재 3페이지, up');
          setScrollIndex(3);
          setColor('black');
          setNavColor('black');
        } else if (
          scrollTop >= pageHeight * 2 + skillsHeight - 400 &&
          scrollTop < pageHeight * 3 + skillsHeight - 400
        ) {
          // console.log('현재 4페이지, up');
          setScrollIndex(4);
          setColor('white');
        } else {
          // console.log('현재 5페이지, up');
          setScrollIndex(5);
          setNavColor('white');
        }
      }
    };
    const mainRefCurrent = mainRef.current;
    mainRefCurrent.addEventListener('wheel', wheelHandler);
    return () => {
      mainRefCurrent.removeEventListener('wheel', wheelHandler);
    };
  }, [scrollIndex, skillsHeight]);

  const onPageMove = (pageNum) => {
    const pageHeight = window.innerHeight;
    const setColorIndex = pageNum + 1;

    if (setColorIndex === 4) {
      mainRef.current.scrollTo({
        top: pageHeight * 2 + skillsHeight,
        left: 0,
        behavior: 'smooth',
      });
    } else if (setColorIndex === 5) {
      mainRef.current.scrollTo({
        top: pageHeight * 3 + skillsHeight,
        left: 0,
        behavior: 'smooth',
      });
    } else {
      mainRef.current.scrollTo({
        top: pageHeight * pageNum,
        left: 0,
        behavior: 'smooth',
      });
    }
    setColorIndex === 3 ? setColor('black') : setColor('white');
    setColorIndex === 3 || setColorIndex === 4
      ? setNavColor('black')
      : setNavColor('white');
    setScrollIndex(setColorIndex);
  };

  return (
    <div ref={mainRef} className={`${styles.main}`}>
      <Navbar onPageMove={onPageMove} navColor={navColor} />
      <Dots scrollIndex={scrollIndex} color={color} />
      <Home />
      <About scrollIndex={scrollIndex} />
      <Skills setSkillsHeight={setSkillsHeight} />
      <Work />
      <Projects />
      <Contact color={color} />
    </div>
  );
};

export default MainPage;
