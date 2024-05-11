import React from 'react'
import HomePage from './HomePage/HomePage'
import { Routes, Route } from 'react-router-dom'
import CoursePage from './CoursePage/CoursePage'
import Singup from './components/Singup'






function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/course' element={<CoursePage />} /> 
      <Route path='/singup' element={<Singup />} /> 
     
    </Routes>
    </>
  )
}

export default App