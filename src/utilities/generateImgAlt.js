const fileNameRegExp = /([^/]+)(?=\.svg$)/;

export function generateImgAlt(url) {
  return url.match(fileNameRegExp)[0];
}
