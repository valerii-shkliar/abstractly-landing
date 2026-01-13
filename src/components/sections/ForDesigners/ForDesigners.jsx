import Image from '../../../assets/images/pictures/for-designers-image.png';
import Wrapper from '../../layouts/Wrapper';
import SectionHeader from '../../tools/SectionHeader/SectionHeader';
import dataContent from '../../../constants/dataContent';
import CommonSectionContent from '../../tools/CommonSectionContent/CommonSectionContent';

const { forDesignersSection } = dataContent;
const { header, cards, mainImage } = forDesignersSection;

function ForDesigners() {
  return (
    <section>
      <SectionHeader description={header.description} title={header.title} text={header.text} />
      <CommonSectionContent cardsList={cards} image={Image} alt={mainImage} />
    </section>
  );
}

export default ForDesigners;
