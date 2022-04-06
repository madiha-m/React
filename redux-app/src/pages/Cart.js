import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../store/cartSlice'

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (prodId) => {
    dispatch(remove(prodId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className='cartWrapper'>
        {
          products.map(prod => (
            <div className='cartCard'>
              <img src={prod.img} alt="" />
              <h5>{prod.title}</h5>
              <h5>{prod.price}</h5>
              <button className='btn'
                onClick={() => handleRemove(prod.id)}
              >
                Remove
              </button>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Cart;