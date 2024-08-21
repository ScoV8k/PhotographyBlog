import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LB</div>
      <ul className={styles.navList}>
        <li>
          <Link href="/art">art</Link>
        </li>
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <Link href="/contact">contact</Link>
        </li>
        <li>
          <Link href="/client">for client</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
