import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '../loading/loading';
import Password from '../password/password';
import styles from './loading_page.module.css';

const LoadingPage = (props) => {
  const navigate = useNavigate();
  const [load, setLoad] = useState(false);

  const onLoad = (bool) => {
    setLoad(bool);
  };

  const onPassword = (value) => {
    navigate('/main');
  };
  return (
    <section className={styles.container}>
      {load ? (
        <Password onPassword={onPassword} />
      ) : (
        <Loading onLoad={onLoad} />
      )}
    </section>
  );
};

export default LoadingPage;
