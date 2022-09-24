import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Dots from '../dots/dots';
import styles from './navbar.module.css';

const Navbar = ({ onPageMove, scrollIndex, navColor }) => {
  const [pageDot, SetPageDot] = useState(styles.homeDot);
  const setColor = navColor === 'black' ? styles.black : styles.white;
  const logoURL =
    navColor === 'black' ? 'img/logo_black.png' : 'img/logo_white.png';

  const pageReload = () => {
    window.location.reload();
  };

  const pageMove = (e) => {
    if (e.target.nodeName === 'UL') return;

    const select = navPageSelect(e.target.innerText);
    onPageMove(select);
  };

  const navPageSelect = (text) => {
    switch (text) {
      case 'HOME':
        return 0;
      case 'ABOUT':
        return 1;
      case 'SKILLS':
        return 2;
      case 'ANIMATION':
        return 3;
      case 'PROJECT':
        return 4;
      default:
        break;
    }
  };

  useEffect(() => {
    if (scrollIndex === 1) {
      SetPageDot(styles.homeDot);
    } else if (scrollIndex === 2) {
      SetPageDot(styles.aboutDot);
    } else if (scrollIndex === 3) {
      SetPageDot(styles.skillsDot);
    } else if (scrollIndex === 4) {
      SetPageDot(styles.animationDot);
    } else if (scrollIndex === 5) {
      SetPageDot(styles.projectDot);
    }
  }, [scrollIndex]);

  return (
    <nav className={`${styles.navbar} ${setColor}`}>
      <div className={styles.navbarLogo} onClick={pageReload}>
        <img className={styles.logo} src={logoURL} alt='logo' />
        <p className={`${styles.title} ${setColor}`}>SEONG-IN</p>
      </div>
      <ul className={`${styles.menuBar} ${setColor}`} onClick={pageMove}>
        <li className={`${styles.home} ${pageDot}`}>HOME</li>
        <li className={`${styles.about} ${pageDot}`}>ABOUT</li>
        <li className={`${styles.skills} ${pageDot}`}>SKILLS</li>
        <li className={`${styles.animation} ${pageDot}`}>ANIMATION</li>
        <li className={`${styles.project} ${pageDot}`}>PROJECT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
