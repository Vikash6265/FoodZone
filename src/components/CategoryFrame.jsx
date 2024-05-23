import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const CategoryFrame = () => {

    useEffect(()=>{
        Aos.init({duration:1500})
    })

  return (
    <>

      <div className="category">
           <h2>Our <span>Best Delivery</span> <br /> Categories</h2>
           <p><i>It's not just about bringing you good food from 
           restaurant,we deliver your experience</i></p>
      </div>

      <h3 className='mind'>What's on your mind?</h3>

      <div className="frame">
        <Link to={'/Burger'}><div data-aos="fade-right" className="circle1"></div></Link>
        <Link to={'/Sabji'}><div data-aos="fade-right" className="circle2"></div></Link>
        <Link to={'/IceCream'}> <div data-aos="fade-right" className="circle3"></div></Link>
        <Link to={'/Chinese'}><div data-aos="fade-left" className="circle4"></div></Link>
        <Link to={'/Pizza'}><div data-aos="fade-left" className="circle5"></div></Link>
        <Link to={'/Sweets'}><div data-aos="fade-left" className="circle6"></div></Link>
      </div>

    </>
  )
}

export default CategoryFrame;
