import React from 'react';
import styles from './Details.module.css';

const Details = () => {
  return (
    <div className={styles.detailBlock}>
      <h3 className={styles.expenseText}>Expense Log</h3>
      <h1 className={styles.headerTitle}>
        Manage Your <span className={styles.finText}>Finances</span> Masterfully!
      </h1>
      <p className={styles.detailsDef}>
        ExpenseTracker effortlessly empowers you to take control of your finances! <br />
        With intuitive features, it simplifies the process of tracking and managing <br />
        expenses, allowing for a stress-free mastery over your financial world.
      </p>
    </div>
  );
};

export default Details;
