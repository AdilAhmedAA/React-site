import React from 'react';
import { Link } from 'react-router-dom';

function FeaturesCardItem(props) {
  return (
    <>
      <li className='cards__item' id={props.id}>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap'>
            <img
              className='cards__item__img'
              alt='Travel Image'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h2 className='card__item__title' >{props.label}</h2>
            <h5 className='cards__item__text'>{props.text}</h5>
            <Link><a className='cards__item__link-text'>{props.link}</a></Link>
          </div>
        </Link>
      </li>
    </>
  );
}

export default FeaturesCardItem;
