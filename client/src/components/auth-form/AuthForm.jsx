import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginAction, signUp } from '../../store/users.slice';
import { Button, TextField } from '@mui/material';
import styles from './AuthForm.module.scss';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [hasLogin, setHasLogin] = useState(true);
  const [pass, setPass] = useState('');
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction({ login, pass }));
    // navigate('/preference');
  };

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(signUp({ login, pass }));
    // navigate('/preference');
  };

  return (
    <div className={styles.container}>
      {hasLogin ? (
        <>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.form_section}>
              <TextField
                id="login"
                label="Логин"
                variant="standard"
                fullWidth
                onChange={(e) => setLogin(e.target.value)}
              />
              <TextField
                id="pass"
                label="Пароль"
                variant="standard"
                fullWidth
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className={styles.form_section}>
              <Button onClick={onSubmit} variant="contained">
                Войти
              </Button>
              <div>
                Нет учетной записи?&nbsp;
                <a onClick={() => setHasLogin(false)}>Зарегистрируйся</a>
              </div>
            </div>
          </form>
        </>
      ) : (
        <>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.form_section}>
              <TextField
                id="login"
                label="Логин"
                variant="standard"
                fullWidth
                onChange={(e) => setLogin(e.target.value)}
              />
              <TextField
                id="pass"
                label="Пароль"
                variant="standard"
                fullWidth
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <div className={styles.form_section}>
              <Button onClick={onRegister} variant="contained">
                Зарегистрироваться
              </Button>
              <div>
                Уже зарегистрирован?&nbsp;
                <a onClick={() => setHasLogin(true)}>Авторизуйся</a>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default AuthForm;
