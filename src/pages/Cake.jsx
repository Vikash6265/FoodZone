import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';
import CardCake from '../components/cardData/CardCake';

const Cake = () => {

  const {allCarousal} = useSelector((state)=>state.carousal);

  useEffect(()=>{
    Aos.init({duration:1500})
  })

  return (
    <>

    <h2 class="headingBurger">Top Quality Cake's</h2>
      <div className="burger-container">

            {
              allCarousal.filter((cake)=>cake.category === "cake").map((cake)=> <CardCake key={cake.id} cake={cake} />)
            }    

      </div>
    </>
  )
}

export default Cake;
