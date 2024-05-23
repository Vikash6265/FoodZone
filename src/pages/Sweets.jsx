import React from 'react'
import { useSelector } from 'react-redux';
import CardDataSweet from '../components/cardData/CardDataSweet';

const Sweets = () => {

  const {allSweets} = useSelector((state)=>state.sweets)

  return (
    <>
      <h2 class="headingBurger">Top Quality Sweet's</h2>
      <div className="burger-container">

       {
        allSweets.map((sweet)=> <CardDataSweet key={sweet.id} sweet={sweet}/>)
       } 
                
      </div>
    </>
  )
}

export default Sweets;
