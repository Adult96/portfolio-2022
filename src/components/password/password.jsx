import React, { useState } from 'react';
import { useRef } from 'react';
import Typing from '../typing/typing';
import styles from './password.module.css';

const Password = ({ onPassword }) => {
  const [hintClick, setHintClick] = useState(false);
  const [text] = useState('World');
  const [count, setCount] = useState(0);
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    passwordRef.current.value === 'World'
      ? onPassword()
      : e.currentTarget.reset();
  };

  const onHintBtnClick = () => {
    setHintClick(true);
  };

  const textChange = (e) => {
    e.preventDefault();
    // if (count < 0 || count > text.length) {
    //   return;
    // }

    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      const remove = count < 1 ? 0 : count - 1;
      setCount(() => remove);
      passwordRef.current.value = text.slice(0, remove);
    } else {
      const add = count >= text.length ? 5 : count + 1;
      setCount(() => add);
      passwordRef.current.value = text.slice(0, add);
    }
  };
  return (
    <div className={styles.password}>
      <div className={styles.hint}>
        {hintClick ? (
          <Typing />
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
          placeholder='PassWord...'
          onChange={textChange}
        />
      </form>
    </div>
  );
};

export default Password;
