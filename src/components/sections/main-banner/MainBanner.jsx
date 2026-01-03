import mainBannerImage from '../../../assets/images/pictures/main-banner-image.png';
import style from './MainBanner.module.scss';

import Wrapper from '../../layouts/Wrapper';
import dataContent from '../../../constants/dataContent';
import Button from '../../tools/Button';

const { mainBanner } = dataContent;

function MainBanner() {
  return (
    <section className={style.mainBanner}>
      <Wrapper className={style.wrapper}>
        <div className={style.contentContainer}>
          <h1 className={style.title}>{mainBanner.title}</h1>
          <p className={style.text}>{mainBanner.text}</p>
          <div className={style.btnContainer}>
            <Button
              classList={{ btn: style.btn, btnWrapper: style.btnWrapper }}
              kind="secondary"
              href="#"
            >
              {mainBanner.btns.secondaryBtn}
            </Button>
            <Button
              classList={{ btn: style.btn, btnWrapper: style.btnWrapper }}
              kind="primary"
              href="#"
            >
              {mainBanner.btns.primaryBtn}
            </Button>
          </div>
        </div>
        <div className={style.pictureContainer}>
          <img
            src={mainBannerImage}
            alt="main-banner-image"
            width={696}
            height={526}
            className={style.picture}
            loading="lazy"
          />
        </div>
      </Wrapper>
    </section>
  );
}

export default MainBanner;
