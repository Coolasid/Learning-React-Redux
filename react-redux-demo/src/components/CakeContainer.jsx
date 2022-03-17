import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/IceCream/IceCreamAction';

export const CakeContainer = () => {
  //access the numOfCakes state in the redux state and stored in the numOfCakes variable
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  const [text, setText ] = useState(1)

  const dispatch = useDispatch();

  const handleChange = (e) =>{
    setText(e.target.value);
  }


  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <input type="number" value={text} onChange={handleChange} id="" placeholder='Number of cakes...' />
      <button
        onClick={() => {
          if(text < numOfCakes ){

            dispatch(buyCake(text));
          }else{
            alert("quantity is more sorry!!")
          }
        }}
      >
        Buy {text} {text <= 1 ? "Cake" : "Cakes"} 
      </button>

      <h2>Number of IceCream-{numOfIceCream}</h2>
      <button
        onClick={() => {
          dispatch(buyIceCream());
        }}
      >
        Buy IceCream
      </button>
    </div>
  );
};
