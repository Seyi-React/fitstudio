import React from 'react'
import style from "./goals.module.css"
import {useNavigate} from "react-router-dom"

const Goals = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate("/level")
    }
  return (
    <div>
      <div className={style.goal}>
         <div>
            <button onClick={handleBack}>back</button>
            <h3>Select Your Fitness Goals</h3>
            <p style={{textAlign:"center"}}>You can select your goals</p>
         </div>
         <div className={style.goal_c}>
            <div className={style.goals}>To loose Fat</div>
            <div className={style.goals}>To reduce fat</div>
            <div className={style.goals}>To stay fit</div>
            <div className={style.goals}>To burn fat</div>
            <div className={style.goals}>To buld muscles</div>
            <div className={style.goals}>To add weight</div>
         </div>
      </div>
    </div>
  )
}

export default Goals
