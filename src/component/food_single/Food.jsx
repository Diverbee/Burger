import React, { useState } from 'react';
import './food.css';

function Food( props ) {
  const total = props.price * props.order;
  return (
    <div className='foods__food' style={{display: props.order !== 0 ? 'flex' : 'none' }}>
      <img src={ props.image } alt="food image" />

      <h3>{ props.name }</h3>

      <button onClick={ ()=> props.remove_food(props.index) } > - </button>

      <p className='foods__food-order'>{ props.order }</p>

      <button onClick={ ()=> props.add_food(props.index) }> + </button>

      <p className='foods__food-price'>$ { total }</p>
    </div>
  )
}

export default Food