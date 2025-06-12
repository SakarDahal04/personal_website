import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css"
import Lottie from "lottie-react";
import animationData from "./../../../public/assets/about/about.json"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2  className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img src={getImageUrl("/about/aboutImage.png")} alt="About-image"  className={styles.aboutImg} /> */}
        
        <Lottie animationData={animationData} loop={true} className={styles.aboutImg}/>

        <ul  className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="cursor-icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                Backend developer with proficiency of working with Django and
                Django Rest Framework
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="server-icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                Profiency in developing the Frontend application.
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="ui-icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                Simple UI description
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default About;
