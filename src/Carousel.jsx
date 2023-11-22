import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Carrossel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="./src/assets/imagemScroll1.webp" alt="Imagem 1" />
      </div>
      <div>
        <img src="./src/assets/imagemScroll2.webp" alt="Imagem 2" />
      </div>
      <div>
        <img src="./src/assets/imagemScroll3.webp" alt="Imagem 3" />
      </div>
    </Carousel>
  );
};

export default Carrossel;
