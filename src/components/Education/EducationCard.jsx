import React from "react";
import styles from "./EducationCard.module.css";

const EducationCard = ({ id, education: { level, institution, duration, location } }) => {
  return (
    <div key={id} className={styles.container}>
      <div className={styles.duration}>
        <span className={styles.duration}> {duration} </span>
      </div>
      <div className={styles.institutionInfo}>
        <p className={styles.level}>{level}</p>
        <p className={styles.institution}>{institution}</p>
        <p className={styles.location}>{location}</p>
      </div>
    </div>
  );
};

export default EducationCard;
