import css from './UserBar.module.css';
import { IconChevronDown } from '../Icons/IconChevronDown';
import { UserBarPopover } from '../UserBarPopover/UserBarPopover';
import { useEffect, useRef, useState } from 'react';

export const UserBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const popoverRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopover = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  const closePopover = (e) => {
    if (
      e.key === 'Escape' ||
      (popoverRef.current &&
        !popoverRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target))
    )
      setIsVisible(false);
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
        <p className={css.userBar__name}>Nadia</p>
        {/* <img className={css.userPanel__avatar} src="" alt="Avatar" />
      тимчасово замість фото буде 
      дів нижче*/}
        <div className={css.userBar__avatar}></div>
        <IconChevronDown />
      </button>
      {isVisible && <UserBarPopover ref={popoverRef} />}
    </div>
  );
};
