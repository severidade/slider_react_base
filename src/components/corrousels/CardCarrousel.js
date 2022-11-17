import { Slider, Slide } from '../slider/Index'
import Cards from '../../data/card_content'
import './CardCarrousel.css';

export default function CardCarrousel() {
  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    loop: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 2000,
    },
    effect: "fade",
    // o efeito "fade" só funciona para slidesPerView = 1
  }
  return(
    <Slider settings={settings}>
        {Cards.map((card) => (
          <Slide key={card.id}>
            <picture className='picture_bg'>
              <img src={ card.foto } alt={`fundo ${card.product} `} />
            </picture>
            <h1> { card.product } </h1>
            <p> { card.product_line}</p>
            <p> { card.highlight_info }</p>
            <p> { card.product_info }</p>
            {/* <Card card={card} /> */}
          </Slide>
        ))}
    </Slider>
  )
}

