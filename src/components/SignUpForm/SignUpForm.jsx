import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import css from './SignUpForm.module.css';
import { IconEyeClose } from '../Icons/IconEyeClose';
import { IconEye } from '../Icons/IconEye';
import * as Yup from 'yup';
import { NavLink, Navigate } from 'react-router-dom';
import { useId, useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../redux/user/userOps';

export const SignUpForm = () => {
  const dispatch = useDispatch();

  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordReap, setshowPasswordReap] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const registerSchema = Yup.object().shape({
    email: Yup.string()
      .email()
      .matches('^(?!.*@[^,]*,)', 'Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .matches(/\d/, 'The password must contain at least one number')
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches('[a-zA-Z]', 'Password can only contain Latin letters.'),
    passwordRepeat: Yup.string()
      .required('No password provided')
      .matches(/\d/, 'The password must contain at least one number'),
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVisibilityP = () => {
    setshowPasswordReap(!showPasswordReap);
  };

  return isRegistered ? (
    <Navigate to="/signin" />
  ) : (
    <div className={css.signupBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={registerSchema}
        onSubmit={(values, action) => {
          const { passwordRepeat, password, email } = values;

          if (password !== passwordRepeat)
            return action.setFieldError(
              'passwordRepeat',
              'Passwords do not match'
            );

          const dispatchObj = { email, password };

          console.log(dispatchObj);
          dispatch(signUp(dispatchObj));
          setIsRegistered(true);

          action.resetForm();
        }}
      >
        <Form className={css.signupForm}>
          <h1 className={css.signupName}>Sign up</h1>
          <div className={css.signupFormGroupEmail}>
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
          <div className={css.signupFormGroupEmail}>
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
                      id={passwordId}
                      autoComplete="new-password"
                      placeholder="Enter your password"
                    />
                  );
                }}
              </Field>
              <div
                className={css.signupIcon}
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <IconEyeClose /> : <IconEye />}
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
                      type={showPasswordReap ? 'text' : 'password'}
                      className={`${css.signupField} ${
                        isError ? css.signUpErrorField : ''
                      }`}
                      id={passwordRepeatId}
                      autoComplete="new-password"
                      placeholder="Repeat password"
                    />
                  );
                }}
              </Field>
              <div
                className={css.signupIcon}
                onClick={togglePasswordVisibilityP}
              >
                {showPasswordReap ? <IconEyeClose /> : <IconEye />}
              </div>
            </div>
            <ErrorMessage
              name="passwordRepeat"
              component="span"
              className={css.signupError}
            />
          </div>
          <button className={css.signupButton} type="submit">
            Sign Up
          </button>
          <p className={css.signupText}>
            Already have an account?{' '}
            <NavLink to="/signin" className={css.signupA}>
              Sign In
            </NavLink>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
