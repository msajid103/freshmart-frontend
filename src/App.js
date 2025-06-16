import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HomeScreen } from './pages/HomeScreen'
import Login from './components/Auth/Login'
import Signup from './components/Auth/Signup'
import CartScreen from './pages/CartScreen'
import CheckoutForm from './pages/CheckoutForm'
import CheckoutScreen from './pages/CheckoutScreen'
// import ProductDetail from './pages/ProductDetail'
// import AdminDashboard from './pages/AdminDashboard'
import AdminPanel from './pages/AdminPanel'

const App = () => {
  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />     
        <Route path="/login" element={<Login/>} /> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path= "/admin" element= {<AdminPanel/>}/>
        <Route path='/cart' element={<CartScreen/>}/>
        <Route path='/checkoutform' element={<CheckoutForm/>}/>
        <Route path='/checkout' element={<CheckoutScreen/>}/>
      </Routes>
    </Router>
 

    // <Login/>
    // <Signup/>
    // < CartScreen/>
    // <ProductDetail/>
    // <AdminDashboard/>

  )
}

export default App