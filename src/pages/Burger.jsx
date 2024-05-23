import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';
import CardDataBur from '../components/cardData/CardDataBur';

const Burger = () => {

  const {allBurger} = useSelector((state)=>state.burger);

  useEffect(()=>{
    Aos.init({duration:1500})
  })

  return (
    <>

    <h2 class="headingBurger">Top Quality Burgers</h2>
      <div className="burger-container">

            {
              allBurger.map((burger)=> <CardDataBur key={burger.id} burger={burger} />)
            }    

      </div>
    </>
  )
}

export default Burger;
