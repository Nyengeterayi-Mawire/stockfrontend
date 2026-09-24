import { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import Stocks from './pages/stocks/stocks' 
import Login from './pages/login/login'
import Register from './pages/register/register'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='main'>
      <Routes>
        <Route path='/' element={<Stocks/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Register/>}/>
      </Routes>     
    </div >
  )
}

export default App
