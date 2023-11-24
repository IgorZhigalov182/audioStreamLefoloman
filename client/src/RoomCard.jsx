import React from 'react';
import styles from './RoomCard.module.scss';
import MusicCard from './MusicCard';
import { useNavigate } from 'react-router-dom';

const mockRooms = [
  { name: 'Radio', id: '123', tags: ['1', '2', '3'] },
  { name: 'Podcast', id: '223', tags: ['2', '3'] },
  { name: 'Show', id: '32243', tags: ['1', '3'] },
  { name: 'News', id: '322323', tags: ['1'] },
  { name: 'Music', id: '1323', tags: ['3'] },
];

const RoomCard = () => {
  const navigate = useNavigate();
  const handleGoToRooms = () => navigate(`/rooms`);

  return (
    <section className={styles.room_card}>
      <div className={styles.head_part}>
        <h2>Комнаты</h2>
        <button onClick={handleGoToRooms}>Смотреть все</button>
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
