import React, { useState,useEffect } from 'react'
import Button from './button'
import "./button.css"

function Form({data,button}) {
    
    const [radio,setradio]=useState({male:false,female:false,unisex:false})
    const [checkboxdata,setcheck]=useState({parking:false,food:false})
    const [pricedata,setprice]=useState({twosharing:null,threesharing:null,singlesharing:null})
    useEffect(() => {
        data!=undefined?setradio({
            ...radio,
            male:data.gender.male,
            female:data.gender.female,
            unisex:data.gender.unisex,
           
           }):console.log("undefine")

     data!=undefined?setcheck({...checkboxdata,parking:data.ameties.parking,food:data.ameties.food}):console.log("nochecked")
     data!=undefined?setprice({...pricedata,twosharing:data.twosharing,threesharing:data.threesharing,singlesharing:data.singlesharing}):console.log("nofound")

    }, [])
    console.log(data)
    function handel(e){
        console.log(e.target.name)
    }

   function pricealter(e){
    const {value,name}=e.target

      setprice({
        ...pricedata,
        [name]:value
      })

   } 
    
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
        <input name='gender'   checked={radio.male} onClick={handel}   type='radio' />
        <label>Male</label>
        <input name='gender'  checked={radio.female}  type='radio' />
        <label>Female</label>
        <input name='gender'  checked={radio.unisex} type='radio' />
        <label>Unisex</label>
      </div>
      <div className='checkbox_box'>
        <div>

        <input checked={checkboxdata.parking} type='checkbox' />
        <label>Parking</label>
        </div>
        <div>

        <input  type='checkbox' />
        <label>Cleaing</label>
        </div>
        <div>

        <input type='checkbox' />
        <label>Wifi</label>
        </div>
        <div>

        <input checked={checkboxdata.food}  type='checkbox' />
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
        <input name='singlesharing' type='number' onChange={pricealter} value={pricedata.singlesharing} placeholder='one sharing' />
        <input name='twosharing' type='number' onChange={pricealter} value={pricedata.twosharing} placeholder='two sharing' />
        <input name='threesharing' type='number' onChange={pricealter} value={pricedata.threesharing} placeholder='three sharing' />
      </div>


      </div>
       <Button button={button} />
  </div>
  )
}

export default Form