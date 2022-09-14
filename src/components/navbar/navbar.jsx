import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({ onPageMove, navColor }) => {
  const setColor = navColor === 'black' ? styles.black : styles.white;
  const logoURL =
    navColor === 'black' ? 'img/logo_black.png' : 'img/logo_white.png';
  console.log(navColor);
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
      case 'WORK':
        return 3;
      case 'PROJECT':
        return 4;
      default:
        break;
    }
  };
  return (
    <nav className={`${styles.navbar} ${setColor}`}>
      <div className={styles.navbarLogo} onClick={pageReload}>
        <img className={styles.logo} src={logoURL} alt='logo' />
        <p className={`${styles.title} ${setColor}`}>SEONG-IN</p>
      </div>
      <ul className={`${styles.menuBar} ${setColor}`} onClick={pageMove}>
        <li className={styles.home}>HOME</li>
        <li className={styles.about}>ABOUT</li>
        <li className={styles.skills}>SKILLS</li>
        <li className={styles.work}>WORK</li>
        <li className={styles.project}>PROJECT</li>
      </ul>
    </nav>
  );
};

export default Navbar;
