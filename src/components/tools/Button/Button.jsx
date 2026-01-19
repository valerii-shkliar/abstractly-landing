import clsx from 'clsx';
import style from './Button.module.scss';

function Button({
  kind = 'secondary',
  className,
  isDisabled,
  href,
  children,
  handleButtonClick,
  type = 'button',
}) {
  const btnCustomClass = clsx(
    style.btn,
    className,
    kind === 'primary' && style.primary,
    kind === 'secondary' && style.secondary
  );

  return (
    <button
      className={btnCustomClass}
      href={href}
      disabled={isDisabled}
      onClick={handleButtonClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
