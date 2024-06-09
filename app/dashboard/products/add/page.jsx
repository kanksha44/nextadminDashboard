import styles from "../../../ui/dashboard/products/addProduct/AddProducts.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <input type="text" placeholder="title" name="title" required />
        <select name="cat" id="cat">
          <option value="general">Choose a Category</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Phone">Phone</option>
          <option value="Computer">Computer</option>
        </select>
        <input type="number" placeholder="price" name="price" />
        <input type="number" placeholder="stock" name="stock" />
        <input type="text" placeholder="color" name="color" />
        <input type="text" placeholder="size" name="size" />
        <textarea
          name="desc"
          id="des"
          rows="16"
          placeholder="description"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProductPage;
