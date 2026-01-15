import logo from '/logo.svg?url';
import style from './Header.module.scss';
import dataContent from '../../../constants/dataContent';
import Button from '../../tools/Button/Button';
import HamburgerButton from '../../../assets/images/icons/hamburger-button.svg?react';
import CloseButton from '../../../assets/images/icons/close-button.svg?react';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const { header } = dataContent;

function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const customClass = clsx(style.menuContainer, isOpenMenu && style.open);

  useEffect(() => {
    document.body.style.overflow = isOpenMenu ? 'hidden' : 'auto';
  }, [isOpenMenu]);

  function handleBurgerClick() {
    setIsOpenMenu(!isOpenMenu);
  }

  function handleCloseClick() {
    if (isOpenMenu) {
      setIsOpenMenu(!isOpenMenu);
    }
  }

  return (
    <header className={style.header}>
      <a href="#" className={style.logoContainer}>
        <img className={style.logoImg} width={32} height={32} src={logo} alt="logo" />
        <span className={style.logoTitle}>{header.title}</span>
      </a>
      <div className={customClass}>
        <Button kind="close" handleButtonClick={handleCloseClick} className={style.closeBtn}>
          <CloseButton className={style.closeIcon} />
        </Button>
        <nav className={style.nav}>
          <ul className={style.navList}>
            {header.navList.map((navItem, i) => (
              <li key={i}>
                <a className={style.navItem}>{navItem}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={style.btnsContainer}>
          <Button kind="secondary">{header.btns.secondaryBtn}</Button>
          <Button kind="primary">{header.btns.primaryBtn}</Button>
        </div>
      </div>
      <Button kind="burger" handleButtonClick={handleBurgerClick} className={style.burgerBtn}>
        <HamburgerButton className={style.burgerIcon} />
      </Button>
    </header>
  );
}

export default Header;
