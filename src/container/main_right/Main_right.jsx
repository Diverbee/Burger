import React from 'react';
import './main_right.css';
import { Price_label, Total_price, Foods } from '../../component';

function Main_right(props) {
  return (
    <div className='main_right'>
        <Foods
          data={props.data}
          add_food={props.add_food}
          remove_food={props.remove_food}
          clear_all={ props.clear_all }
        />
      <div className="main_right__price">
        <Price_label
          total={props.total}
        />
      </div>
    </div>
  )
}

export default Main_right