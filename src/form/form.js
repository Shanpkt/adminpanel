import React, { useState } from 'react'
import "./form.css"
import axios from 'axios'


function Form() {
const [washin, setIsChecked] = useState(false)
const [lift, setIslift] = useState(false)
const [wifi, setIswifi] = useState(false)
const [food, setIsfood] = useState(false)
const [parking, setIsparking] = useState(false)
const [cleaning, setIscleaning] = useState(false)
const [water, setIswater] = useState(false)
const [cctv, setIscctv] = useState(false)
const [data,setdata]=useState({})
const [selectedImage, setSelectedImage] = useState(null);

    function handel(e){

        if(e.target.name=="washing"){
            console.log("it")
            setIsChecked(e.target.checked);
        }
       else if(e.target.name=="lift"){
            console.log("it")
            setIslift(e.target.checked);
        }
       else if(e.target.name=="wifi"){
            console.log("it")
            setIswifi(e.target.checked);
        }
       else if(e.target.name=="food"){
            console.log("it")
            setIsfood(e.target.checked);
        }
       else if(e.target.name=="parking"){
            console.log("it")
            setIsparking(e.target.checked);
        }
        else if(e.target.name=="cleaning"){
            console.log("it")
            setIscleaning(e.target.checked);
        }else if(e.target.name=="water"){
            console.log("it")
            setIswater(e.target.checked);
        }
       else if(e.target.name=="cctv"){
            console.log("it")
            setIscctv(e.target.checked);
        }else{
            const {name,value}=e.target
          
            setdata({
                ...data,
                [name]:value
            })
           // console.log("hello")
        }
}
console.log(washin)
console.log(lift)
console.log(wifi)
console.log(food )
console.log("parking",parking)
console.log("cleaing",cleaning)
console.log(data)
const handleFormSubmit = (event) => {
    event.preventDefault();

    if (selectedImage) {
      const formData = new FormData();
      formData.append('image', selectedImage);

      axios.post('/upload', formData).then((response) => {
        console.log(response.data);
      }).catch((error) => {
        console.error(error);
      });
    }
  };
  return (
    <div className='box'> 
    <div className='innerbox' >
       <input name='Owner_name' type='text' placeholder='Owner name' onChange={handel}/>
       <input name='phone' type='number' placeholder='Number' onChange={handel}/>
       <input name='pgname' type='text' placeholder='Pg name' onChange={handel}/>
       <div className='optionbox'>
        <div>
        
       <input name='gender_type' type='radio' value={"male"} onClick={handel} />
       <label>MALE</label> 
       </div>
       <input name='gender_type' type='radio' value={"female"} onClick={handel}/>
       <input name='gender_type' type='radio' value={"unisex"} onClick={handel}/>
       <input checked={lift}  name='lift' type='checkbox'  onClick={handel} />
       <input checked={washin}  name='washing' type='checkbox'  onClick={handel} />
       <input checked={wifi}  name='wifi' type='checkbox'  onClick={handel} />
       <input checked={food}  name='food' type='checkbox'  onClick={handel} />
       <input checked={parking}  name='parking' type='checkbox'  onClick={handel} />
       <input checked={cleaning}  name='cleaning' type='checkbox'  onClick={handel} />
       <input checked={water}  name='water' type='checkbox'  onClick={handel} />
       <input checked={cctv}  name='cctv' type='checkbox'  onClick={handel} />
       <div className='uploadbox'>
        <div>
       <input type='file'  />
       </div>
       </div>
       </div>
       </div>
    </div>
  )
}

export default Form