import React from 'react'
import Home from "./home/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses.jsx'


function App() {
  return (
    <div>
   

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/course' element={<Courses/>}/>
       
      </Routes>

    </div>
  )
}

export default App
