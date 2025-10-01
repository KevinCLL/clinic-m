const images = import.meta.glob('@/assets/images/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

const getImage = (name) => {
  const key = `/src/assets/images/${name}`;
  return images[key] || '';
};

export const plantImages = {
  ramasFondoDerecha: getImage('ramas_fondo_derecha.png'),
  ramasFondoIzquierda: getImage('ramas_fondo_izquierda.png'),
  ramasFondoDerecha2: getImage('ramas_fondo_derecha_2.png'),
  ramasFondoIzquierda2: getImage('ramas_fondo_izquierda_2.png'),
  ramasFondoAbajo: getImage('ramas_fondo_abajo.png'),
  ramasFondoAbajo2: getImage('ramas_fondo_abajo_2.png')
};
