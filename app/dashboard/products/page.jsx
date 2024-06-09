import Search from "@/app/ui/dashboard/search/Search";
import styles from "../../ui/dashboard/products/Products.module.css";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/app/ui/dashboard/pagination/Pagination";
const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a product" />
        <Link href="/dashboard/products/add">
          {" "}
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/noproduct.jpg"
                  height={40}
                  width={40}
                  alt=""
                  className={styles.productImage}
                />
                Iphone
              </div>
            </td>
            <td>desc</td>
            <td>$999</td>
            <td>13.01.2022</td>
            <td>72</td>
            <td>
              <div className={styles.buttons}>
                <Link href="/dashboard/products/test">
                  <button className={`${styles.button} ${styles.view}`}>
                    {" "}
                    View
                  </button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>
                  {" "}
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default ProductsPage;
