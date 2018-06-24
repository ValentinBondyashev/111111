import React from 'react';
import { Field, reduxForm } from 'redux-form';
import submit from '../../actions/submit';
import styles from './index.scss';

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

const Login = props => {
  const { error, handleSubmit, pristine, reset, submitting } = props;
  return (
    <div className={styles.login}>
      <div className={styles.container}>
      <form onSubmit={handleSubmit(submit)}>
        <Field
          name="username"
          type="text"
          component={renderField}
          label="Username"
        />
        <Field
          name="password"
          type="password"
          component={renderField}
          label="Password"
        />
        {error && <strong>{error}</strong>}
        <div>
          <button type="submit" disabled={submitting}>Log In</button>
        </div>
      </form>
      </div>
    </div>
  );
};

export default reduxForm({
  form: 'LoginFrom', 
})(Login);
