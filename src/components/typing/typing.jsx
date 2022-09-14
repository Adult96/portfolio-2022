import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './typing.module.css';

const Typing = () => {
  const [Text, setText] = useState('');
  const [Count, setCount] = useState(0);
  const [text] = useState('Hello,(_____)!');

  useEffect(() => {
    const interval = setInterval(() => {
      setText(Text + text[Count]); // 이전 set한 문자 + 다음 문자
      setCount(Count + 1); // 개수 만큼 체크
    }, 250);
    if (Count > text.length) {
      setText(''); // 이전 set한 문자 + 다음 문자
      setCount(0);
      // Count를 따로 두지 않고 Text.length 체크도 가능
      // clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
    }
    return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
  }, [Count, text, Text]);

  return (
    <div className={styles.container}>
      <div className={styles.typing}>
        <span className={styles.hintComment}>{`"${Text}"`}</span>
        <span className={styles.blink}>|</span>
      </div>
      <img className={styles.arrow} src='img/arrow.png' alt='arrow' />
    </div>
  );
};

export default Typing;
