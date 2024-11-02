import React from 'react';
import styles from './form.module.css';
function FormField({ name, type, placeholder, value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

const Form = ({ error, formFields, onSubmit, errorMessages }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {formFields.map((field) => (
        <div key={field.name} className={styles.formField}>
          <input
            type={field.type}
            name={field.name}
            placeholder={field.placeholder}
            value={field.value}
            onChange={field.onChange}
            className={styles.input}
          />
          {error[field.name] && (
            <span className={styles.errorMessage}>
              {errorMessages[field.name].message}
            </span>
          )}
        </div>
      ))}
      <button type="submit" className={styles.submitButton}>
        Submit
      </button>
    </form>
  );
};

export default Form;
