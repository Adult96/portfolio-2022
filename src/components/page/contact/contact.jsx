import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

const Contact = ({ color }) => {
  const emailRef = useRef();
  const setColor = color === 'black' ? styles.black : styles.white;

  const copyEmail = () => {
    emailRef.current.value = 'djxor007@gmail.com';
    emailRef.current.select();
    document.execCommand('copy');

    alert('SEONG-IN 이메일 복사 완료!');
  };
  return (
    <section className={`${styles.contact} ${setColor}`}>
      <a href='https://www.instagram.com/96_adult/' target='blank'>
        <FontAwesomeIcon
          className={`${styles.instagram} ${setColor}`}
          icon={faInstagram}
        />
      </a>
      <a href='https://github.com/Adult96' target='blank'>
        <FontAwesomeIcon
          className={`${styles.github} ${setColor}`}
          icon={faGithub}
        />
      </a>
      <button className={styles.button} onClick={copyEmail}>
        <FontAwesomeIcon
          className={`${styles.email} ${setColor}`}
          icon={faEnvelope}
        />
        <input ref={emailRef} type='text' className={styles.copyText} />
      </button>
    </section>
  );
};

export default Contact;
