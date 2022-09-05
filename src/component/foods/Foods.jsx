import React from 'react';
import './foods.css';
import { Food } from '../';
import Button from '../General/Button';

function Foods(props) {
  const content = props.data?.map((el, i) => {
    return(
      <Food 
        add_food={props.add_food} 
        remove_food={props.remove_food}
        key={'id_' + el.name}
        name={el.name}
        price={el.price}
        image={el.image}
        order={el.order}
        index={i}
      />
    )
  });
  return (
    <div className='foods'>
      <div className="foods_header">
        <h1>Current order</h1>
        <Button btnName='Clear' btnType='danger' func={props.clear_all}/>
        {/* <button onClick={ ()=> props.clear_all() }>Clear All</button> */}
      </div>
      <div className="foods_main">
        { content }
      </div>
    </div>
  )
}

export default Foods