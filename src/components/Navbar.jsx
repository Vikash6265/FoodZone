import React from 'react'
import { Link } from 'react-router-dom';
import foodZone from "../assets/foodZone.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

  const {cartItems} = useSelector((state)=>state.cart);

  return (
       <div class="navbar">
          <Link to={"/"}><img src={foodZone} alt="" /></Link>
           <ul>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link to={'/Menu'}>Menu</Link></li>
            <li><Link to={'/About'}>About</Link></li>
            <li><Link to={'/Contact'}>Contact</Link></li>
            <li>
            <Link to={'/CartPage'}>
            <button type="button" class="btn btn-primary position-relative">
              <FaShoppingCart />
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItems.length}
                <span class="visually-hidden">unread messages</span>
              </span>
           </button>
            </Link>
            </li>
           </ul>

        </div>
  )
}

export default Navbar;
