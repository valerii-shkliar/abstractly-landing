import clsx from 'clsx';
import style from './Button.module.scss';

function Button({ kind, classList, isDisabled, href, children }) {
  const { btn: btnClassName, btnWrapper: btnWrapperClassName } = classList;
  let classNameKind = '';

  if (kind === 'primary') {
    classNameKind = style.primary;
  }
  if (kind === 'secondary') {
    classNameKind = style.secondary;
  }

  const btnCustomClass = clsx(style.btn, classNameKind, btnClassName || '');
  const btnWrapperCustomClass = clsx(style.btnWrapper, btnWrapperClassName || '');

  return (
    <a className={btnWrapperCustomClass}>
      <button className={btnCustomClass} href={href} disabled={isDisabled}>
        {children}
      </button>
    </a>
  );
}

export default Button;
