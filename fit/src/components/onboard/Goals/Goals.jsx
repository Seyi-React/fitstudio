import React, { useState } from "react";
import style from "./goals.module.css";
import { useNavigate } from "react-router-dom";

const Goals = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  const handleBack = () => {
    navigate("/level");
  };
  const handleNext = () => {
    navigate("/work");
  };
  return (
    <div>
      <div className={style.goal}>
        <div>
          <button onClick={handleBack}>back</button>
          <h3>Select Your Fitness Goals</h3>
          <p style={{ textAlign: "center" }}>You can select your goals</p>
        </div>
        <div className={style.goal_c}>
          <div
            className={`${style.goals} ${
              selectedOption === "fat" ? style.selected : ""
            }`}
            onClick={() => handleSelect("fat")}
          >
            To loose Fat
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "reduce" ? style.selected : ""
            }`}
            onClick={() => handleSelect("reduce")}
          >
            To reduce fat
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "fit" ? style.selected : ""
            }`}
            onClick={() => handleSelect("fit")}
          >
            To stay fit
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "burn" ? style.selected : ""
            }`}
            onClick={() => handleSelect("burn")}
          >
            To burn fat
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "muscles" ? style.selected : ""
            }`}
            onClick={() => handleSelect("muscles")}
          >
            To buld muscles
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "weight" ? style.selected : ""
            }`}
            onClick={() => handleSelect("weight")}
          >
            To add weight
          </div>
          <div
            className={`${style.goals} ${
              selectedOption === "all" ? style.selected : ""
            }`}
            onClick={() => handleSelect("all")}
          >
            All
          </div>
        </div>
       
        <button className={style.continue} onClick={handleNext}>Continue</button>
      </div>
    </div>
  );
};

export default Goals;
