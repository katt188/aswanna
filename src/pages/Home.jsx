import React from 'react'
import Navbar from '../comp/Navbar'
import Product from '../comp/Product'

const Home = () => {
  return (
    <div className='home'>
      <div className="container">
        <Navbar />
        <Product />
      </div>
    </div>
  )
}

export default Home