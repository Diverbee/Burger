import React from 'react';
import './main_left.css';
import { Food_info } from '../../component';

function Main_left(props) {
  const food_content = props.data?.map( (el, i) =>{
    return(
      <Food_info
        key={'id ' + el.name + i}
        name={el.name}
        price={el.price}
        image={el.image}
        weight={el.weight}
        stock={el.stock}
        index={i}
        reveal={ props.reveal }
      />
    )
  })
  return (
    <div className='main_left'>
      { food_content } 
    </div>
  )
}

export default Main_left