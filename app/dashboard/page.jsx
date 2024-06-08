import { Righteous } from "next/font/google";
import Card from "../ui/dashboard/card/Card";
import styles from "../ui/dashboard/dashboard.module.css";
import Righbar from "../ui/dashboard/righbar/Righbar";
import Transaction from "../ui/dashboard/transaction/Transaction";
import Charts from "../ui/dashboard/charts/Charts";
const Dashbaord = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transaction />
        <Charts />
      </div>
      <div className={styles.side}>
        <Righbar />
      </div>
    </div>
  );
};

export default Dashbaord;
