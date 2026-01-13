import clsx from 'clsx';
import style from './ItemFAQ.module.scss';
import { useState } from 'react';

function ItemFAQ({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const customClass = clsx(style.itemFAQ, isOpen && style.open);

  function handleQuestionClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className={customClass}>
      <dt className={style.question} onClick={handleQuestionClick}>
        {question}
      </dt>
      <dd className={style.answer}>{answer}</dd>
    </div>
  );
}

export default ItemFAQ;
