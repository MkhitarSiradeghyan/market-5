import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './pages/Home/Home'
import Shop from './pages/Shop/Shop'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App