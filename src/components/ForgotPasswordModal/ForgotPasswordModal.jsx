import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './ForgotPasswordModal.module.css';

import { FormValidateError } from '../FormValidateError/FormValidateError';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is not provided'),
});

export const ForgotPasswordModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Account recovery</h3>
      <form onSubmit={handleSubmit(submitHandler)}>
        <label className={css.label} htmlFor="email">
          Enter your email:
        </label>
        {errors.email && <FormValidateError message={errors.email.message} />}
        <input
          className={css.input}
          type="text"
          name="email"
          id="email"
          {...register('email')}
        />
        <button className={css.submitButton} type="submit">
          Next
        </button>
      </form>
    </div>
  );
};
