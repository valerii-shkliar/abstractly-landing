import clsx from 'clsx';
import style from './Button.module.scss';

function Button({ kind, className, isDisabled, href, children }) {
  let classNameKind = '';
  if (kind === 'primary') {
    classNameKind = style.primary;
  }
  if (kind === 'secondary') {
    classNameKind = style.secondary;
  }

  const customClass = clsx(style.btn, classNameKind, className || '');

  return (
    <a>
      <button className={customClass} href={href} disabled={isDisabled}>
        {children}
      </button>
    </a>
  );
}

export default Button;
