import React from 'react';
import './App.css'
import { Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer,toast } from 'react-toastify';

const App = () => {
  return (
    <div className='p-4 w-screen h-screen '>
<Navbar />
<ToastContainer />
<Searchbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/collections' element={<Collection/>}   />
    <Route path='/about' element={<About/>}  />
    <Route path='/contact' element={<Contact/>}  />
    <Route path='/product/:productId' element={<Product/>}  />
    <Route path='/cart' element={<Cart/>}  />
    <Route path='/login' element={<Login/>} />
    <Route path='/placeOrder' element={<PlaceOrder/>} />


   </Routes>
<Footer />
    </div>
  )
}

export default App
       