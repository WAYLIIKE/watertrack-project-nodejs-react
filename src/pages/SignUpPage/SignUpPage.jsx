import { Field, Form, Formik } from 'formik';
import { useId } from 'react';
import css from './SignUpPage.module.css';
import * as Yup from 'yup';
const registerSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});
export default function SignUpPage() {
  const emailId = useId();
  const passwordId = useId();
  const passwordRepeatId = useId();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={registerSchema}
    >
      <Form className={css.signupForm} onSubmit={handleSubmit}>
        <div className={css.signupFormGroup}>
          <label className={css.signupLabel} htmlFor={emailId}>
            Email
          </label>
          <Field
            type="text"
            name="email"
            id={emailId}
            autoComplete="username"
          />
        </div>
        <div className={css.signupFormGroup}>
          <label className={css.signupLabel} htmlFor={passwordId}>
            Password
          </label>
          <Field
            type="password"
            name="password"
            id={passwordId}
            autoComplete="current-password"
          />
        </div>
        <div className={css.signupFormGroup}>
          <label className={css.signupLabel} htmlFor={passwordRepeatId}>
            Repeat password
          </label>
          <Field type="password" name="password" id={passwordRepeatId} />
        </div>
        <button className={css.signupButton} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}
