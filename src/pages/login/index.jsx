import React, { useState } from 'react';
import Form from '../../components/form';
import styles from './login.module.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState({
    email: false,
    password: false,
  });

  const formFields = [
    {
      name: 'email',
      type: 'email',
      placeholder: 'Enter your email',
      value: formData.email,
      onChange: (e) => {
        setFormData({ ...formData, email: e.target.value });
      },
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Enter your password',
      value: formData.password,
      onChange: (e) => {
        setFormData({ ...formData, password: e.target.value });
      },
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    Object.keys(errorMessages).forEach((key) => {
      if (!errorMessages[key].isValid) {
        errorMessages[key].onError();
      }
    });
  };

  const errorMessages = {
    email: {
      message: 'Email is required',
      isValid: formData.email.length > 0,
      onError: () => {
        setError((error) => ({ ...error, email: true }));
      },
    },
    password: {
      message: 'Password is required',
      isValid: formData.password.length > 0,
      onError: () => {
        setError((error) => ({ ...error, password: true }));
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <img src="/hello.png" alt="hello" />
        <h1 className={styles.welcomeTitle}>Welcome aboard my friend</h1>
        <p className={styles.welcomeText}>
          Just a couple of clicks and we start!
        </p>
      </div>
      <div className={styles.formContainer}>
        <h2 className={styles.formHeader}>Register</h2>
        <Form
          error={error}
          formFields={formFields}
          onSubmit={onSubmit}
          errorMessages={errorMessages}
          className={styles.input}
        />
        <p className={styles.footerText}>
          Dont have an account?{' '}
          <button type="button" className={styles.link}>
            <a href="/"> Sign Up</a>
          </button>
        </p>
      </div>
    </div>
  );
}
