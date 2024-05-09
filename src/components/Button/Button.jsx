import css from './Button.module.css';

// Загальний компонент для перевикористання
// За потреби додайте або змініть дефолтні стилі в сss.module компоненту, в якому використовується ця кнопка
export const Button = ({ type, text }) => {
  return (
    <button className={css.defaultButton} type={type}>
      {text}
    </button>
  );
};
