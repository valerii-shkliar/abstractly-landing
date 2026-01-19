import style from './Footer.module.scss';
import dataContent from '../../../constants/dataContent';
import clsx from 'clsx';
import { generateImgAlt } from '../../../utilities/generateImgAlt';
// import generateImgAlt from '../../../constants/bundlePrimaryIcons';

const { header } = dataContent;
const { footer } = dataContent;
const socials = Object.values(
  import.meta.glob('/src/assets/images/socials/*.svg', {
    import: 'default',
    eager: true,
    query: '?react',
  }),
);

function Footer() {
  return (
    <footer className={style.footer}>
      <ul className={style.navList}>
        {header.navList.map((navItem, i) => {
          if (i === 0) return null;
          return (
            <li key={i}>
              <a className={style.navItem}>{navItem}</a>
            </li>
          );
        })}
      </ul>
      <div className={style.socialsContainer}>
        {socials.map((Social, i) => (
          <a
            className={style.socialItem}
            key={i}
            title={Social.name.replace('Svg', '')}
            href="#"
            target="_blank"
          >
            <Social className={style.icon} />
          </a>
        ))}
      </div>
      <p className={style.copyright}>{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
