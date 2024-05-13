import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { IconPlus } from '../../components/Icons/IconPlus';
import { IconMinus } from '../Icons/IconMinus';

import { getCurrentTime } from '../../helpers/getCurrentTime';

import css from './WaterForm.module.css';

const schema = yup.object().shape({
  time: yup.string().required('Time is required'),
  waterValue: yup
    .number()
    .typeError('Enter a valid number')
    .positive('Value must be positive')
    .required('Value is required'),
});

export const WaterForm = () => {
  const {
    register,
    setValue,
    getValues,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      time: getCurrentTime(),
      waterValue: 50,
    },
  });

  const submitForm = (data) => {
    console.log(data); // TEMPORARY
  };

  const subtract = () => {
    const currentValue = getValues('waterValue');
    setValue('waterValue', currentValue - 50);
  };

  const add = () => {
    const currentValue = getValues('waterValue');
    setValue('waterValue', currentValue + 50);
  };

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(submitForm)}>
      <p className={css.subtitle}>Choose a value</p>
      <span className={css.amountTitle}>Amount of water:</span>
      <div className={css.amountWrapper}>
        <button
          className={css.amountButton}
          onClick={subtract}
          type="button"
          disabled={getValues('waterValue') === 0 ? true : false}
        >
          <IconMinus className={css.icon} />
        </button>

        <span className={css.amountValue}>{`${watch('waterValue')} ml`}</span>

        <button className={css.amountButton} onClick={add} type="button">
          <IconPlus className={css.icon} />
        </button>
      </div>

      <div className={css.fieldsWrapper}>
        <label className={css.timeLabel} htmlFor="time">
          Recording time:
        </label>
        <input
          {...register('time')}
          className={css.input}
          type="time"
          name="time"
          id="time"
        />
        {errors.time && (
          <span className={css.validationError}>{errors.time.message}</span>
        )}

        <label className={css.valueLabel} htmlFor="value">
          Enter the value of the water used:
        </label>
        <input
          {...register('waterValue')}
          className={css.input}
          type="number"
          name="value"
          id="value"
          onChange={(e) => setValue('waterValue', Number(e.target.value))}
        />
        {errors.waterValue && (
          <span className={css.validationError}>{errors.time.message}</span>
        )}
      </div>
      <button className={css.submitButton} type="submit">
        Save
      </button>
    </form>
  );
};
