import React from 'react';
import { useState } from 'react';
import Project from './project';
import styles from './projects.module.css';

const Projects = ({ scrollIndex }) => {
  const setScroll = scrollIndex === 5 ? styles.scroll : styles.hidden;
  const [project] = useState([
    {
      num: '1',
      link: 'https://adult96.github.io/Portfolio/',
      imgURL: 'img/project_Img/portfolio.png',
      imgName: 'Portfolio',
      comment:
        'Html, CSS, Javascript를 공부하고 처음 제작한 포트폴리오 입니다.',
    },
    {
      num: '2',
      link: 'https://adult96.github.io/wally/',
      imgURL: 'img/project_Img/wally.png',
      imgName: 'wally',
      comment: 'Vanila Js 로 제작한 게임입니다.',
    },
    {
      num: '3',
      link: 'https://adult96.github.io/JooJooTube/',
      imgURL: 'img/project_Img/joojootube.png',
      imgName: 'joojootube',
      comment: 'YouTube API를 이용하여 제작한 YouTube 사이트 입니다.',
    },
    {
      num: '4',
      link: 'https://seongin-card-maker.netlify.app/',
      imgURL: 'img/project_Img/cardMaker.png',
      imgName: 'cardMaker',
      comment:
        'Firebase를 이용하여 사용자 로그인과 실시간 데이터 저장을 할수있도록 하였으며 cloudinary를 이용하여 이미지 upload & download를 할수있도록 제작한 명함 사이트 입니다.',
    },
    {
      num: '5',
      link: 'https://adult96.github.io/shopping-list/',
      imgURL: 'img/project_Img/shoppingList.png',
      imgName: 'shoppingList',
      comment: 'Js 를 이용하여 간단하게 제작한 쇼핑리스트 사이트 입니다.',
    },
  ]);
  return (
    <section className={styles.projects}>
      <div className={`${styles.content} ${setScroll}`}>
        <div className={styles.container}>
          <p className={styles.title}>PROJECT</p>
          <p className={styles.textStart}>START</p>
          {project.map((project) => (
            <Project key={project.num} project={project} />
          ))}
          <p className={styles.textEnd}>END</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
