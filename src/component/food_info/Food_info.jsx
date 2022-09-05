import React from 'react';
import './food_info.css';

function Food_info(props) {
  return (
    <div className='food_info' onClick={() =>{props.reveal(props.index)}}>
      <h2>{ props.name }</h2>
      <div className="food_info-container">
        <div className="food_info-texts">
          <p className='food_info-stock'>stock: <span>{ props.stock }</span></p>
          <p className='food_info-weight'><span>weight: { props.weight }g</span></p>
          <p className='food_info-price'>Price:<span>{ props.price } $</span></p>
        </div>
        <img src={ props.image } alt="food_image" />
      </div>
    </div>
  )
}

export default Food_info