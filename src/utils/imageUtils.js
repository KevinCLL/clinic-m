const allImages = import.meta.glob('@/assets/images/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

export function getImageWithVariants(imagePath) {
  if (!imagePath || typeof imagePath !== 'string') {
    return { desktop: '', mobile: '' };
  }

  if (imagePath.startsWith('/assets/') || imagePath.startsWith('http')) {
    return { desktop: imagePath, mobile: imagePath };
  }

  const fileName = imagePath.split('/').pop();
  const [name, ext] = fileName.split(/\.(?=[^.]+$)/);

  const desktopKey = `/src/assets/images/${fileName}`;
  const mobileKey = `/src/assets/images/${name}-mobile.${ext}`;

  return {
    desktop: allImages[desktopKey] || imagePath,
    mobile: allImages[mobileKey] || allImages[desktopKey] || imagePath
  };
}
