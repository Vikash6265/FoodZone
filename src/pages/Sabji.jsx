import React from 'react'
import { useSelector } from 'react-redux';
import CardDataSab from '../components/cardData/CardDataSab';

const Sabji = () => {

  const {allSabji} = useSelector((state)=>state.sabji);

  return (
    <>
      <h2 class="headingBurger">Top Quality Sabzi's</h2>
      <div className="burger-container">

        {
          allSabji.map(sabji => <CardDataSab key={sabji.id} sabji={sabji}/>)
        }        

      </div>
    </>
  )
}

export default Sabji;
