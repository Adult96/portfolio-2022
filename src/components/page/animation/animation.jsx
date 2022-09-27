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
          <video
            className={styles.cardVideo}
            src='video/cardHover.mp4'
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className={styles.infoCard}>
            CSS translate3d 를 이용한 <br /> 3D Card 효과 입니다.
          </div>
        </div>
        <div className={styles.clickEffect}>
          <video
            className={styles.clickVideo}
            src='video/clickEffect.mp4'
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className={styles.infoClick}>
            클릭 위치에 따라 Effect의 <br /> 위치가 달라지는 효과 입니다.
          </div>
        </div>
        <div className={styles.mouseHover}>
          <video
            className={styles.mouseVideo}
            src='video/mouseHover.mp4'
            autoPlay
            loop
            muted
            playsInline
          ></video>
          <div className={styles.infoMouse}>
            글자의 방향에 따라 달라지는 <br /> Light효과 입니다.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Animation;
