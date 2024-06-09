import styles from "../ui/login/Login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login</h1>
        <input type="text" name="username" placeholder="username" required />
        <input type="text" name="password" placeholder="password" required />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
