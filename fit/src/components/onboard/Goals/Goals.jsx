import React from 'react'
import style from "./goals.module.css"

const Goals = () => {
  return (
    <div>
      <div className={style.goal}>
         <div>
            <h3>Select Your Fitness Goals</h3>
            <p style={{textAlign:"center"}}>You can select your goals</p>
         </div>
         <div>
            <div className={style.goals}></div>
            <div className={style.goals}></div>
            <div className={style.goals}></div>
            <div className={style.goals}></div>
            <div className={style.goals}></div>
            <div className={style.goals}></div>
         </div>
      </div>
    </div>
  )
}

export default Goals
