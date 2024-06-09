import styles from "../ui/login/Login.module.css";
import LoginForm from "../ui/login/loginForn/LoginForm";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
