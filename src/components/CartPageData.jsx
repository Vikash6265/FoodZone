import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCart } from '../features/Cart/CartSlice';

const CartPageData = ({cart}) => {

  const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(removeCart(id))
  }

  return (
    <>
      <div className="cart-card shadow-lg">
          <div className="img-part1">
            <img src={cart?.image} alt="" />
          </div>
          <div id='carttext' className="text-part">
            <h3>{cart?.dish_name}</h3>
            <h2>₹ {cart?.Price}</h2>
            <span>
              {/* <button>ADD <sup>+</sup></button> */}
              <button style={{marginLeft:'0px',color:'red'}} onClick={()=>handleRemove(cart?.id)}>Remove</button>
            </span>
          </div>
      </div>
    </>
  )
}

export default CartPageData;
