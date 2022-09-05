import React, { useState } from 'react';
import { useRef } from 'react';
import Typing from '../typing/typing';
import styles from './password.module.css';

const Password = ({ onPassword }) => {
  const [hintClick, setHintClick] = useState(false);
  const [text] = useState('Hello,World!');
  const passwordRef = useRef();
  const visible = hintClick ? `${styles.visible}` : `${styles.hidden}`;

  const onSubmit = (e) => {
    e.preventDefault();
    passwordRef.current.value === 'Hello,World!'
      ? onPassword()
      : e.currentTarget.reset();
  };

  const onHintBtnClick = () => {
    setHintClick(true);
  };

  return (
    <div className={styles.password}>
      <div className={styles.hint}>
        {hintClick ? (
          <Typing text={text} />
        ) : (
          <button className={`${styles.hintBtn}`} onClick={onHintBtnClick}>
            Hint
          </button>
        )}
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={passwordRef}
          className={styles.input}
          type='text'
          placeholder='Pass Word...'
        />
      </form>
    </div>
  );
};

export default Password;
