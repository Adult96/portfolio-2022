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
  return (
    <section className={styles.skills}>
      <div className={styles.contanier}>
        <div className={styles.inner}></div>
        <div className={styles.middle}></div>
        <div className={styles.high}></div>
        <div className={styles.outer}></div>
        <FontAwesomeIcon className={styles.html} icon={faHtml5} />
        <FontAwesomeIcon className={styles.css} icon={faCss3} />
        <FontAwesomeIcon className={styles.js} icon={faJs} />
        <FontAwesomeIcon className={styles.react} icon={faReact} />
        <div className={styles.CssFramework}>
          <p className={styles.postcssText}>PostCss</p>
        </div>
        <FontAwesomeIcon className={styles.git} icon={faGit} />
        <FontAwesomeIcon className={styles.github} icon={faGithub} />
        <FontAwesomeIcon className={styles.yarn} icon={faYarn} />
        <div className={styles.githubPage}>
          <FontAwesomeIcon className={styles.githubPageIcon} icon={faGithub} />
          <p className={styles.githubPageText}>Github Pages</p>
        </div>
        <div className={styles.netlify}>Netlify</div>
        <div className={styles.youtube}>
          <FontAwesomeIcon icon={faYoutube} />
          Youtube API
        </div>
        <div className={styles.router}>router</div>
        <div className={styles.cloudinary}>
          <FontAwesomeIcon icon={faCloudArrowUp} />
          cloudinary
        </div>
        <div className={styles.firebase}>
          <FontAwesomeIcon icon={faCodeBranch} />
          firebase
        </div>
        <p className={styles.skill}>SKILLS</p>
      </div>
    </section>
  );
};

export default Skills;
