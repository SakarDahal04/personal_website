import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer className={styles.container} id='contact'>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                <a href="mailto:sakar1234dahal@gmail.com">sakar1234dahal@gmail.com</a>
            </li>
            
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn-icon" />
                <a href="https://www.linkedin.com/in/sakar-dahal">linkedin.com/in/sakar-dahal</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email-icon" />
                <a href="https://github.com/SakarDahal04">github.com/SakarDahal04</a>
            </li>

        </ul>
    </footer>
  )
}

export default Contact
