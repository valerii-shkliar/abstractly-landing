import image from '../../../assets/images/pictures/finest-curated-abstracts-image.png';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import CommonSectionContent from '../../tools/CommonSectionContent/CommonSectionContent';
import style from './GetTheFinestCurated.module.scss';
import PeculiarityItem from '../../tools/PeculiarityItem/PeculiarityItem';

const { getTheFinestCuratedAbstractsSection } = dataContent;
const { header, peculiarities, mainImage, text } = getTheFinestCuratedAbstractsSection;

function GetTheFinestCurated() {
  return (
    <section className={style.getTheFinestCurated}>
      <div className={style.contentContainer}>
        <h2 className={style.title}>{header.title}</h2>

        <div className={style.peculiaritiesContainer}>
          {peculiarities.map((peculiarity, i) => (
            <PeculiarityItem key={i} text={peculiarity.text} />
          ))}
        </div>
        <p className={style.text}>{text}</p>
      </div>
      <div className={style.pictureContainer}>
        <img src={image} alt={mainImage} className={style.picture} loading="lazy" />
      </div>
    </section>
  );
}

export default GetTheFinestCurated;
