import React from 'react';
import styles from './projects.module.css';

const Projects = (props) => (
  <section className={styles.projects}>
    <div className={styles.content}>
      <div className={styles.one}>박스1</div>
      <div className={styles.two}>박스2</div>
      <div className={styles.three}>박스3</div>
    </div>
  </section>
);

export default Projects;
