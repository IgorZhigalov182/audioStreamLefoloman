import { useLocation } from 'react-router-dom';
import React from 'react';
import styles from './Room.module.scss';

const Room = () => {
  let location = useLocation();
  const roomID = location.pathname.split('/')[2];
  console.log(location);
  
  return (
    <div className={styles.container}>
      <div>Room: {roomID}</div>
    </div>
  );
};

export default Room;
