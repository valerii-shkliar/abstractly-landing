const fileNameRegExp = /([^/]+)(?=\.svg$)/;
const iconsBase = import.meta.glob('/src/assets/images/icons/*.svg', {
  eager: true,
  query: '?react',
  import: 'default',
});

const primaryIcons = Object.entries(iconsBase).reduce((acc, [key, value]) => {
  const newKey = key.match(fileNameRegExp)[0];

  acc[newKey] = value;
  return acc;
}, {});

export default primaryIcons;
