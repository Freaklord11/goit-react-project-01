import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <h1>Login</h1>
      <AuthForm
        onSubmit={() => {}}
        fields={[
          { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
        ]}
        buttonText="Login"
        initialState={{}}
        validationSchema={{}}
      />
    </div>
  );
}

export default LoginPage;