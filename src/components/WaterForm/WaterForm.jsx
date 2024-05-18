import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { IconPlus } from '../../components/Icons/IconPlus';
import { IconMinus } from '../Icons/IconMinus';

import { getCurrentTime } from '../../helpers/getCurrentTime';

import css from './WaterForm.module.css';

import { convertTimeToUnix } from '../../helpers/convertTimeToUnix';
import { useDispatch } from 'react-redux';
import { addWater } from '../../redux/water/waterOps';

const schema = yup.object().shape({
  date: yup.string().required('Please, enter the recorded time'),
  amount: yup
    .number()
    .min(10, 'Amount of water must be greater than 10 ml')
    .max(2000, 'Amount of water must be less than 2000 ml')
    .typeError('Enter a valid amount of water in ml')
    .required('Value is required'),
});

export const WaterForm = ({ subtitle }) => {
  const dispatch = useDispatch();

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
      date: getCurrentTime(),
      amount: 50,
    },
  });

  const submitForm = (data) => {
    const time = data.date;

    const unixTime = convertTimeToUnix(time);

    const dataToSend = {
      amount: data.amount,
      date: unixTime,
    };

    const response = dispatch(addWater(dataToSend));

    console.log(response);
  };

  const subtract = () => {
    const currentValue = getValues('amount');
    setValue('amount', currentValue - 50);
  };

  const add = () => {
    const currentValue = getValues('amount');
    setValue('amount', currentValue + 50);
  };

  return (
    <form className={css.formWrapper} onSubmit={handleSubmit(submitForm)}>
      <p className={css.subtitle}>{subtitle}</p>
      <span className={css.amountTitle}>Amount of water:</span>
      <div className={css.amountWrapper}>
        <button
          className={css.amountButton}
          onClick={subtract}
          type="button"
          disabled={getValues('amount') === 0 ? true : false}
        >
          <IconMinus className={css.icon} />
        </button>

        <span className={css.amountValue}>{`${watch('amount')} ml`}</span>

        <button
          className={css.amountButton}
          onClick={add}
          type="button"
          disabled={getValues('amount') === 5000 ? true : false}
        >
          <IconPlus className={css.icon} />
        </button>
      </div>

      <div className={css.fieldsWrapper}>
        <label className={css.timeLabel} htmlFor="date">
          Recording time:
        </label>
        <input
          {...register('date')}
          className={css.input}
          type="time"
          name="date"
          id="date"
        />
        {errors.date && (
          <span className={css.validationError}>{errors.date.message}</span>
        )}

        <label className={css.valueLabel} htmlFor="value">
          Enter the value of the water used:
        </label>
        <input
          {...register('amount')}
          className={css.input}
          type="number"
          name="value"
          id="value"
          onChange={(e) => setValue('amount', Number(e.target.value))}
        />
        {errors.amount && (
          <span className={css.validationError}>{errors.amount.message}</span>
        )}
      </div>
      <button className={css.submitButton} type="submit">
        Save
      </button>
    </form>
  );
};
