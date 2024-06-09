import Image from "next/image";
import styles from "../../../ui/dashboard/users/singleUser/SingleUser.module.css";
const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        John doe
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="John Doe" />
          <label>Email</label>
          <input type="email" name="email" placeholder="Johndoe@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="number" name="phone" placeholder="+0 8754290" />
          <label>Address</label>
          <textarea type="text" name="Address" placeholder="New York" />
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
