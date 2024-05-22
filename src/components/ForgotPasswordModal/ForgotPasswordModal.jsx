import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import css from './ForgotPasswordModal.module.css';

import { FormValidateError } from '../FormValidateError/FormValidateError';
import { useDispatch } from 'react-redux';
import { resetPasswordSendMail } from '../../redux/user/userOps';
import toast from 'react-hot-toast';

const schema = yup.object().shape({
  email: yup.string().email().required('Email is not provided'),
});

export const ForgotPasswordModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = async (data) => {
    const response = await dispatch(
      resetPasswordSendMail({ email: data.email })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      toast.success(`${response.payload}`, {
        duration: 5000,
        position: 'top-center',
        style: {
          textAlign: 'center',
          boxShadow: '8px 11px 27px -8px rgba(66, 68, 90, 1)',
        },
      });

      closeModal();
    } else {
      toast.error(`${response.payload}`, {
        duration: 5000,
        position: 'top-center',
        style: {
          textAlign: 'center',
          boxShadow: '8px 11px 27px -8px rgba(66, 68, 90, 1)',
        },
      });

      reset();
    }
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
