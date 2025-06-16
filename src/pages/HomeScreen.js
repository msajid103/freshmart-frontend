import React from 'react'
import NavBar from '../components/Home/NavBar'
import Carousel from '../components/Home/Carousel'
import ProductList from '../components/Product/ProductList'
import Footer from '../components/Home/Footer'

export const HomeScreen = () => {
  return (
    <>
      <NavBar />
      <div className='flex justify-between mt-4'>
      <Carousel/>
      </div>
      <ProductList/>
      <Footer/>


    </>

  )
}
