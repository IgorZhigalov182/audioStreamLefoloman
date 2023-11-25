import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import QRCode from "react-qr-code";
import { Tab, Tabs, TextField } from '@mui/material';
import styles from './Room.module.scss';

const Room = () => {
  const [value, setValue] = useState(0);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isOnStop, setIsOnStop] = useState(true);
  let location = useLocation();
  const navigate = useNavigate();
  const roomID = location.pathname.split('/')[2];

  const socket = useRef();

  const URL = 'localhost:8189';

  useEffect(() => {
    console.log(location);
    socket.current = new WebSocket(`ws://${URL}/one?two=three`);
    // if (socket) {

    socket.current.onopen = () => {
      console.log('Open');
    };

    // socket.current.send(JSON.stringify({ roomId: roomID }));

    return () =>
      (socket.current.onclose = () => {
        console.log('Close');
      });
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
              <Tab label="проигрыватель" value={0} />
              <Tab label="подборки" value={1} />
            </Tabs>
          </div>
          <div className={styles.video_container}>
            <div className={styles.play_container}>
              {
                isOnStop ? 
                <svg onClick={() => setIsOnStop(!isOnStop)} className={styles.play} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                  <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"/>
                </svg> :
                <svg onClick={() => setIsOnStop(!isOnStop)} className={styles.play} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                  <path d="M3 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm7 0H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z"/>
                </svg>
              }
              
              <img src="" alt="" />
              <div className={styles.track}>
                <span>Sun comes up</span>
                <span>Rudimental</span>
              </div>
            </div>
            <video className={styles.video} autoPlay={true}
                   loop 
                   src="/src/assets/fallback-white.mp4">
            </video>
          </div>
          <div className={styles.column}>
            <QRCode fgColor='#9B2DC8' style={{ height: '80' }} value={`${window.location.href}`}/>
            <span>Приглашай друзей!</span>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.chat}>
            {
              messages.map((message, key) => (
                <span className={styles.message} key={key}>{message}</span>
              ))
            }
            <div className={styles.send}>
              <TextField
                onChange={(e) => setNewMessage(e.target.value)}
                id="outlined-textarea"
                label=""
                value={newMessage}
                placeholder=""
                multiline
                fullWidth
              />
              <svg className={styles.rotate} onClick={() => {setMessages([...messages, newMessage]); setNewMessage('')}} height='30px' aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Room;
