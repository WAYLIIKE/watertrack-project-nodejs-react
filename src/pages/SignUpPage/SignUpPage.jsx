import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import { useId } from 'react';
import css from './SignUpPage.module.css';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';

export default function SignUpPage() {
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();
  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
    passwordRepeat: Yup.string().required('No password provided'),
  });
  return (
    <div className={css.signupBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values, action) => {
          console.log('register success');
          action.resetForm();
        }}
      >
        <Form className={css.signupForm}>
          <h1 className={css.signupName}>Sign up</h1>
          <div className={css.signupFormGroup}>
            <label className={css.signupLabel} htmlFor={emailId}>
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
                    className={`${css.signupField} ${
                      isError ? css.signUpErrorField : ''
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
              className={css.signupError}
            />
          </div>
          <div className={css.signupFormGroup}>
            <label className={css.signupLabel} htmlFor={passwordId}>
              Password
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
                    className={`${css.signupField} ${
                      isError ? css.signUpErrorField : ''
                    }`}
                    id={emailId}
                    autoComplete="current-password"
                    placeholder="Enter your password"
                  />
                );
              }}
            </Field>
            <ErrorMessage
              name="password"
              component="span"
              className={css.signupError}
            />
          </div>
          <div className={css.signupFormGroup}>
            <label className={css.signupLabel} htmlFor={passwordRepeatId}>
              Repeat password
            </label>
            <Field name="passwordRepeat">
              {({ field, form }) => {
                const error = getIn(form.errors, field.name);
                const touched = getIn(form.touched, field.name);
                const isError = error && touched;
                return (
                  <input
                    {...field}
                    type="password"
                    className={`${css.signupField} ${
                      isError ? css.signUpErrorField : ''
                    }`}
                    id={emailId}
                    autoComplete="current-password"
                    placeholder="Repeat password"
                  />
                );
              }}
            </Field>
            <ErrorMessage
              name="password"
              component="span"
              className={css.signupError}
            />
          </div>
          <button className={css.signupButton} type="submit">
            Sign Up
          </button>
          <p className={css.signupText}>
            Don’t have an account?
            <NavLink to="/signin" className={css.signupA}>
              Sign Up
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
}
