import React from 'react';
import styles from './BGWrapper.module.css';
import expensePic from '../../assests/images/expensePic.jpg';  // Correctly import the image

export const BGWrapper = () => {
  return (
    <div className={styles.decorationBlock}>
      <img className={styles.heroBG} src={expensePic} alt="Expense Background"/>
         <div className={styles.balanceBlock}>
           <div className={styles.arrowIcon}>
             <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Arrow_down_green.svg/2048px-Arrow_down_green.svg.png" alt="icon"/>
           </div>
            <div className={styles.balanceTitle}>Your Balance</div>
            <div className={styles.balanceAmount}>$632,000</div>
            <div className={styles.balanceGrowth}>+1.29%</div>
          </div>
    </div>
  );
};
