import style from './Footer.module.scss';
import dataContent from '../../../constants/dataContent';
import facebookIcon from '../../../assets/images/socials/facebook.svg';
import githubIcon from '../../../assets/images/socials/github.svg';
import instagramIcon from '../../../assets/images/socials/instagram.svg';
import xIcon from '../../../assets/images/socials/x.svg';
import youtubeIcon from '../../../assets/images/socials/youtube.svg';

const { header } = dataContent;
const { footer } = dataContent;
const iconsList = {
  facebook: facebookIcon,
  github: githubIcon,
  instagram: instagramIcon,
  x: xIcon,
  youtube: youtubeIcon,
};

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
          <a
            className={style.socialItem}
            key={i}
            title={social.title}
            href={social.href}
            target="_blank"
          >
            <img src={iconsList[social.title]} alt={social.title} />
          </a>
        ))}
      </div>
      <p className={style.copyright}>{footer.copyright}</p>
    </footer>
  );
}

export default Footer;
