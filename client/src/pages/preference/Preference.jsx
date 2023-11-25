import React, { useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import styles from './Preference.module.scss';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import { useNavigate } from 'react-router-dom';
import { setMusicPreference } from '../../services/localStorage.services';
import { useDispatch } from 'react-redux';
import { loadRoomsList } from '../../store/rooms.slice';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(0),
    minWidth: 700,
    maxWidth: 600
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  chip: {
    margin: 2
  },
  noLabel: {
    marginTop: theme.spacing(3)
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

// const names = [
//   'alternative',
//   'authors_song',
//   'blues',
//   'chanson',
//   'classic',
//   'country',
//   'dancing',
//   'electro',
//   'estrade',
//   'indie',
//   'jazz',
//   'metal',
//   'pop',
//   'punk',
//   'rap_hip-hop',
//   'reggae',
//   'RnB',
//   'rock',
//   'ska',
//   'world_music'
// ];

const names = [
  'альтернатива',
  'авторская песня',
  'блюз',
  'шансон',
  'классика',
  'кантри',
  'танцевальная',
  'электро',
  'эстрада',
  'инди',
  'джаз',
  'металл',
  'поп',
  'панк',
  'рэп/хип-хоп',
  'регги',
  'RnB',
  'рок',
  'ска',
  'мировая музыка'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
}

export default function Preference() {
  const navigate = useNavigate();
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
  };

  const handleSubmitMusicPref = () => {
    setMusicPreference(personName);
    // dispatch();
    navigate('/');
  };

  useEffect(() => {
    dispatch(loadRoomsList());
  }, []);

  return (
    <div className={styles.container}>
      <FormControl className={classes.formControl}>
        <InputLabel className={styles.input} id="demo-mutiple-chip-label">
          Ваши музыкальные предпочтения
        </InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}>
          {names.map((name) => (
            <MenuItem key={name} value={name} style={getStyles(name, personName, theme)}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {personName.length > 0 && (
        <Button
          onClick={handleSubmitMusicPref}
          className={styles.next_button}
          variant="outlined"
          color="secondary">
          Слушать музыку
        </Button>
      )}
    </div>
  );
}
