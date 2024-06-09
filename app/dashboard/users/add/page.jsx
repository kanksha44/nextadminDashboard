import { addUser } from "@/app/lib/actions";
import styles from "../../../ui/dashboard/users/addUser/AddUsers.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="username"
          name="username"
          required
          autoComplete="username"
        />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          name="password"
          required
          autoComplete="current-password"
        />
        <input type="number" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false}>Is Admin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true}>Is Active?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>

        <textarea
          name="address"
          id="address"
          rows="16"
          placeholder="address"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
