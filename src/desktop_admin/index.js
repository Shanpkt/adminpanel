import React from 'react'
import "./index.css"
import register from "../images/icons8-register-90.png"
import users from "../images/icons8-users-100.png"
import more from "../images/icons8-more-48.png"

function Index() {
  return (
    <div className='desktop_panel'>
      <div className='navbar'>
        <button><img src={register} />Register</button>
        <button><img src={users} />Users</button>
        <button><img src={more} />More</button>
      </div>
    </div>
  )
}

export default Index