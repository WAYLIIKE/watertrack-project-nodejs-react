import { useForm } from 'react-hook-form';

import css from './WaterForm.module.css';

import { IconPlus } from '../../components/Icons/IconPlus';
import { IconMinus } from '../Icons/IconMinus';

import { getCurrentTime } from '../../helpers/getCurrentTime';

export const WaterForm = () => {
  const { register, setValue, getValues, watch, handleSubmit } = useForm({
    defaultValues: {
      time: getCurrentTime(),
      waterValue: 50,
    },
  });

  const submitForm = (data) => {
    console.log(data);
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
      </div>
      <button className={css.submitButton} type="submit">
        Save
      </button>
    </form>
  );
};
