import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { IconEyeClose } from '../Icons/IconEyeClose';
import { IconEye } from '../Icons/IconEye';

import css from './PasswordChangeModal.module.css';
import { useDispatch } from 'react-redux';
import { changePassword } from '../../redux/user/userOps';

const schema = yup.object().shape({
  currentPass: yup.string().required('Please, enter current password'),

  newPass: yup
    .string()
    .matches(
      /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must be at least 8 characters long, contain at least one uppercase letter, and at least one digit'
    )
    .test(
      'not-same-as-current',
      'New password should not be the same as the current password',
      function (value) {
        return value !== this.parent.currentPass;
      }
    )
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Please, enter new password'),

  repeatPass: yup
    .string()
    .oneOf([yup.ref('newPass')], 'Passwords must match')
    .required('Please, repeat new password'),
});

export const PasswordChangeModal = ({ closeModal }) => {
  const dispatch = useDispatch();

  const [showCurrentPass, setShowCurrentPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showNewPassRepeat, setShowNewPassRepeat] = useState(false);

  const toggleCurrentPassVisibility = () => {
    setShowCurrentPass(!showCurrentPass);
  };

  const toggleNewPassVisibility = () => {
    setShowNewPass(!showNewPass);
  };

  const toggleCNewPassRepeatVisibility = () => {
    setShowNewPassRepeat(!showNewPassRepeat);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const { currentPass, newPass } = data;

    const response = await dispatch(
      changePassword({
        oldPass: currentPass,
        newPass,
      })
    );

    if (response.meta.requestStatus === 'fulfilled') {
      closeModal();
    } else {
      reset();
    }
  };

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Change the password </h2>

      <form className={css.form} onSubmit={handleSubmit(onSubmit)}>
        <label className={css.label} htmlFor="currentPass">
          Current password:
        </label>

        {errors.currentPass && (
          <span className={css.error}>{errors.currentPass.message} </span>
        )}

        <div className={css.inputWrapper}>
          <input
            {...register('currentPass')}
            className={css.input}
            type={showCurrentPass ? 'text' : 'password'}
            name="currentPass"
            id="currentPass"
          />

          <div className={css.icon} onClick={toggleCurrentPassVisibility}>
            {showCurrentPass ? <IconEye /> : <IconEyeClose />}
          </div>
        </div>

        <label className={css.label} htmlFor="newPass">
          Enter new password:
        </label>

        {errors.newPass && (
          <span className={css.error}>{errors.newPass.message} </span>
        )}

        <div className={css.inputWrapper}>
          <input
            {...register('newPass')}
            className={css.input}
            type={showNewPass ? 'text' : 'password'}
            name="newPass"
            id="newPass"
          />

          <div className={css.icon} onClick={toggleNewPassVisibility}>
            {showNewPass ? <IconEye /> : <IconEyeClose />}
          </div>
        </div>

        <label className={css.label} htmlFor="repeatPass">
          Repeat new password:
        </label>

        {errors.repeatPass && (
          <span className={css.error}>{errors.repeatPass.message} </span>
        )}

        <div className={css.inputWrapper}>
          <input
            {...register('repeatPass')}
            className={css.input}
            type={showNewPassRepeat ? 'text' : 'password'}
            name="repeatPass"
            id="repeatPass"
          />

          <div className={css.icon} onClick={toggleCNewPassRepeatVisibility}>
            {showNewPassRepeat ? <IconEye /> : <IconEyeClose />}
          </div>
        </div>

        <button className={css.submitButton} type="submit">
          Change
        </button>
      </form>
    </div>
  );
};
