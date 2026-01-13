import style from './CommonSectionContent.module.scss';
import FeatureCard from '../../tools/FeatureCard/FeatureCard';
import clsx from 'clsx';

function CommonSectionContent({ cardsList, image, alt, className }) {
  const customClass = clsx(style.sectionBody, className);

  return (
    <div className={customClass}>
      <div className={style.cardsList}>
        {cardsList.map((card, i) => (
          <FeatureCard
            title={card.title}
            text={card.text}
            icon={card.icon}
            key={i}
            className={style.card}
            row={true}
          />
        ))}
      </div>
      <div className={style.pictureContainer}>
        <img src={image} alt={alt} className={style.picture} loading="lazy" />
      </div>
    </div>
  );
}

export default CommonSectionContent;
