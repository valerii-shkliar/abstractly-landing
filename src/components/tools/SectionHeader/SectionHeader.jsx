import clsx from 'clsx';
import style from './SectionHeader.module.scss';

function SectionHeader({
  description,
  title,
  text,
  children,
  classNameSectionHeader,
  classNameTitle,
  classNameText,
}) {
  const customSectionHeaderClass = clsx(style.sectionHeader, classNameSectionHeader);
  const customTitleClass = clsx(style.title, classNameTitle);
  const customTextClass = clsx(style.text, classNameText);

  return (
    <div className={customSectionHeaderClass}>
      {description && <p className={style.description}>{description}</p>}
      <h2 className={customTitleClass}>{title}</h2>
      {text && <p className={customTextClass}>{text}</p>}
      {children}
    </div>
  );
}

export default SectionHeader;
