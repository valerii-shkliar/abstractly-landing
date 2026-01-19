import style from './FrequentlyAsked.module.scss';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import ItemFAQ from '../../tools/ItemFAQ/ItemFAQ';
import Button from '../../tools/Button/Button.jsx';

const { frequentlyAskedSection } = dataContent;
const { header, listFAQ, support } = frequentlyAskedSection;

function FrequentlyAsked() {
  return (
    <section className={style.frequentlyAsked}>
      <SectionHeader title={header.title} text={header.text} />

      <dl className={style.accordionFAQ}>
        {listFAQ.map((FAQ, i) => (
          <ItemFAQ key={i} question={FAQ.question} answer={FAQ.answer} />
        ))}
      </dl>

      <div className={style.supportContainer}>
        <div className={style.content}>
          <h5 className={style.title}>{support.title}</h5>
          <p className={style.text}>
            Reach out to our{' '}
            <a className={style.link} href="#">
              customer support
            </a>{' '}
            team.
          </p>
        </div>
        <Button kind="primary" className={style.btn}>
          {support.btn}
        </Button>
      </div>
    </section>
  );
}

export default FrequentlyAsked;
