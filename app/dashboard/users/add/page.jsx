import styles from "../../../ui/dashboard/users/addUser/AddUsers.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input
          type="password"
          placeholder="passowrd"
          name="passowrd"
          required
        />
        <input type="number" placeholder="phone" name="phone" />
        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>
            Is Admin?
          </option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>
            Is Active?
          </option>
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
