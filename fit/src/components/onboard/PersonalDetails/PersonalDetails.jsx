import React from 'react'
import style from "./personaldetails.module.css"
import {useNavigate} from "react-router-dom"
const PersonalDetails = () => {
    const navigate = useNavigate();

    const backButton = () => {
         navigate("/")
    }
    const handleNext = ()=> {
      navigate("/role")
    }
  return (
    <div>
         
        <div className={style.forget}>
       <div>
       <button onClick={backButton}>back</button>
          <h2>Fill Your Personal Details</h2>
          <p>Let us know you better</p>
       </div>
       <div className={style.forget_sec}> 
         <input type="text" name="email" id="email" placeholder='Full Name' />
         <input type="text" name="email" id="email" placeholder='Phone Number' />
         <input type="text" name="email" id="email" placeholder='Date of birth' />
         <input type="text" name="email" id="email" placeholder='Gender' />
         <input type="text" name="email" id="email" placeholder='Address' />
         <button onClick={handleNext}>Continue</button>
       </div>
      
    </div>
    </div>
  )
}

export default PersonalDetails
