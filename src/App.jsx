import { Route, Routes } from 'react-router-dom'
import React from 'react'
import Landing from './Pages.jsx/Landing'
import Home from './Pages.jsx/Home'
import History from './Pages.jsx/History'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
