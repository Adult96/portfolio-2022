import React from 'react';
import styles from './skills.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCloudArrowUp,
  faCodeBranch,
} from '@fortawesome/free-solid-svg-icons';
import {
  faHtml5,
  faCss3,
  faJs,
  faReact,
  faGit,
  faGithub,
  faYarn,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const onClickIcon = (e) => {
    const classNameSplit = e.target.className.split('_');
    const className = classNameSplit[1];
    if (className === 'html') {
      console.log('html');
    }
  };
  return (
    <section className={styles.skills}>
      <div className={styles.contanier} onClick={onClickIcon}>
        <div className={styles.inner}></div>
        <div className={styles.middle}></div>
        <div className={styles.high}></div>
        <div className={styles.outer}></div>
        <div className={styles.html}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faHtml5} />
        </div>
        <div className={styles.css}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faCss3} />
        </div>
        <div className={styles.js}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faJs} />
        </div>
        <div className={styles.react}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faReact} />
        </div>
        <div className={styles.CssFramework}>
          <p className={styles.postcssText}>PostCss</p>
        </div>
        <div className={styles.git}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faGit} />
        </div>
        <div className={styles.github}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faGithub} />
        </div>
        <div className={styles.yarn}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faYarn} />
        </div>

        <div className={styles.githubPage}>
          <FontAwesomeIcon
            className={`${styles.githubPageIcon} ${styles.pointerDel}`}
            icon={faGithub}
          />
          <p className={styles.githubPageText}>Github Pages</p>
        </div>
        <div className={styles.netlify}>Netlify</div>
        <div className={styles.youtube}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faYoutube} />
          Youtube API
        </div>
        <div className={styles.router}>router</div>
        <div className={styles.cloudinary}>
          <FontAwesomeIcon
            className={styles.pointerDel}
            icon={faCloudArrowUp}
          />
          cloudinary
        </div>
        <div className={styles.firebase}>
          <FontAwesomeIcon className={styles.pointerDel} icon={faCodeBranch} />
          firebase
        </div>
        <p className={styles.skill}>SKILLS</p>
      </div>
    </section>
  );
};

export default Skills;
