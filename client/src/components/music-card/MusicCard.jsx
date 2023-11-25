import styles from './MusicCard.module.scss';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const MusicCard = ({ name, id, isPrivate, isPremium }) => {
  const navigate = useNavigate();
  const handleGoToRoom = () => {
    navigate(`/rooms/${id}`, {
      state: {
        isPrivate: isPrivate,
        isPremium: isPremium,
      },
    });
  };

  return (
    <div className={styles.card_wrapper} onClick={handleGoToRoom}>
      <div className={styles.logo_card}></div>
      <h1>{name}</h1>
    </div>
  );
};

export default MusicCard;
