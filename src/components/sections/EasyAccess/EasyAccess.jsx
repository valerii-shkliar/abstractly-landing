import style from './EasyAccess.module.scss';
import dataContent from '../../../constants/dataContent';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import FeatureCard from '../../tools/FeatureCard/FeatureCard';

const { easyAccessSection } = dataContent;
const { header, cards } = easyAccessSection;

function EasyAccess() {
  return (
    <section className={style.easyAccess}>
      <SectionHeader description={header.description} title={header.title} text={header.text} />
      <div className={style.cardsList}>
        {cards.map((card, i) => (
          <FeatureCard
            title={card.title}
            text={card.text}
            icon={card.icon}
            key={i}
            className={style.card}
          />
        ))}
      </div>
    </section>
  );
}

export default EasyAccess;
