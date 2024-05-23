import React from 'react'
import { useSelector } from 'react-redux'
import CartPageData from '../components/CartPageData';
import { Link } from 'react-router-dom';

const CartPage = () => {

    const {cartItems} = useSelector((state)=>state.cart);

    const total = cartItems.reduce((p,c) => {
      return p + c.Price;
  },0)

  if(cartItems.length === 0)
    {
      return <h2 className='length'>Your Cart is Empty ! <br /> Please Add Your Favourite Dishes ?</h2>
    }

  return (
    <>
     <div className="main">
        <div className="cart-container">

          {
            cartItems.map((cart) => <CartPageData key={cart.id} cart={cart}/>)
          }

        </div>

        <div className="totalBill shadow-lg">
            <h2>Total Amount : ₹ {total.toFixed(1)}</h2>
            <Link to={'/PayPage'}> <button>Pay Now</button></Link>
        </div>
     </div>

    </>
  )
}

export default CartPage;