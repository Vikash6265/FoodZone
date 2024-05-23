import React from 'react'
import { useSelector } from 'react-redux'
import CardDataChin from '../components/cardData/CardDataChin';

const Chinese = () => {

  const {allChinese} = useSelector((state)=>state.chinese);

  return (
    <>
     <h2 class="headingBurger">Chinese Food's</h2>
      <div className="burger-container">
                
        {
          allChinese.map(chinese => <CardDataChin key={chinese.id} chinese={chinese}/>)
        }        

      </div>
    </>
  )
}

export default Chinese
