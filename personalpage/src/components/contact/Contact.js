import styles from "./Contact.module.scss";
import { Link} from "react-router-dom";
import emailjs from 'emailjs-com';
import { GrMail, GrLinkedin, GrTwitter, GrInstagram } from "react-icons/gr";

const Contact = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_12zca0l', 'template_1fhej66', e.target, 'user_FMsHYMaFlZk4nslbxIXu9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
      <div className={styles.contactbox}>
        <div className={styles.navbox}>
          <nav>
          <Link to="/" className={styles.logobox}>
              <p>Back to home</p>
            </Link>
          </nav>
        </div>
        <div className={styles.contactbody}>
          <div className={styles.contacttext}>
            <h2>What would you like to talk about?</h2>
            <p>
              Depending on my availabilty, I may be open to full or part-time
              roles, advisory roles and speaking engagements. You can reach me
              through the following channels, or by filling the form.
            </p>
            <div className={styles.socialbox}>
              <a href="mailto:themayowageorge@gmail.com">
                <GrMail />
                <p>themayowageorge@gmail.com</p>
              </a>
              <a href="https://www.linkedin.com/in/mayowageorge/">
                <GrLinkedin />
                <p>Oluwamayowa George</p>
              </a>
              <a href="https://twitter.com/Wana____">
                <GrTwitter />
                <p>@Wana____</p>
              </a>
              <a href="https://www.instagram.com/wana____/">
                <GrInstagram />
                <p>@Wana____</p>
              </a>
            </div>
          </div>
          <div className={styles.contactform}>
              <form onSubmit={sendEmail}>
                  <input type="text" placeholder="Your name"></input>
                  <input type="text" placeholder="Your email"></input>
                  <input type="textarea" placeholder="Your message"></input>
                  <input type="submit" value="Send message"></input>
              </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
