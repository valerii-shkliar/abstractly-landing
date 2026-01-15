import clsx from 'clsx';
import style from './Button.module.scss';

function Button({
  kind = 'secondary',
  className,
  isDisabled,
  href = '#',
  children,
  handleButtonClick,
}) {
  const btnCustomClass = clsx(
    style.btn,
    className,
    kind === 'primary' && style.primary,
    kind === 'secondary' && style.secondary,
    kind === 'burger' && style.burger,
    kind === 'close' && style.close
  );

  return (
    <button
      className={btnCustomClass}
      href={href}
      disabled={isDisabled}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
