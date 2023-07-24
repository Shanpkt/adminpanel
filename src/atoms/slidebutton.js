import React, { useEffect, useState } from 'react'
import "./slidbutton.css"
import { useNavigate } from 'react-router-dom'

function Slidebutton() {
    const [decimal,setdecimal]=useState(false)
    function sliderall(){
        decimal==true?navigate():navigate2()
    }

   useEffect(() => {

    sliderall()
   
   }, [])
 const navi=useNavigate()
 function navigate(){
    setdecimal(false)
    navi("/edit")
   
 }


 function navigate2(){
    setdecimal(true)
    navi("/register")
 }
  return (
    <div className='boxdiv'>
        <div className='boxslide'  >
            <label>Edit</label>
            <label>Save</label>
            <button onClick={sliderall} className={`slider ${decimal==true?"slider_slide":""}`} >{!decimal?"Edit":"Save"}</button>
        </div>
    </div>
  )
}

export default Slidebutton