import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './componnets/Header'
import Home from './componnets/Home'

export default function AppRoutes() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
            <Route path='/*' element={<Header/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}
