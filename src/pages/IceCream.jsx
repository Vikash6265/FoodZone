import React from 'react'
import { useSelector } from 'react-redux'
import CardDataIce from '../components/cardData/CardDataIce';

const IceCream = () => {

  const {allIceCream} = useSelector((state)=>state.icecream);

  return (
    <>
     <h2 class="headingBurger">Top Quality Ice-Creams</h2>
      <div className="burger-container">

        {
          allIceCream.map((icecream)=><CardDataIce key={icecream.id} icecream={icecream}/>)
        }       

      </div>
    </>
  )
}

export default IceCream
