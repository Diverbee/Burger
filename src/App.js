import './App.css';
import { Main_left, Main_right } from './container';
import { useState } from 'react';
import { burger, pizza, steak } from './import-image'

function App() {

  
  const [Data, setData] = useState([
    {
      name: 'Pizza',
      price: 6,
      order: 0,
      stock: 100,
      image: pizza,
      weight: 150,
    },
    {
      name: 'Burger',
      price: 3,
      order: 0,
      stock: 100,
      image: burger,
      weight: 150,
    },
    {
      name: 'Steak',
      price: 14,
      order: 0,
      stock: 100,
      image: steak,
      weight: 150,
    },
  ]);

  const [Total, setTotal] = useState({
    totalPrice: 0,
    discount: 5,
    totaldiscount: 0,
    total: 0,
  });



  const discount_calc = () =>{
    let num = Total.totalPrice * (Total.discount / 100);
    let rounded = Math.round(num * 100) / 100;
    Total.totaldiscount = rounded;
    let discounted = Total.totalPrice - (Total.totalPrice * (Total.discount / 100));
    Total.total = discounted;
    setTotal(Total);
  };



  const add_food = (i) =>{
    let add = [...Data];
    add[i].order++;
    setData(add);
    // total
    let calc = Total.totalPrice + add[i].price;
    Total.totalPrice = calc;
    // discount calculating
    discount_calc();
    
  };

  const remove_food = (i) =>{
    if([...Data][i].order !== 0){
      let add = [...Data];
      add[i].order--;
      setData(add);
      // total
      let calc = Total.totalPrice - add[i].price;
      Total.totalPrice = calc;
      // discount calculating
      discount_calc();
    }
  };
  const reveal_food = (i) =>{
    if( [ ...Data ][ i ].order == 0 ) {
      add_food( i );
    }
  }
  const clear_all_food = () =>{
    console.log('clear');
    const foods = [ ...Data ]; 
    foods.map( el => {
      el.order = 0;
      setData(foods);
    })

  }

  return (
    <div className="App">
      <div className='app__container'>
        <Main_left
          data={ Data }
          reveal={ reveal_food }
        />
        <Main_right
          data={ Data }
          add_food={ add_food }
          remove_food={ remove_food }
          total={ Total }
          clear_all={ clear_all_food }
        />
      </div>
    </div>
  );
}

export default App;
