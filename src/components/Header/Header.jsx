import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
        <use className={styles.headerIco} href="../../assests/images/symbol-defs.svg#xpense-icon"></use>
        <h1 className={styles.headerText}>EXPENSETRACKER</h1>
      {/* Add more header content here */}
    </header>
  );
};

export default Header;