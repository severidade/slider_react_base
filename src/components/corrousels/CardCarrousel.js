import { Slider, Slide } from '../slider/Index'
import Cards from '../../data/card_content'
import './CardCarrousel.css';

export default function CardCarrousel() {
  const settings = {
    spaceBetween: 0,
    slidesPerView: 1,
    navigation: true,
    effect: "fade",
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      clickable: true,
    }
    // spaceBetween: 0,
    // slidesPerView: Products.length < 3 ? Products.length : 3,
    // navigation: Products.length >= 3, //retorna true
    // draggable: Products.length >= 3,
    // loop: Products.length >= 3,
    // pagination: {
    //   clickable: true,
    // }
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

