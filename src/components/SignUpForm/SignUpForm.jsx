import { ErrorMessage, Field, Form, Formik, getIn } from 'formik';
import css from './SignUpForm.module.css';
import { IconEyeClose } from '../Icons/IconEyeClose';
import { IconEye } from '../Icons/IconEye';
import { NavLink } from 'react-router-dom';
import { useId, useState } from 'react';
export const SignUpForm = ({ registerSchema }) => {
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordReap, setshowPasswordReap] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const togglePasswordVisibilityP = () => {
    setshowPasswordReap(!showPasswordReap);
  };
  return (
    <div className={css.signupBack}>
      <Formik
        initialValues={{
          email: '',
          password: '',
          passwordRepeat: '',
        }}
        validationSchema={registerSchema}
        onSubmit={async (values, action) => {
          const { passwordRepeat, password } = values;
          try {
            if (password !== passwordRepeat) {
              action.setFieldError('passwordRepeat', 'Passwords do not match');
            } else {
              console.log('Register success');
              action.resetForm();
            }
            // await signUp(formData);
          } catch (error) {
            console.error('Registration failed:', error.message);
          }
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
