import style from './Footer.module.scss';
import dataContent from '../../../constants/dataContent';

const { header } = dataContent;
const { footer } = dataContent;

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
        {footer.socials.map((social, i) => (
          <a className={style.socialItem} key={i} title={social.title} href="#" target="_blank">
            <img src={social.href} alt={social.title} />
          </a>
        ))}
      </div>
      <p className={style.copyright}>{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
