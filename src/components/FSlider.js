import React from 'react'
import Slider from "react-slick";
import './FSlider.css'
import Testimonial_cards from './Testimonial-cards';

function FSlider() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='Testimonials'>
        <div className="container">
          <div className="head">
            <h3>Testimonials</h3>
            <h2>Why People Love Us</h2>
          </div>
          <div className="FSlider">
          <Slider {...settings}>
            <div>
              <Testimonial_cards 
              message = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque.'
              image = 'images/Avatar.png'
              name = 'Albert Flores'
              role = 'Marketing Coordinator'
              />
            </div>
            <div>
              <Testimonial_cards 
              message = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque.'
              image = 'images/Avatar.png'
              name = 'Albert Flores'
              role = 'Marketing Coordinator'
              />
            </div><div>
              <Testimonial_cards 
              message = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque.'
              image = 'images/Avatar.png'
              name = 'Albert Flores'
              role = 'Marketing Coordinator'
              />
            </div><div>
              <Testimonial_cards 
              message = 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque.'
              image = 'images/Avatar.png'
              name = 'Albert Flores'
              role = 'Marketing Coordinator'
              />
            </div>
          </Slider>
          </div>
        </div>
      </div>
    );
  }


export default FSlider
