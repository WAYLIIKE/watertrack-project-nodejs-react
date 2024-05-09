import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './SignInPage.module.css';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export default function SignInPage() {
  const emailId = useId();
  const passId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('good job');
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
      <Form
        className={css.signinForm}
        onSubmit={handleSubmit}
        autoComplete="on"
      >
        <h1 className={css.signinName}>Sign In</h1>
        <div className={css.signinFormGroup}>
          <label className={css.signinLabel} htmlFor={emailId}>
            Email:
          </label>
          <Field
            type="text"
            name="email"
            className={css.signinField}
            id={emailId}
            autoComplete="username"
            placeholder="Enter your email"
          />
        </div>
        <div className={css.signinFormGroup}>
          <label className={css.signinLabel} htmlFor={passId}>
            Password:
          </label>
          <Field
            type="password"
            name="password"
            className={css.signinField}
            id={passId}
            autoComplete="current-password"
            placeholder="Enter your password"
          />
        </div>
        <button className={css.signinButton} type="submit">
          Log In
        </button>
        <p className={css.signinText}>
          Don’t have an account?
          <NavLink to="/signup" className={css.signinA}>
            Sign Up
          </NavLink>
        </p>
      </Form>
    </Formik>
  );
}
