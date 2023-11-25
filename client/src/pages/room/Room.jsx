import { useLocation } from 'react-router-dom';
import React, { useEffect, useRef } from 'react';

const Room = () => {
  let location = useLocation();
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

  return <div>Room: {roomID}</div>;
};

export default Room;
