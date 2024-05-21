import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import css from './SignInForm.module.css';
import { IconEyeClose } from '../Icons/IconEyeClose';
import { IconEye } from '../Icons/IconEye';
import { NavLink } from 'react-router-dom';
import * as Yup from 'yup';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/user/userOps';

export const SignInForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passId = useId();

  const [showPassword, setShowPassword] = useState(false);

  const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(/\d/, 'The password must contain at least one number')
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
  });

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
        onSubmit={async (values) => {
          dispatch(signIn(values));
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
                {showPassword ? <IconEye /> : <IconEyeClose />}
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
            {'Don`t have an account? '}
            <NavLink to="/signup" className={css.signinA}>
              Sign Up
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
