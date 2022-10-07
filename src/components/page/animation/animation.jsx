import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from './animation.module.css';

const Animation = ({ SetWorkHeight }) => {
  const workRef = useRef();

  useEffect(() => {
    const workHeight = workRef.current.clientHeight;
    SetWorkHeight(workHeight);
    console.log(workHeight);
  }, [SetWorkHeight]);

  return (
    <section ref={workRef} className={styles.work}>
      <p className={styles.title}>Animation</p>
      <div className={styles.content}>
        <div className={styles.cardHover}>
          <a
            className={styles.cardVideo}
            href='https://adult96.github.io/card-hover/'
            target='blank'
          >
            <video
              className={styles.video}
              src='video/cardHover.mp4'
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </a>
          <div className={styles.infoCard}>
            CSS translate3d 를 이용한 <br /> 3D Card 효과 입니다.
          </div>
        </div>
        <div className={styles.clickEffect}>
          <a
            className={styles.clickVideo}
            href='https://adult96.github.io/ripple-effect/'
            target='blank'
          >
            <video
              className={styles.video}
              src='video/clickEffect.mp4'
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </a>
          <div className={styles.infoClick}>
            클릭 위치에 따라 Effect의 <br /> 위치가 달라지는 효과 입니다.
          </div>
        </div>
        <div className={styles.mouseHover}>
          <a
            className={styles.mouseVideo}
            href='https://adult96.github.io/mouse-hover/'
            target='blank'
          >
            <video
              className={styles.video}
              src='video/mouseHover.mp4'
              autoPlay
              loop
              muted
              playsInline
            ></video>
          </a>
          <div className={styles.infoMouse}>
            글자의 방향에 따라 달라지는 <br /> Light효과 입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;
