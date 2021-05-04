import styles from "./Markabout.module.scss";
import logo from "../../media/pagelogo.png";
import bio1 from "../../media/bio1.png";
import { Link } from "react-router-dom";

const Markabout = () => {
  return (
    <>
      <div>
        <header className={styles.abouthead}>
          <nav>
            <div className={styles.logobox}>
              <img src={logo} alt="logo"></img>
            </div>
            <div>
              <ul className={styles.navlist}>
                <Link to={Markabout}>ABOUT</Link>
                <li>SERVICES</li>
                <li>WORK</li>
              </ul>
            </div>
          </nav>

          <div className={styles.abouttext}>
            <h2>What you sell matters. How you sell it matters more.</h2>
            <p>
              In today's fast-moving world, there are numerous brands vying for
              the attention of the same audience you're trying to reach.
              <br></br>
              <br></br>Success in marketing requires understanding your
              audience, and creating a unique experience for them. You need
              skilled marketers for this, and that's where I can help.
            </p>
          </div>
        </header>

        <section>
          <div className={styles.bio}>
            <div className={styles.biobox}>
              <img src={bio1} alt="myself"></img>
            </div>
            <div className={styles.textbox}>
              <p>
                My name is Oluwamayowa George, a marketing professional with 10
                years of experience delivering results.
              </p>
              <p>
                I've worked in multiple industries from fintech to media to B2B
                SaaS and have developed expertise in Content, Digital, Product
                and Growth Marketing.
              </p>
              <p>
                I am very data- and tech-driven. I believe in using data and
                marketing automation and technology tools to grow and scale
                faster at an increased efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.edusection}>
            <div className={styles.edubox}>
                <h3>Education and Certifications</h3>
                <div className={styles.edu}>
                    <ul>
                        <li>B.Sc Anatomy, University of Ilorin, 2011.</li>
                        <li>M.Sc Anatomy, University of Lagos, 2014.</li>
                        <li>Google Adwords, 2016. </li>
                        <li>Advanced Google Analytics, 2019.</li>
                        <li>Google Fundamentals of Digital Marketing, 2019.</li>
                        <li>Microsoft Advertising Certified Professional, 2021.</li>
                    </ul>
                </div>
                <div className={styles.resume}>
                    <a href='/'><button>DOWNLOAD MY RESUME</button></a>
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Markabout;
