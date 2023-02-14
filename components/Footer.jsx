import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/assets/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH YES, WE DO THE BEST PIZZA, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            42 Church Street.
            <br /> London, WC25 3AL
            <br /> (020) 123-4567
          </p>
          <p className={styles.text}>
            92 Green Lane.
            <br /> London, NW16 7PV
            <br /> (020) 123-4568
          </p>
          <p className={styles.text}>
            56 South Street.
            <br /> London, SW40 7EG
            <br /> (020) 123-4569
          </p>
          <p className={styles.text}>
            3 Queensway.
            <br /> London, SE79 8EY
            <br /> (020) 123-4560
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
