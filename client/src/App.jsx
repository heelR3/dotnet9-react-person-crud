import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Person from './components/person/Person'
import NotFound from './pages/NotFound'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="person" element={<Person />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster/>
    </>

  )
}

export default App
