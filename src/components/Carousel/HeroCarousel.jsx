import { Splide, SplideSlide } from '@splidejs/react-splide'
import './Carousel.css'

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      title: 'Educação, Entretenimento e Muito Mais',
      rating: '9.8',
      text: 'Descobre uma plataforma onde podes aprender, divertir-te e explorar conteúdos únicos para todas as fases da tua vida. Tudo num Só Lugar',
      categories: ['Cursos', 'Palestras', 'Workshops'],
      bg: '/stream/img/bg/bg-1.png',
    },
    {
      id: 2,
      title: 'Aprenda e Ganhe',
      rating: '9.5',
      text: 'Experimente um ecossistema educacional inovador onde você pode estudar e ser recompensado.',
      categories: ['Educação', 'Recompensas'],
      bg: '/stream/img/bg/bg-1.png',
    },
  ]

  const options = {
    type: 'loop',
    perPage: 1,
    perMove: 1,
    drag: true,
    pagination: true,
    speed: 1200,
    gap: 0,
    arrows: true,
    focus: 0,
    keyboard: false,
  }

  return (
    <section id="hero" className="hero splide splide--hero">
      <Splide options={options}>
        {slides.map((slide) => (
          <SplideSlide key={slide.id}>
            <div className="hero__slide">
              <img src={slide.bg} alt="" className="hero__bg" />
              <div className="hero__content">
                <h2 className="hero__title">
                  {slide.title}
                  <sub className="gold">{slide.rating}</sub>
                </h2>
                <p className="hero__text">{slide.text}</p>
                <p className="hero__category">
                  {slide.categories.map((cat, index) => (
                    <a key={index} href="#">{cat}</a>
                  ))}
                </p>
                <div className="hero__hash" title="Velocidade da sua internet">
                  <i className="bi bi-reception-4" style={{ color: '#fff' }}></i>
                  <span id="net-speed-value">...</span>
                  <span id="net-speed-unit">Mbps</span>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default HeroCarousel

