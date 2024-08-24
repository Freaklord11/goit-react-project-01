import React from 'react';
import styles from './MainTransactionPage.module.css';

function MainTransactionsPage() {
  return (
    <div className={styles.transactionsPage}>
      <h1>All Transactions</h1>
      {/* Add components to display transactions here */};
    </div>
  );
}

export default MainTransactionsPage;