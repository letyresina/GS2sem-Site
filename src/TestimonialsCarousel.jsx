import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Resenhas.scss'

const TestimonialsCarousel = () => {
  const testimonials = [
    { text: 'O MyHealth simplificou minha vida! Com a Julia, agendar consultas ficou fácil, e o monitoramento constante com o ESP32 me deixa tranquila. Adorei a abordagem focada na saúde mental e as informações educativas. Uma revolução na minha jornada de cuidados!', author: 'Ana Silva' },
    { text: 'Excelente iniciativa! A Julia tornou o agendamento de consultas e exames mais eficiente, enquanto o ESP32 monitora meus sinais vitais. O MyHealth realmente se preocupa com a personalização do atendimento. Recomendo a todos!', author: 'Carlos Mendes' },
    { text: '"Estou impressionada com o MyHealth! A Julia é intuitiva e facilitou meu acesso a profissionais de saúde. O ESP32 traz um novo nível de monitoramento. O site é informativo e fácil de usar. Uma solução completa e inovadora!', author: 'Lúcia Oliveira' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerPadding: '0',
  };

  return (
    <div id="resenhas">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="carousel-slide">
            <h3>{`"${testimonial.text}"`}</h3>
            <p>{testimonial.author}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsCarousel;
