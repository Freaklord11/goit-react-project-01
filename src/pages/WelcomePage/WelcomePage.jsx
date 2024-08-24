import React from 'react';
import Header from '../../components/Header/Header';
import styles from './WelcomePage.module.css';

function WelcomePage() {
  return (
    <div className={styles.welcomePage}>
      <h1>
        <Header/>
      </h1>
      <div>
      </div>
      {/* Add other elements here */}
    </div>
  );
}

export default WelcomePage;