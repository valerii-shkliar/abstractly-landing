import style from './FitForAll.module.scss';
import Wrapper from '../../layouts/Wrapper';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import Button from '../../tools/Button/Button';
import { useState } from 'react';
import clsx from 'clsx';
import PricePlanCard from '../../tools/PricePlanCard/PricePlanCard';
const { fitForAllSection } = dataContent;
const { header, cards } = fitForAllSection;

function FitForAll() {
  const [activeBtn, setActiveBtn] = useState('Monthly');
  const customBtnClass = clsx(style.btn, style.active);

  function handleButtonClick(e) {
    const sortedType = e.target.textContent;

    if (sortedType === activeBtn) return;
    if (sortedType === 'Monthly') setActiveBtn('Monthly');
    if (sortedType === 'Annually') setActiveBtn('Annually');
  }

  return (
    <section className={style.fitForAll}>
      <Wrapper className={style.wrapper}>
        <SectionHeader description={header.description} title={header.title} text={header.text}>
          <div className={style.btnContainer}>
            <Button
              className={activeBtn === 'Monthly' ? customBtnClass : style.btn}
              href="#"
              handleButtonClick={handleButtonClick}
            >
              {header.btns.monthly}
            </Button>
            <Button
              className={activeBtn === 'Annually' ? customBtnClass : style.btn}
              href="#"
              handleButtonClick={handleButtonClick}
            >
              {header.btns.annually}
            </Button>
          </div>
        </SectionHeader>
        <div className={style.cardsList}>
          {cards.map((card, i) => (
            <PricePlanCard card={card} key={i} />
          ))}
        </div>
      </Wrapper>
    </section>
  );
}

export default FitForAll;
