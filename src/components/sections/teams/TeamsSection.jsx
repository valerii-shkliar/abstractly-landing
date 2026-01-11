import dataContent from '../../../constants/dataContent';
import style from './TeamsSection.module.scss';
import Marquee from 'react-fast-marquee';
const fileNameRegExp = /([^/]+)(?=\.svg$)/;

const { teamsSection } = dataContent;
const images = Object.values(
  import.meta.glob('/src/assets/images/brands/*.svg', { import: 'default', eager: true })
);

function TeamsSection() {
  return (
    <section className={style.teamsSection}>
      <p className={style.description}>{teamsSection.description}</p>
      <Marquee speed={30} play={true} className={style.marquee}>
        <div className={style.brandLogoList}>
          {images.map((path, i) => (
            <div className={style.brandLogoContainer} key={i}>
              <img className={style.brandLogo} src={path} alt={generateImgAlt(path)} />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}

function generateImgAlt(url) {
  return url.match(fileNameRegExp)[0];
}

export default TeamsSection;
