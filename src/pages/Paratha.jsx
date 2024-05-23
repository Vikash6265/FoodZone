import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';
import CardParatha from '../components/cardData/CardParatha';

const Paratha = () => {

  const {allCarousal} = useSelector((state)=>state.carousal);

  useEffect(()=>{
    Aos.init({duration:1500})
  })

  return (
    <>

    <h2 class="headingBurger">Top Quality Paratha's</h2>
      <div className="burger-container">

            {
              allCarousal.filter((paratha)=>paratha.category === "paratha").map((paratha)=> <CardParatha key={paratha.id} paratha={paratha} />)
            }    

      </div>
    </>
  )
}

export default Paratha;
