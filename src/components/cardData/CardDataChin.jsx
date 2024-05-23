import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../features/Cart/CartSlice';

const CardDataChin = ({chinese}) => {

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
            <img src={chinese.image} alt="" />
          </div>
          <div className="text-part">
          <span>
              <h6><i class="fa-solid fa-star"></i> {chinese.Rating.rate}</h6>
              <h5><i class="fa-solid fa-star"></i> {chinese.Rating.rateData}</h5>
            </span>
            <h3>{chinese.dish_name}</h3>
            <h2>₹ {chinese.Price}</h2>
            <button onClick={() => handleAdd(chinese)}>ADD <sup>+</sup></button>
          </div>
        </div>

    </>
  )
}

export default CardDataChin;
