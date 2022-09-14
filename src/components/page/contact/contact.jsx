import React from 'react';
import styles from './contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = ({ color }) => {
  const setColor = color === 'black' ? styles.black : styles.white;
  return (
    <section className={`${styles.contact} ${setColor}`}>
      <FontAwesomeIcon className={styles.instagram} icon={faInstagram} />
      <FontAwesomeIcon className={styles.github} icon={faGithub} />
      <FontAwesomeIcon className={styles.email} icon={faEnvelope} />
    </section>
  );
};

export default Contact;
