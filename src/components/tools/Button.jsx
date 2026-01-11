import clsx from 'clsx';
import style from './Button.module.scss';

function Button({ kind, className, isDisabled, href, children }) {
  const btnCustomClass = clsx(
    style.btn,
    className,
    kind === 'primary' && style.primary,
    kind === 'secondary' && style.secondary
  );

  return (
    <button className={btnCustomClass} href={href} disabled={isDisabled}>
      {children}
    </button>
  );
}

export default Button;
