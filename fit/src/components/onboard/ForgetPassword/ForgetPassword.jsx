import React from 'react'
import style from "./forget.module.css"
import {Link} from "react-router-dom"

const ForgetPassword = () => {
  return (
    <div className={style.forget}>
       <div>
          <h2>Forgot Password</h2>
          <p>Enter your email to reset password</p>
       </div>
       <div className={style.forget_sec}> 
         <input type="email" name="email" id="email" placeholder='Enter email address' />
         <button>Request Link</button>
       </div>
       <Link className={style.back} to="/login">Back to Login</Link>
    </div>
  )
}

export default ForgetPassword
