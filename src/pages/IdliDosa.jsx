import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { useSelector } from 'react-redux';
import CardIdliDosa from '../components/cardData/CardIdliDosa';

const IdliDosa = () => {

  const {allCarousal} = useSelector((state)=>state.carousal);

  useEffect(()=>{
    Aos.init({duration:1500})
  })

  return (
    <>

    <h2 class="headingBurger">Top Quality Idli & Dosa</h2>
      <div className="burger-container">

            {
              allCarousal.filter((idliDosa)=>idliDosa.category === "idliDosa").map((idliDosa)=> <CardIdliDosa key={idliDosa.id} idliDosa={idliDosa} />)
            }    

      </div>
    </>
  )
}

export default IdliDosa;
