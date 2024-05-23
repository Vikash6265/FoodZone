import React from 'react'
import Navbar from './components/Navbar'

import { BrowserRouter as Router,Routes,Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Burger from './pages/Burger'
import Chinese from './pages/Chinese'
import IceCream from './pages/IceCream'
import Sabji from './pages/Sabji'
import Sweets from './pages/Sweets'
import Pizza from './pages/Pizza'
import Menu from './pages/Menu'
import About from './pages/About'
import Contact from './pages/Contact'
import CartPage from './pages/CartPage'
import PayPage from './pages/PayPage'
import Cake from './pages/Cake'
import Paratha from './pages/Paratha'
import IdliDosa from './pages/IdliDosa'

const App = () => {
  return (
    <BrowserRouter>
     <div className="container-fluid p-0">

        <Navbar/>

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/CartPage' element={<CartPage/>}/>
        <Route path='/Burger' element={<Burger/>} />
        <Route path='/Chinese' element={<Chinese/>} />
        <Route path='/IceCream' element={<IceCream/>} />
        <Route path='/Sabji' element={<Sabji/>} />
        <Route path='/Sweets' element={<Sweets/>} />
        <Route path='/Pizza' element={<Pizza/>} />
        <Route path='/PayPage' element={<PayPage/>} />
        <Route path='/Paratha' element={<Paratha/>} />
        <Route path='/Cake' element={<Cake/>} />
        <Route path='/IdliDosa' element={<IdliDosa/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;

