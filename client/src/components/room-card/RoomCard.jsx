import React, { useState } from 'react';
import styles from './RoomCard.module.scss';
import MusicCard from '../music-card/MusicCard';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { getFivePrefRoom, getRoomsList } from '../../store/rooms.slice';
import { useSelector } from 'react-redux';

const mockRooms = [
  { name: 'Radio', id: '123', tags: ['1', '2', '3'], isPrivate: false, isPremium: false },
  { name: 'Podcast', id: '223', tags: ['2', '3'], isPrivate: false, isPremium: false },
  { name: 'Show', id: '32243', tags: ['1', '3'], isPrivate: false, isPremium: false },
  { name: 'News', id: '322323', tags: ['1'], isPrivate: false, isPremium: false },
  { name: 'Music', id: '21323', tags: ['3'], isPrivate: false, isPremium: true },
  { name: 'TV', id: '1354323', tags: ['3'], isPrivate: false, isPremium: true },
  { name: 'Drums', id: '1323', tags: ['3'], isPrivate: false, isPremium: true },
  { name: 'Brums', id: '453146323', tags: ['3'], isPrivate: false, isPremium: true },
  { name: 'Vrums', id: '13654523', tags: ['3'], isPrivate: false, isPremium: true }
];

const fiveMockRooms = [
  { name: 'Radio', id: '123', tags: ['1', '2', '3'], isPrivate: false, isPremium: false },
  { name: 'Podcast', id: '223', tags: ['2', '3'], isPrivate: false, isPremium: false },
  { name: 'Show', id: '32243', tags: ['1', '3'], isPrivate: false, isPremium: false },
  { name: 'News', id: '322323', tags: ['1'], isPrivate: false, isPremium: false },
  { name: 'Music', id: '21323', tags: ['3'], isPrivate: false, isPremium: true }
];

const RoomCard = () => {
  const [allRooms, setAllRooms] = useState([]);
  const [fiveRooms, setFiveRooms] = useState([]);
  const navigate = useNavigate();
  const handleGoToRooms = () => navigate(`/rooms`);
  const fivePrefRoom = useSelector(getFivePrefRoom());
  const listRooms = useSelector(getRoomsList());
  let location = useLocation();

  useEffect(() => {
    setAllRooms(listRooms);
    setFiveRooms(fivePrefRoom);
    console.log(allRooms);
    console.log(fiveRooms);
  }, []);

  if (location.pathname === '/') {
    return (
      <section className={styles.room_card}>
        <div className={styles.head_part}>
          <h2>Мы подобрали для вас</h2>
          <button onClick={handleGoToRooms}>Смотреть все</button>
        </div>
        <div className={styles.rooms_wrapper}>
          {fiveMockRooms.map(({ name, id, tags, isPrivate, isPremium }) => (
            <MusicCard name={name} id={id} key={id} isPrivate={isPrivate} isPremium={isPremium} />
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.room_card}>
      <div className={styles.head_part}>
        <button onClick={() => navigate('/')}>На главную</button>
      </div>
      <div className={styles.rooms_wrapper}>
        {mockRooms.map(({ name, id, tags }) => (
          <MusicCard name={name} id={id} key={id} />
        ))}
      </div>
    </section>
  );
};

export default RoomCard;
