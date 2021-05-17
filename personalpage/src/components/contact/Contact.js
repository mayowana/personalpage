import styles from "./Contact.module.scss";
import logo from "../media/pagelogo.png";
import { Link, NavLink } from "react-router-dom";
import { GrMail, GrLinkedin, GrTwitter, GrInstagram } from "react-icons/gr";

const Contact = () => {
  return (
    <>
      <div>
        <div className={styles.navbox}>
          <nav>
            <Link to="/" className={styles.logobox}>
              <img src={logo} alt="logo"></img>
            </Link>
            <div>
              <ul className={styles.navlist}>
                <NavLink to="/marketing/" activeStyle={{ color: "red" }}>
                  MARKETING
                </NavLink>
                <NavLink to="/engineering/" activeStyle={{ color: "red" }}>
                  ENGINEERING
                </NavLink>
                <NavLink to="/contact/" activeStyle={{ color: "red" }}>
                  CONTACT
                </NavLink>
              </ul>
            </div>
          </nav>
        </div>
        <div className={styles.contactbody}>
          <div className={styles.contacttext}>
            <h3>What would you like to talk about?</h3>
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
              <form>
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
