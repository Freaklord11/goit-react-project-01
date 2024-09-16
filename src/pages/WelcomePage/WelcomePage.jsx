import React from 'react';
import Header from '../../components/Header/Header';
import Details from 'components/Details/Details';
import styles from './WelcomePage.module.css';
import AuthNav from 'components/AuthNav/AuthNav';
import { BGWrapper } from 'components/BGWrapper/BGWrapper';

const WelcomePage = () => {
  return (
    <div className={styles.welcomePage}>
      <Header />
      <Details/>
      <AuthNav/>
      <BGWrapper/>
    </div>
  );
}

export default WelcomePage;
