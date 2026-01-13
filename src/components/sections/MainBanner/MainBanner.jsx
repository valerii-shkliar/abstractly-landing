import mainBannerImage from '../../../assets/images/pictures/main-banner-image.png';
import style from './MainBanner.module.scss';
import dataContent from '../../../constants/dataContent';
import Button from '../../tools/Button/Button';

const { mainBanner } = dataContent;

function MainBanner() {
  return (
    <section className={style.mainBanner}>
      <div className={style.contentContainer}>
        <h1 className={style.title}>{mainBanner.title}</h1>
        <p className={style.text}>{mainBanner.text}</p>
        <div className={style.btnContainer}>
          <Button className={style.btn} kind="secondary" href="#">
            {mainBanner.btns.secondaryBtn}
          </Button>
          <Button className={style.btn} kind="primary" href="#">
            {mainBanner.btns.primaryBtn}
          </Button>
        </div>
      </div>
      <div className={style.pictureContainer}>
        <img
          src={mainBannerImage}
          alt="main-banner-image"
          className={style.picture}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default MainBanner;
