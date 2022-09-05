import React from 'react';
import './price_label.css';

function Price_label(props) {
  return (
    <div className='price_label-container'>
      <div className="price_label-sub_total price_labe-item">
        <h2>Subtotal:</h2>
        <p>$ {props.total.totalPrice}</p>
      </div>
      <div className="price_label-discount price_labe-item">
        <h2>Discount <span>({props.total.discount}%):</span></h2>
        <p>- $ {props.total.totaldiscount}</p>
      </div>
      <div className="price_label-total price_labe-item">
        <h2>Total:</h2>
        <p>$ {props.total.total}</p>
      </div>
    </div>
  )
}

export default Price_label