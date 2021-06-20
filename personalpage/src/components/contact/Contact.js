import styles from "./Contact.module.scss";
import {useState} from 'react'
import { Link} from "react-router-dom";
import emailjs from 'emailjs-com';
import { GrMail, GrLinkedin, GrTwitter, GrInstagram } from "react-icons/gr";
import Themecontext from '../themecontext/Themecontext'

const Contact = () => {

  const [pname, setPname] = useState('');
  const [ptext, setPtext] = useState('');
  const [pmail, setPmail] = useState('');

  const templateParams = {
    from_name: pname,
    reply_to: pmail,
    message: ptext
  }


  function sendEmail(e) {
    e.preventDefault();

    emailjs.send('service_12zca0l', 'template_l3yn25o', templateParams, 'user_FMsHYMaFlZk4nslbxIXu9')
      .then((result) => {
        console.log('SUCCESS!', result.status, result.text);
        setPname('')
        setPtext('')
        setPmail('')
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <>
    <Themecontext.Consumer>
      {(mode) =>
      <div mode={mode} className={mode ? styles.contactbox : styles.contactbox1}>
        <div className={mode ? styles.navbox : styles.navbox1}>
          <nav>
          <Link to="/" className={mode ? styles.logobox : styles.logobox1}>
              <p>Back to home</p>
            </Link>
          </nav>
        </div>
        <div className={styles.contactbody}>
          <div className={mode ? styles.contacttext : styles.contacttext1}>
            <h2>What would you like to talk about?</h2>
            <p>
              Depending on my availabilty, I may be open to full or part-time
              roles, advisory roles and speaking engagements. You can reach me
              through the following channels, or by filling the form.
            </p>
            <div className={mode ? styles.socialbox : styles.socialbox1}>
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
          <div className={mode ? styles.contactform : styles.contactform1}>
              <form onSubmit={sendEmail}>
                  <input type="text" required placeholder="Your name" value={pname} onChange={(e) => setPname(e.target.value)}></input>
                  <input type="text" required placeholder="Your email" value={pmail} onChange={(e) => setPmail(e.target.value)}></input>
                  <input type="textarea" required placeholder="Your message" value={ptext} onChange={(e) => setPtext(e.target.value)}></input>
                  <input type="submit" value="Send message"></input>
              </form>
          </div>
        </div>
      </div>
      }
      </Themecontext.Consumer>
    </>
  );
};

export default Contact;
