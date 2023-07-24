import React, { useState } from 'react'
import Slidebutton from '../../atoms/slidebutton'
import "./register.css"
import Form from '../../atoms/Form'

function Register() {
  const [data,setdata]=useState({name:"shantanu",phone:7447556344,pgname:"bharma",city:"pune",area:"hinjewadi",gender:{male:true,female:false,unisex:false}})

  return (
   <Form data={data} />
  )
}

export default Register