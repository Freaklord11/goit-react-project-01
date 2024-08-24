import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './AuthForm.module.css';

function AuthForm({ onSubmit, fields, buttonText, initialState, validationSchema }) {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validationSchema ? validationSchema(formState) : {};
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formState);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.name} className={styles.formGroup}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={formState[field.name]}
            onChange={handleChange}
          />
          {errors[field.name] && <span className={styles.error}>{errors[field.name]}</span>}
        </div>
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
}

AuthForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  buttonText: PropTypes.string.isRequired,
  initialState: PropTypes.object.isRequired,
  validationSchema: PropTypes.func,
};

export default AuthForm;
