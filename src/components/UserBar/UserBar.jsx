import css from './UserBar.module.css';
import { IconChevronDown } from '../Icons/IconChevronDown';
import { IconChevronUp } from '../Icons/IconChevronUp';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';
import { useEffect, useRef, useState } from 'react';

export const UserBar = ({ openSettings, openLogout, user }) => {
  const [isPopoverVisible, setIsPopoverVisible] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setIsPopoverVisible((prevIsPopoverVisible) => !prevIsPopoverVisible);
  };

  const closePopover = (e) => {
    if (
      e.key === 'Escape' ||
      (popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target))
    )
      setIsPopoverVisible(false);
  };

  useEffect(() => {
    window.addEventListener('keydown', closePopover);
    window.addEventListener('mousedown', closePopover);
    return () => {
      window.removeEventListener('keydown', closePopover);
      window.removeEventListener('mousedown', closePopover);
    };
  }, []);

  return (
    <div className={css.userBar__thumb}>
      <button
        className={css.userBar__button}
        onClick={togglePopover}
        ref={buttonRef}
      >
        <p className={css.userBar__name}>{user.name}</p>
        <img
          className={css.userBar__avatar}
          src={user.avatarURL}
          alt="Avatar"
        />
        {isPopoverVisible ? (
          <IconChevronUp className={css.userBar__svg} />
        ) : (
          <IconChevronDown className={css.userBar__svg} />
        )}
      </button>
      {isPopoverVisible && (
        <UserBarPopover
          ref={popoverRef}
          openSettings={openSettings}
          openLogout={openLogout}
          isVisible={isPopoverVisible}
        />
      )}
    </div>
  );
};
