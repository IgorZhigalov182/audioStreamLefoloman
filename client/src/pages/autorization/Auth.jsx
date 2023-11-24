import AuthForm from '../../components/auth-form/authForm';
import styles from './Auth.module.scss';

const Auth = () => {
    return (
        <div className={styles.container}>
            <AuthForm />
        </div>
    )
}

export default Auth;