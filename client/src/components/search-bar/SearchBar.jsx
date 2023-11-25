import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './SearchBar.module.scss';

const SearchBar = () => {
  const [value, setValue] = useState('');

  const handleSearchRoom = () => {
    if (!value) return;

    console.log(value);
  };

  return (
    <div className={styles.search_wrapper}>
      <img className={styles.logo} src="../../public/mts_logo.png" />
      <TextField
        style={{ width: '82%', marginLeft: '15px', height: '100%' }}
        id="outlined-basic"
        label="Что вы хотите послушать?"
        variant="outlined"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        onClick={(e) => handleSearchRoom(e)}
        style={{ marginLeft: '15px', height: '100%' }}
        color="error"
        variant="outlined"
        size="medium">
        Найти
      </Button>
    </div>
  );
};

export default SearchBar;
