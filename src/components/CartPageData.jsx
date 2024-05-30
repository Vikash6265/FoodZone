import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, decrementQty, incrementQty, removeCart } from '../features/Cart/CartSlice';

const CartPageData = ({cart}) => {

  const dispatch = useDispatch();

  const handleRemove = (id) =>{
    dispatch(removeCart(id))
  }

  const handleAdd = (cartItem) =>{
    dispatch(addToCart(cartItem));
  }

  const handleIncrement = (id) =>{
    dispatch(incrementQty(id))
  }

  const handleDecrement = (id) =>{
    cart.qty > 1 ? dispatch(decrementQty(id)) : (cart.qty = 0);
  };

  let Total = cart?.price * cart?.qty;

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
              <div className="d-flex align-items-center justify-content-center flex-row">
                <button className='btn btn-sm rounded border text-dark d-flex align-items-center justify-content-center' style={{fontSize:'22px',fontWeight:'550', width:'40px'}} onClick={()=>handleDecrement(cart?.id)}>-</button>
                <h6 className='fs-lg-5 fw-semibold font my-1 mx-2'>{cart?.qty}</h6>
                <button className='btn btn-sm rounded border text-dark d-flex align-items-center justify-content-center' style={{fontSize:'22px',fontWeight:'550', width:'40px'}} onClick={()=>handleIncrement(cart?.id)}>+</button>
              </div>
              <button style={{marginLeft:'10px',color:'red'}} onClick={()=>handleRemove(cart?.id)}>Remove</button>
            </span>
          </div>
      </div>
    </>
  )
}

export default CartPageData;
{/* <button onClick={() => handleAdd(cart)}>ADD <sup>+</sup></button> */}