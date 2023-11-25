import { useLocation } from 'react-router-dom';
import React from 'react';

const Room = () => {
  let location = useLocation();
  const roomID = location.pathname.split('/')[2];
  console.log(location);

  return <div>Room: {roomID}</div>;
};

export default Room;
