import clsx from 'clsx';
import { IconLogout } from '../Icons/IconLogout';
import { IconSettings } from '../Icons/IconSettings';
import css from './UserBarPopover.module.css';
import { forwardRef } from 'react';

// eslint-disable-next-line react/display-name
export const UserBarPopover = forwardRef(
  ({ openSettings, openLogout, isVisible }, ref) => {
    const handleOpenSettigns = () => {
      openSettings();
    };
    const handleOpenLogout = () => {
      openLogout();
    };
    return (
      <div
        ref={ref}
        className={clsx(css.userBarPopover__thumb, { visible: isVisible })}
      >
        <ul className={css.userBarPopover__list}>
          <li
            className={clsx(css.userBarPopover__item, css.dark)}
            onClick={handleOpenSettigns}
          >
            <IconSettings />
            <button className={css.userBarPopover__button}>Setting</button>
          </li>
          <li
            className={clsx(css.userBarPopover__item, css.translucent)}
            onClick={handleOpenLogout}
          >
            <IconLogout />
            <button className={css.userBarPopover__button}>Log out</button>
          </li>
        </ul>
      </div>
    );
  }
);
