import style from './BrandLogo.module.scss';
const fileNameRegExp = /([^/]+)(?=\.svg$)/;

function BrandLogo({ url }) {
  const altField = url.match(fileNameRegExp)[0];

  return (
    <li>
      <img className={style.brandLogo} src={url} alt={altField}></img>
    </li>
  );
}

export default BrandLogo;
