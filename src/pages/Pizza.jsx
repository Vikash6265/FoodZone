import React from 'react'
import { useSelector } from 'react-redux';
import CardDataPizza from '../components/cardData/CardDataPizza';


const Pizza = () => {

  const {allPizza} = useSelector((state)=>state.pizza);

  return (
    <>
      <h2 class="headingBurger">Top Quality Pizza's</h2>
      <div className="burger-container">
                
        {
          allPizza.map((pizza)=> <CardDataPizza key={pizza.id} pizza={pizza}/>)
        }        

      </div>
    </>
  )
}

export default Pizza;
