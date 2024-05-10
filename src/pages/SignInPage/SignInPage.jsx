import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import { useId } from 'react';
import css from './SignInPage.module.css';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

export default function SignInPage() {
  const emailId = useId();
  const passId = useId();
  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
  });
  return (
    <div className={css.signinBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={(values, action) => {
          console.log('login success');
          action.resetForm();
        }}
      >
        <Form className={css.signinForm} autoComplete="on">
          <h1 className={css.signinName}>Sign In</h1>
          <div className={css.signinFormGroup}>
            <label className={css.signinLabel} htmlFor={emailId}>
              Email:
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
          <div className={css.signinFormGroup}>
            <label className={css.signinLabel} htmlFor={passId}>
              Password:
            </label>
            <Field name="password">
              {({ field, form }) => {
                const error = getIn(form.errors, field.name);
                const touched = getIn(form.touched, field.name);
                const isError = error && touched;
                return (
                  <input
                    {...field}
                    type="password"
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
}
