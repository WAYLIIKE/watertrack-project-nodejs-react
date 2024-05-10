import css from './UserSettingsModal.module.css';
export const UserSettingsModal = () => {
  return (
    <div>
      <h2 className={css.title}>Setting</h2>

      <div className={css.avatarWrapper}>
        {/* <img className={css.avatar} src="" alt="" />
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
    </div>
  );
};
