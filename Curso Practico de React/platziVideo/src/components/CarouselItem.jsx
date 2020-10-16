import React from 'react';
import './CarouselItem.scss';
import playIcon from '../assets/play-icon.png';
import plusIcon from '../assets/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt='Skate' />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='Play' />
        <img src={plusIcon} alt='Plus' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>
        {`${year} ${contentRating} ${duration} minutos `}
      </p>
    </div>
  </div>
);

export default CarouselItem;
