import React from 'react';
import style from './style.module.css'
function Button(props) {
  console.log(" btn name ----------->", props.btnType)
  return (<button className={`${style.btn} ${style[props.btnType]}`} onClick={() => props.clear_all()}>{props.btnName}</button>);
}

export default Button;