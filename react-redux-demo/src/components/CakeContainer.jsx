import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/IceCream/IceCreamAction';

export const CakeContainer = () => {
  //access the numOfCakes state in the redux state and stored in the numOfCakes variable
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of cakes- {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake());
        }}
      >
        Buy Cake
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
