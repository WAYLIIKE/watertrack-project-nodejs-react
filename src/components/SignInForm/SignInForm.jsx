import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import css from './SignInForm.module.css';
import { IconEyeClose } from '../Icons/IconEyeClose';
import { IconEye } from '../Icons/IconEye';
import { NavLink } from 'react-router-dom';
import { useId, useState } from 'react';
export const SignInForm = ({ loginSchema }) => {
  const emailId = useId();
  const passId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={css.signinBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={async (values, action) => {
          try {
            const isLoggedIn = true;
            if (isLoggedIn) {
              // navigate('/tracker');
              console.log('Login successful, redirecting to TrackerPage');
              action.resetForm();
              // await signIn(values);
            } else {
              console.log('Login failed');
            }
          } catch (error) {
            console.error('Login error:', error);
          }
        }}
      >
        <Form className={css.signinForm} autoComplete="on">
          <h1 className={css.signinName}>Sign In</h1>
          <div className={css.signinFormGroupEmail}>
            <label className={css.signinLabel} htmlFor={emailId}>
              Email
            </label>
            <Field name="email">
              {({ field, form }) => {
                const error = getIn(form.errors, field.name);
                const touched = getIn(form.touched, field.name);
                const isError = error && touched;
                return (
                  <input
                    {...field}
                    type="text"
                    className={`${css.signinField} ${
                      isError ? css.signInErrorField : ''
                    }`}
                    id={emailId}
                    autoComplete="username"
                    placeholder="Enter your email"
                  />
                );
              }}
            </Field>
            <ErrorMessage
              name="email"
              component="span"
              className={css.signinError}
            />
          </div>
          <div className={css.signinFormGroupPassword}>
            <label className={css.signinLabel} htmlFor={passId}>
              Password
            </label>
            <div className={css.signinIconEyes}>
              <Field name="password">
                {({ field, form }) => {
                  const error = getIn(form.errors, field.name);
                  const touched = getIn(form.touched, field.name);
                  const isError = error && touched;
                  return (
                    <input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
                      className={`${css.signinField} ${
                        isError ? css.signInErrorField : ''
                      }`}
                      id={passId}
                      autoComplete="current-password"
                      placeholder="Enter your password"
                    />
                  );
                }}
              </Field>
              <div
                className={css.signinIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IconEyeClose /> : <IconEye />}
              </div>
            </div>
            <ErrorMessage
              name="password"
              component="span"
              className={css.signinError}
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
    </div>
  );
};
