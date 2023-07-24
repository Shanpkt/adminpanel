import React from 'react'
import "./index.css"
import register from "../images/icons8-register-90.png"

function Index() {
  return (
    <div className='desktop_panel'>
      <div className='navbar'>
        <button><img src={register} />Register</button>
        <button><img src={register} />Edit</button>
        <button><img src={register} />More</button>
      </div>
    </div>
  )
}

export default Index