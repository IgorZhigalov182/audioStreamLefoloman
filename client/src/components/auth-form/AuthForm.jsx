import { useState } from 'react';
import { Button, TextField } from '@mui/material';
import styles from './AuthForm.module.scss';

const AuthForm = () => {
    const [hasLogin, setHasLogin] = useState(true);
    const [pass, setPass] = useState('');
    const [login, setLogin] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.container}>
            {
                hasLogin ? (
                <>
                    <form className={styles.form} onSubmit={onSubmit}>
                        <div className={styles.form_section}>
                            <TextField id='login' label="Логин" 
                                variant="standard" fullWidth
                                onChange={(e) => setLogin(e.target.value)} />
                            <TextField id='pass' label="Пароль" 
                                variant="standard" fullWidth
                                onChange={(e) => setPass(e.target.value)} />
                        </div>  
                        <div className={styles.form_section}>
                            <Button onClick={onSubmit} variant="contained">Войти</Button>
                            <div>
                                Нет учетной записи?&nbsp;
                                <a onClick={() => setHasLogin(false)}>Зарегистрируйся</a>
                            </div>
                        </div>
                    </form>    
                </>
                ) :
                (
                    <>
                        <form className={styles.form} onSubmit={onSubmit}>
                            <div className={styles.form_section}>
                                <TextField id='login' label="Логин" 
                                    variant="standard" fullWidth
                                    onChange={(e) => setLogin(e.target.value)} />
                                <TextField id='pass' label="Пароль" 
                                    variant="standard" fullWidth
                                    onChange={(e) => setPass(e.target.value)} />
                            </div>  
                            <div className={styles.form_section}>
                                <Button onClick={onSubmit} variant="contained">Зарегистрироваться</Button>
                                <div>
                                    Уже зарегистрирован?&nbsp;
                                    <a onClick={() => setHasLogin(true)}>Авторизуйся</a>
                                </div>
                            </div>
                        </form>    
                    </>
                )
            }
                 
        </div>
    )
}

export default AuthForm;