import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ onLogout }) => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>
        <span className={styles.textLogo}>EXPENSETRACKER</span>
      </div>
      <button onClick={onLogout} className={styles.logoutButton}>Logout</button>
      {/* Add other navbar items here */}
    </nav>
  );
};

export default Navbar;