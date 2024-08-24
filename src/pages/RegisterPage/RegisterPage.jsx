import React from 'react';
import AuthForm from '../../components/AuthForm/AuthForm';
import styles from './RegisterPage.module.css';

function RegisterPage() {
  return (
    <div className={styles.registerPage}>
      <h1>Register</h1>
      <AuthForm
        onSubmit={() => {}}
        fields={[
          { name: 'name', label: 'Name', type: 'text', placeholder: 'Enter your name' },
          { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email' },
          { name: 'password', label: 'Password', type: 'password', placeholder: 'Enter your password' }
        ]}
        buttonText="Register"
        initialState={{}}
        validationSchema={{}}
      />
    </div>
  );
}

export default RegisterPage;