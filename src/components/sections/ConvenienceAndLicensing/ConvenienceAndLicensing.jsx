import style from './ConvenienceAndLicensing.module.scss';
import Image from '../../../assets/images/pictures/convenience-and-licensing-image.png';
import Wrapper from '../../layouts/Wrapper';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import CommonSectionContent from '../../tools/CommonSectionContent/CommonSectionContent';

const { convenienceAndLicensingSection } = dataContent;
const { header, cards, mainImage } = convenienceAndLicensingSection;

function ConvenienceAndLicensing() {
  return (
    <section className={style.forDesigners}>
      <Wrapper className={style.wrapper}>
        <SectionHeader description={header.description} title={header.title} text={header.text} />
        <CommonSectionContent
          cardsList={cards}
          image={Image}
          alt={mainImage}
          className={style.sectionBody}
        />
      </Wrapper>
    </section>
  );
}

export default ConvenienceAndLicensing;
