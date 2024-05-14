import clsx from 'clsx';
import { IconLogout } from '../Icons/IconLogout';
import { IconSettings } from '../Icons/IconSettings';
import css from './UserBarPopover.module.css';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const UserBarPopover = forwardRef((_, ref) => {
  return (
    <div ref={ref} className={css.userBarPopover__thumb}>
      <ul className={css.userBarPopover__list}>
        <li className={clsx(css.userBarPopover__item, css.dark)}>
          <IconSettings />
          <button className={css.userBarPopover__button}>Setting</button>
        </li>
        <li className={clsx(css.userBarPopover__item, css.translucent)}>
          <IconLogout />
          <button className={css.userBarPopover__button}>Log out</button>
        </li>
      </ul>
    </div>
  );
});
