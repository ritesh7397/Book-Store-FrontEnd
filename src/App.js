import React from 'react'
import Home from "./home/Home.jsx"
import { Route, Routes } from 'react-router-dom'
import Courses from './course/Courses.jsx'
import Signup from './components/Signup.jsx'


function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course' element={<Courses />} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>

    </div>
  )
}

export default App
