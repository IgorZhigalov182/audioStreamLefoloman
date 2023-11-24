import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SearchBar = () => {
  return (
    <div
      style={{
        paddingTop: '1.5rem',
        display: 'flex',
        justifyContent: 'center',
      }}>
      <i className="fa-solid fa-podcast" style={{ fontSize: '2.5rem', marginTop: '5px' }}></i>
      <TextField
        style={{ width: '82%', marginLeft: '15px' }}
        id="outlined-basic"
        label="Что вы хотите послушать?"
        variant="outlined"
      />
      <Button style={{ marginLeft: '15px' }} color="success" variant="outlined" size="medium">
        Найти
      </Button>
      {/* <button
        style={{
          textAlign: 'center',
          border: '1px solid black',
          marginLeft: '15px',
          width: '5rem',
          padding: '1rem',
          borderRadius: '0.25rem',
        }}>
        Найти
      </button> */}
    </div>
  );
};

export default SearchBar;
