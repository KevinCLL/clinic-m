const allImages = import.meta.glob('@/assets/images/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

const imageMap = {};
const reverseMap = {};

Object.keys(allImages).forEach(key => {
  const fileName = key.split('/').pop();
  const hashPath = allImages[key];
  imageMap[fileName] = hashPath;
  reverseMap[hashPath] = fileName;
});

export function getImageWithVariants(imagePath) {
  if (!imagePath || typeof imagePath !== 'string') {
    return { desktop: '', mobile: '' };
  }

  let fileName;

  if (imagePath.startsWith('/assets/')) {
    fileName = reverseMap[imagePath];
    if (!fileName) {
      return { desktop: imagePath, mobile: imagePath };
    }
  } else {
    fileName = imagePath.split('/').pop();
  }

  const [name, ext] = fileName.split(/\.(?=[^.]+$)/);
  const mobileFileName = `${name}-mobile.${ext}`;

  const desktopPath = imageMap[fileName] || imagePath;
  const mobilePath = imageMap[mobileFileName] || desktopPath;

  return {
    desktop: desktopPath,
    mobile: mobilePath
  };
}
