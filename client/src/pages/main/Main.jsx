import RoomCard from '../../components/room-card/RoomCard';
import SearchBar from '../../components/search-bar/SearchBar';
import styles from './Main.module.scss';

const Main = () => {
  return (
    <div>
      <SearchBar />
      <RoomCard />
    </div>
  );
};

export default Main;
