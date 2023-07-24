import React from 'react'
import Slidebutton from '../../atoms/slidebutton'
import "./register.css"

function Register() {
  return (
    <div className='register_form' >

      <div className='registerbox'>
    <div>
        <input placeholder=' Owner Name'/>
        <input placeholder='Phone No' />
        </div>
        <div>
        <input placeholder='Pg Name' />
        <input placeholder='City' />
        <input placeholder='Area' />
        </div>
        <input placeholder='Location' />


        </div>
    </div>
  )
}

export default Register