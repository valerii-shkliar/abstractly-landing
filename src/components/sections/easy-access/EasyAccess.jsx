import style from './EasyAccess.module.scss';

import Wrapper from '../../layouts/Wrapper';
import dataContent from '../../../constants/dataContent';
import SectionHeader from '../../tools/SectionHeader';
import FeatureCard from '../../tools/FeatureCard';

const { easyAccessSection } = dataContent;
const { header, cards } = easyAccessSection;

function EasyAccess() {
  return (
    <section className={style.easyAccess}>
      <Wrapper className={style.wrapper}>
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
      </Wrapper>
    </section>
  );
}

export default EasyAccess;
