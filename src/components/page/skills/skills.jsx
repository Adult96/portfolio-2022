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
import { useRef } from 'react';
import { useEffect } from 'react';

const Skills = ({ setSkillsHeight }) => {
  const skiilsRef = useRef();

  useEffect(() => {
    setSkillsHeight(skiilsRef.current.clientHeight);
  }, [setSkillsHeight]);
  return (
    <section ref={skiilsRef} className={styles.skills}>
      <div className={styles.contanier}>
        {/* <p className={styles.skill}>SKILLS</p> */}
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
        {/* <img className={styles.netlify} src='img/netlify.png' alt='netlify' /> */}
        {/* <div className={styles.Tool}>
            <p className={styles.title}>Tool</p>
            <FontAwesomeIcon className={styles.git} icon={faGit} />
            <FontAwesomeIcon className={styles.github} icon={faGithub} />
            <FontAwesomeIcon className={styles.yarn} icon={faYarn} />
          </div>
          <div className={styles.Publish}>
            <p className={styles.title}>Publish</p>
            <FontAwesomeIcon className={styles.githubPage} icon={faGithub} />
            <p className={styles.icon}>Github Pages</p>
            <img
              className={styles.netlify}
              src='img/netlify.png'
              alt='netlify'
            />
          </div>
          <div className={styles.api}>
            <p className={styles.title}>API</p>
            <p className={styles.youtube}>Youtube API</p>
            <p className={styles.web}>Web API</p>
          </div>
          <div className={styles.library}>
            <p className={styles.title}>Library</p>
            <img className={styles.router} src='img/router.png' alt='router' />
            <img
              className={styles.cloudinary}
              src='img/cloudinary.png'
              alt='cloudinary'
            />
          </div>
          <div className={styles.Backend}>
            <p className={styles.title}>Backend</p>
            <img
              className={styles.firebase}
              src='img/Firebase.png'
              alt='Firebase'
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skills;
