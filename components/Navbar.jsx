import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Link href="/">
            <Image src="/assets/telephone.png" alt="" width="32" height="32" />
          </Link>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>(020) 123 4567</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/">
            <li className={styles.listItem}>Home</li>
          </Link>
          <li className={styles.listItem}>Location</li>

          <li className={styles.listItem}>Menu</li>

          <Link href="/">
            <Image src="/assets/logo.png" alt="logo" width="100" height="100" />
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Link href="/cart">
            <Image src="/assets/cart.png" alt="" width="30" height="30" />
          </Link>
          <div className={styles.counter}>{quantity}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
