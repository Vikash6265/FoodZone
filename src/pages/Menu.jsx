import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      {/* <h2 class='headingBurger'>Available Dishes Menu Here</h2> */}

      <div className="menu-cart">
        <div className="box shadow-lg">
            <h2>Dish Menu</h2>
            <ul>
                <li>
                    <span>
                      <Link to={'/Burger'}>Burger</Link>
                      <p>₹ 69 - 239</p>
                    </span>
                </li>

                <li>
                    <span>
                      <Link to={'/Pizza'}>Pizza</Link>
                      <p>₹ 99 - 300</p>
                    </span>
                </li>

                <li>
                    <span>
                      <Link to={'/IceCream'}>Ice Creams</Link>
                      <p>₹ 140 - 220</p>
                    </span>
                </li>

                <li>
                    <span>
                      <Link to={'/Sabji'}>Sabji</Link>
                      <p>₹ 120 - 320</p>
                    </span>
                </li>

                <li>
                    <span>
                      <Link to={'/Sweets'}>Sweets</Link>
                      <p>₹ 110 - 250</p>
                    </span>
                </li>

                <li>
                    <span>
                      <Link to={'/Chinese'}>Chinese</Link>
                      <p>₹ 100 - 210</p>
                    </span>
                </li>
            </ul>
        </div>
      </div>

    </>
  )
}

export default Menu
