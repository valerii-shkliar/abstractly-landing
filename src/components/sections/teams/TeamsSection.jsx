import dataContent from './../../../constants/dataContent';
import style from './TeamsSection.module.scss';
import BrandLogo from './BrandLogo';
import Wrapper from '../../layouts/Wrapper';
import Marquee from 'react-fast-marquee';

const { teamsSection } = dataContent;
const images = Object.values(
  import.meta.glob('/src/assets/images/brands/*.svg', { import: 'default', eager: true })
);

function TeamsSection() {
  return (
    <section className={style.teamsSection}>
      <Wrapper className={style.wrapper}>
        <p className={style.description}>{teamsSection.description}</p>
        <Marquee speed={30} play={true}>
          <ul className={style.brandLogoList}>
            {images.map((img, i) => (
              <BrandLogo url={img} key={i} />
            ))}
          </ul>
        </Marquee>
      </Wrapper>
    </section>
  );
}

export default TeamsSection;
