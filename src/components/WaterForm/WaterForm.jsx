import { useState } from 'react';
import { useForm } from 'react-hook-form';

import css from './WaterForm.module.css';

import { IconPlus } from '../../components/Icons/IconPlus';
import { IconMinus } from '../Icons/IconMinus';
import { Button } from '../Button/Button';

export const WaterForm = () => {
  //зберігаємо час в стейт для відображення поточного часу в інпуті
  const [time, setTime] = useState(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();

    // Форматуємо для відображення у форматі hh:mm
    const formattedTime =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0');

    return formattedTime;
  });

  const [waterValue, setWaterValue] = useState(50);

  const { handleSubmit } = useForm({
    defaultValues: {},
  });

  const submitForm = (data) => {
    console.log(data);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleChangeWater = (e) => {
    setWaterValue(Number(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      <p className={css.subtitle}>Choose a value</p>

      <span className={css.amountTitle}>Amount of water:</span>

      <div className={css.amountWrapper}>
        <button
          className={css.amountButton}
          onClick={() => setWaterValue(waterValue - 50)}
          type="button"
          disabled={waterValue === 0 ? true : false}
        >
          <IconMinus className={css.icon} />
        </button>

        <span className={css.amountValue}>{`${waterValue} ml`}</span>

        <button
          className={css.amountButton}
          onClick={() => setWaterValue(waterValue + 50)}
          type="button"
        >
          <IconPlus className={css.icon} />
        </button>
      </div>

      <div className={css.fieldsWrapper}>
        <label className={css.timeLabel} htmlFor="time">
          Recording time:
        </label>
        <input
          className={css.input}
          onChange={(e) => handleChangeTime(e)}
          type="time"
          name="time"
          id="time"
          value={time}
        />

        <label className={css.valueLabel} htmlFor="value">
          Enter the value of the water used:
        </label>
        <input
          className={css.input}
          onChange={(e) => {
            handleChangeWater(e);
          }}
          type="number"
          name="value"
          id="value"
          value={waterValue}
        />
      </div>

      <Button type={'button'} text={'Save'} />
    </form>
  );
};
