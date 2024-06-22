import React, { useState } from 'react'
import styles from "./Role.module.css"

const Role = () => {


    const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className={styles.role}>
      <div>
        <h3>Select Your Role</h3>
        <small>What do you want with Fitstudio</small>
      </div>

      <div className={styles.optionsContainer}>
      <div
        className={`${styles.option} ${selectedOption === 'member' ? styles.selected : ''}`}
        onClick={() => handleSelect('member')}
      >
        <div className={styles.optionText}>Fitness Member</div>
        <div className={`${styles.circle} ${selectedOption === 'member' ? styles.checked : ''}`} />
      </div>

      <div
        className={`${styles.option} ${selectedOption === 'tutor' ? styles.selected : ''}`}
        onClick={() => handleSelect('tutor')}
      >
        <div className={styles.optionText}>Fitness Tutor</div>
        <div className={`${styles.circle} ${selectedOption === 'tutor' ? styles.checked : ''}`} />
      </div>
    </div>
    </div>
  )
}

export default Role
