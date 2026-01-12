import Icon from '../../../assets/images/icons/done.svg?react';
import style from './PeculiarityItem.module.scss';

function PeculiarityItem({ text }) {
  return (
    <div className={style.container}>
      <Icon className={style.icon} />
      <p className={style.text}>{text}</p>
    </div>
  );
}

export default PeculiarityItem;
