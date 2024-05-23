import React, { useEffect } from 'react'
import paratha from '../assets/paratha.jpg'
import cake from '../assets/cake.jpg'
import dosa from '../assets/dosa.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';

const Carousel = () => {

    useEffect(()=>{
        Aos.init({duration:1000})
    })

  return (
    <div className="Hero-section">
        <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner">
    <div data-aos="zoom-in" class="carousel-item active">
      <img src={paratha} class="d-block w-100" alt="..."/>
      <div class="bg-text">
        <h1>40% OFF</h1>
        <h3>Paratha With Sauce</h3>
        <Link to={'/Paratha'}><button className='clickbtn'>Click Here</button></Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={cake} class="d-block w-100" alt="..."/>
      <div class="bg-text">
        <h2>Enjoy Your Day</h2>
        <h4> With Fresh Cakes</h4>
        <Link to={'/Cake'}><button className='clickbtn'>Click Here</button></Link>
      </div>
    </div>
    <div class="carousel-item">
      <img src={dosa} class="d-block w-100" alt="..."/>
      <div class="bg-text">
        <h1>20% OFF</h1>
        <h3>On South Indian Foods</h3>
        <Link to={'/IdliDosa'}><button className='clickbtn'>Click Here</button></Link>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousel;
