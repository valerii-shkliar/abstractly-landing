import clsx from 'clsx';
import style from './FeatureCard.module.scss';
import primaryIcons from '../../utilities/bundlePrimaryIcons';

function FeatureCard({ icon, title, text, className }) {
  const customClass = clsx(style.featureCard, className || '');
  const PrimaryIcon = primaryIcons[icon];

  return (
    <article className={customClass}>
      <PrimaryIcon className={style.icon} />
      <div className={style.contentContainer}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.text}>{text}</p>
      </div>
    </article>
  );
}

export default FeatureCard;
