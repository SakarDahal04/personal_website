import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css"


const ProjectCard = ({id, project : {title, description, imageSrc, skills, demo, source}}) => {
  return (
    <div key={id} className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (<li className={styles.skill} key={id}>{skill}</li>);
        })}
      </ul>
      <div className={styles.links}>
        <a className={styles.link} href={demo}>Demo</a>
        <a className={styles.link} href={source}>Source</a>
      </div>
    </div>
  );
};

export default ProjectCard;
