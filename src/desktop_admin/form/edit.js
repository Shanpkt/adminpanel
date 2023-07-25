import React, { useState } from 'react'
import Form from '../../atoms/Form'
import axios from 'axios'


function Edit() {
    const [data,setdata]=useState({name:"shantanu",phone:7447556344,pgname:"bharma",city:"pune",area:"hinjewadi",gender:{ male:true,female:false,unisex:false},ameties:{parking:true,food:true},twosharing:7500,threesharing:6500,singlesharing:1500})
    const [list,setlist]=useState()
   function handel(e){
      const value=e.target.value
       if(value.length>0){
       axios.get(`http://localhost:5000/postpgdata/${value}`).then((e)=>{
           
          if(e.status!="fail"){
             setlist(e.data.data)
          }

       })
       }else{
        setlist([])
       }
   } 
   console.log("a",list)

   function renderhandel(e){
    setdata(e)
    setlist([])

   }
  return (
    <>
    <div className='editdropbox'>
        <input onChange={handel} />
        <div className='drop_list' >
          {
            list && list.map((e)=>{
             return (<div onClick={()=>{renderhandel(e)}} ><h6>{e.pgname}</h6><h6>{e.area}</h6></div>)
            })
          }
        </div>
    </div>
   <Form data={data} button={"Edit"}/>
   </>
  )
}

export default Edit