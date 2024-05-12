import css from './UserSettingsForm.module.css';

export const UserSettingsForm = () => {
  return (
    <form className={css.wrapper}>
      <div className={css.avatarWrapper}>
        {/* <img className={css.avatar} src="" alt="Avatar" />
      тимчасово замість фото буде 
      дів нижче*/}
        <div className={css.avatar}></div>

        <input
          className={css.hiddenFileInput}
          type="file"
          name="file"
          id="file"
          placeholder={'Upload a photo'}
        />
        <label htmlFor="file" className={css.fileLabel}>
          Upload a photo
        </label>
      </div>

      <div className={css.settingsWrapper}>
        <div className={css.leftDesktopWrapper}>
          <div className={css.genderWrapper}>
            <p className={css.subtitle}>Your gender identity</p>
            <input
              className={css.hiddenRadioInput}
              type="radio"
              name="gender"
              id="woman"
              value="woman"
            />
            <label className={`${css.text} ${css.genderLabel}`} htmlFor="woman">
              Woman
            </label>

            <input
              className={css.hiddenRadioInput}
              type="radio"
              name="gender"
              id="man"
              value="man"
            />
            <label className={`${css.text} ${css.genderLabel}`} htmlFor="man">
              Man
            </label>
          </div>
          <div className={css.infoWrapper}>
            <label className={css.subtitle} htmlFor="name">
              Your name
            </label>
            <input className={css.input} type="text" name="name" id="name" />

            <label className={css.subtitle} htmlFor="email">
              Email
            </label>
            <input className={css.input} type="text" name="email" id="email" />
          </div>
          <div className={css.normaWrapper}>
            <p className={css.subtitle}>My daily norma</p>

            <div className={css.formulaWrapper}>
              <div className={css.formulaSubwrapper}>
                <p className={css.text}>For woman:</p>
                <span className={`${css.text} ${css.normaFormula}`}>
                  V=(M*0,03) + (T*0,4)
                </span>
              </div>

              <div className={css.formulaSubwrapper}>
                <p className={css.text}>For man:</p>
                <span className={`${css.text} ${css.normaFormula}`}>
                  V=(M*0,04) + (T*0,6)
                </span>
              </div>
            </div>

            <p className={css.normaTextArea}>
              <span className={css.normaAsterisk}>*</span> V is the volume of
              the water norm in liters per day, M is your body weight, T is the
              time of active sports, or another type of activity commensurate in
              terms of loads (in the absence of these, you must set 0)
            </p>

            <span className={`${css.text} ${css.footnote}`}>
              Active time in hours
            </span>
          </div>
        </div>

        <div className={css.rightDesktopWrapper}>
          <div className={css.metricsWrapper}>
            <label className={css.text} htmlFor="weight">
              Your weight in kilograms:
            </label>
            <input
              className={css.input}
              type="number"
              name="weight"
              id="weight"
            />

            <label className={css.text} htmlFor="time">
              The time of active participation in sports:
            </label>
            <input className={css.input} type="number" name="time" id="time" />
          </div>

          <div className={css.waterAmountWrapper}>
            <div className={css.amountField}>
              <p className={css.text}>
                The required amount of water in liters per day:
              </p>
              {/* Рекомендована кількість за підрахунком по формулі
          Тимчасово захаркодив */}
              <span className={css.amount}>1.8 L</span>
            </div>
            <label className={css.subtitle} htmlFor="amount">
              Write down how much water you will drink:
            </label>
            <input
              className={css.input}
              type="number"
              name="amount"
              id="amount"
            />
          </div>
        </div>
      </div>
      <button className={css.submitButton} type="submit">
        Save
      </button>
    </form>
  );
};
