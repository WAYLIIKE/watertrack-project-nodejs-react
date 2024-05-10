<<<<<<< HEAD
import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import { useId, useState } from 'react';
import css from './SignUpPage.module.css';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { IconEyeClose } from '../../components/Icons/IconEyeClose';
import { IconEye } from '../../components/Icons/IconEye';
=======
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
>>>>>>> main

export default function SignUpPage() {
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();
  const [showPassword, setShowPassword] = useState(false);
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
  const IconEyes = ({ onClick }) => {
    const [isVisible, setIsVisible] = useState(false);
    return (
      <div
        onClick={() => {
          setIsVisible(!isVisible);
          onClick();
        }}
      >
        {isVisible ? <IconEyeClose /> : <IconEye />}
      </div>
    );
  };
  return (
<<<<<<< HEAD
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
                    type={showPassword ? 'text' : 'password'}
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
            <div className={css.signupIconEyes}>
              <Field name="password">
                {({ field, form }) => {
                  const error = getIn(form.errors, field.name);
                  const touched = getIn(form.touched, field.name);
                  const isError = error && touched;
                  return (
                    <input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
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
              <div className={css.signupIcon}>
                <IconEyes onClick={() => setShowPassword(!showPassword)} />
              </div>
            </div>
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
            <div className={css.signupIconEyes}>
              <Field name="passwordRepeat">
                {({ field, form }) => {
                  const error = getIn(form.errors, field.name);
                  const touched = getIn(form.touched, field.name);
                  const isError = error && touched;
                  return (
                    <input
                      {...field}
                      type={showPassword ? 'text' : 'password'}
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
              <div className={css.signupIcon}>
                <IconEyes onClick={() => setShowPassword(!showPassword)} />
              </div>
            </div>
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
=======
    <Container>
      <p>Sign up page...</p>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
    </Container>
>>>>>>> main
  );
}
