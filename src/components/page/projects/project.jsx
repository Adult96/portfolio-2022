import React from 'react';
import styles from './project.module.css';

const Project = ({ project }) => (
  <div className={styles.page}>
    {/* <p className={styles.num}>{project.num}</p> */}
    <div className={styles.contents}>
      <a href={project.link} target='blank'>
        <img
          className={styles.img}
          src={project.imgURL}
          alt={project.imgName}
        />
      </a>
      <p className={styles.comment}>{project.comment}</p>
    </div>
  </div>
);

export default Project;
