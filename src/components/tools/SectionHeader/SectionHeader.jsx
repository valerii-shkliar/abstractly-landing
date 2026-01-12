import clsx from 'clsx';
import style from './SectionHeader.module.scss';

function SectionHeader({ description, title, text, children }) {
  return (
    <div className={style.sectionHeader}>
      {description && <p className={style.description}>{description}</p>}
      <h2 className={style.title}>{title}</h2>
      {text && <p className={style.text}>{text}</p>}
      {children}
    </div>
  );
}

export default SectionHeader;
