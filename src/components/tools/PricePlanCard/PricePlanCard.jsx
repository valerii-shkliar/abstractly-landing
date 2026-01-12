import clsx from 'clsx';
import style from './PricePlanCard.module.scss';
import PeculiarityItem from '../PeculiarityItem/PeculiarityItem';
import Button from '../Button/Button';

function PricePlanCard({ card }) {
  const { title, description, price, peculiarities, btn, priority } = card;
  const customClass = clsx(style.pricePlanCard, priority && style.priority);

  return (
    <article className={customClass}>
      {priority && <p className={style.priorityTitle}>{priority}</p>}
      <div className={style.cardBody}>
        <div className={style.descriptionContainer}>
          <h4 className={style.title}>{title}</h4>
          <p className={style.description}>{description}</p>
        </div>
        <div className={style.priceContainer}>
          <span className={style.cost}>{price.cost}</span>
          <span className={style.period}>{price.period}</span>
          <p className={style.description}>{price.description}</p>
        </div>
        <div className={style.peculiaritiesContainer}>
          {peculiarities.map((peculiarity, i) => (
            <PeculiarityItem key={i} text={peculiarity.text} />
          ))}
        </div>
        <Button className={style.btn}>{btn}</Button>
      </div>
    </article>
  );
}

export default PricePlanCard;
