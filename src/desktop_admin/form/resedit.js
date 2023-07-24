import React from 'react'
import Register from './register'
import Slidebutton from '../../atoms/slidebutton'
import Edit from './edit'
import { Route, Routes } from 'react-router-dom'

function Resedit() {

  return (
    <div>
        <Slidebutton/>
        <Routes >
        <Route path='/register' element={ <Register />} /> 
        <Route path='/edit' element={ <Edit/>} />
        </Routes>
    </div>
  )
}

export default Resedit