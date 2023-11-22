import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.scss'

const Carrossel = () => {
  return (
    <Carousel showThumbs={false}>
      <div>
        <img src="./src/assets/imagemSlide.png" alt="Imagem 1" />
      </div>
      <div>
        <img src="./src/assets/imagemSlide2.png" alt="Imagem 2" />
      </div>
      <div>
        <img src="./src/assets/imagemSlide3.png" alt="Imagem 3" />
      </div>
    </Carousel>
  );
};

export default Carrossel;
