import React from 'react';
import Form from '../../components/form';
import { useState } from 'react';
import styles from './signup.module.css';

export default function Signup() {
  const [formData, setFormData] = useState({
    name: null,
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const formFields = [
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name',
      value: formData.name,
      onChange: (e) => {
        setFormData({ ...formData, name: e.target.value });
      },
    },
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
    {
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm your password',
      value: formData.confirmPassword,
      onChange: (e) => {
        setFormData({ ...formData, confirmPassword: e.target.value });
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
    name: {
      message: 'Name is required',
      isValid: formData?.name?.length > 0 && formData.name !== null,
      onError: () => {
        setError((error) => ({ ...error, name: true }));
      },
    },
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
    confirmPassword: {
      message: 'Password does not match',
      isValid: formData.confirmPassword === formData.password,
      onError: () => {
        setError((error) => ({ ...error, confirmPassword: true }));
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
          Have an account?{' '}
          <button type="button" className={styles.link}>
            <a href="/login"> Login</a>
          </button>
        </p>
      </div>
    </div>
  );
}
