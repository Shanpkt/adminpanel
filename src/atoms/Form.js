import React, { useState,useEffect } from 'react'

function Form({data}) {
     
    const [radio,setradio]=useState({male:false,female:true,unisex:false})
    useEffect(() => {
        data!=undefined?setradio({
            ...radio,
            male:data.gender.male,
            female:data.gender.female,
            unisex:data.gender.unisex
           }):console.log("undefine")
       
    
    }, [])
    
  return (
    <div className='register_form' >

    <div className='registerbox'>
  <div className='boxnth1' >
      <input name='name' value={data!=undefined?data.name:null}  placeholder='Owner Name'/>
      <input name="phone"  value={data!=undefined?data.phone:null} placeholder='Phone No' />
      </div>
      <div className='boxnth1'>
      <input name='pgname' value={data!=undefined?data.pgname:null} placeholder='Pg Name' />
      <input name='city' value={data!=undefined?data.city:null} placeholder='City' />
      <input name='area'   value={data!=undefined?data.area:null} placeholder='Area' />
      </div>
     
<div className='boxnth1' >
      <input placeholder='Location' />
      </div>
      <div className='boxnth1'>
        <input name='gender' checked={radio.male}    type='radio' />
        <label>Male</label>
        <input name='gender'  checked={radio.female}  type='radio' />
        <label>Female</label>
        <input name='gender'  checked={radio.unisex} type='radio' />
        <label>Unisex</label>
      </div>
      <div className='checkbox_box'>
        <div>

        <input type='checkbox' />
        <label>Parking</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Cleaing</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Wifi</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Food</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Lift</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Cctv</label>
        </div>
      </div>
      <div className='boxnth1' >
        <input type='number' placeholder='one sharing' />
        <input type='number' placeholder='two sharing' />
        <input type='number' placeholder='three sharing' />
      </div>


      </div>
  </div>
  )
}

export default Form