import React from 'react';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.AuthNav}>
        <button className={styles.signUpBtn}>Sign In</button>
        <button className={styles.signInBtn}>Sign Up</button>
    </div>
  )
}

export default AuthNav
