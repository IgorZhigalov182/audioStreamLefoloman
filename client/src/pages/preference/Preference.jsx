import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import styles from './Preference.module.scss';

const Preference = () => {
  const [formState, setFormState] = React.useState({
    userRoles: [],
  });

  const handleFieldChange = (event) => {
    event.persist();
    setFormState((formState) => ({
      ...formState,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    }));
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <TextField
          className={styles.text_field}
          select
          name="userRoles"
          id="userRoles"
          variant="outlined"
          label="userRoles"
          SelectProps={{
            multiple: true,
            value: formState.userRoles,
            onChange: handleFieldChange,
          }}>
          <MenuItem value="admin">Music</MenuItem>
          <MenuItem value="user1">Pocast</MenuItem>
          <MenuItem value="user2">Radio</MenuItem>
        </TextField>
      </div>
    </div>
  );
};

export default Preference;
