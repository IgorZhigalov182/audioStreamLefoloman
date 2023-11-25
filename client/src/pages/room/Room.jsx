import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tab, Tabs } from '@mui/material';
import styles from './Room.module.scss';

const Room = () => {
  const [value, setValue] = useState(0);
  let location = useLocation();
  const navigate = useNavigate();
  const roomID = location.pathname.split('/')[2];
  // const socket = useRef();

  const URL = 'localhost:8189';
  const socket = new WebSocket(`ws://${URL}`);
  console.log(socket);

  socket.onopen = () => {
    console.log('open');
    socket.send('Hello server');
  };

  useEffect(() => {
    // socket.current = new WebSocket(`ws://${URL}`);
    // socket.current.onopen = () => {
    //   console.log('Open');
    // };

    return () => {
      console.log('Onclose');
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head_part}>
          <button onClick={() => navigate('/rooms')}>&lt;</button>
          <h2>Комната {roomID}</h2>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.wrapper}>
          <div>
            <Tabs value={value} onChange={() => {}} aria-label="basic tabs example">
              <Tab label="Все" value={0} />
              <Tab label="Жанры" value={1} />
              <Tab label="Подборки" value={2} />
            </Tabs>
          </div>
        </div>
        <div className={styles.wrapper}></div>
      </div>
    </section>
  );
};

export default Room;
