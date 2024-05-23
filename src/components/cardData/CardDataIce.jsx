import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { addToCart } from '../../features/Cart/CartSlice';
import { useDispatch } from 'react-redux';

const CardDataIce = ({icecream}) => {

    const dispatch = useDispatch();
    
    useEffect(()=>{
        Aos.init({duration:1500})
      })
 
    const handleAdd = (cartItem) =>{
        dispatch(addToCart(cartItem));
      }

  return (
    <> 
      <div  data-aos="fade-right" className="card shadow-lg">
          <div className="img-part">
            <img src={icecream.image} alt="" />
          </div>
          <div className="text-part">
          <span>
              <h6><i class="fa-solid fa-star"></i> {icecream.Rating.rate}</h6>
              <h5><i class="fa-solid fa-star"></i> {icecream.Rating.rateData}</h5>
            </span>
            <h3>{icecream.dish_name}</h3>
            <h2>₹ {icecream.Price}</h2>
            <button onClick={() => handleAdd(icecream)}>ADD <sup>+</sup></button>
          </div>
        </div>

    </>
  )
}

export default CardDataIce;
