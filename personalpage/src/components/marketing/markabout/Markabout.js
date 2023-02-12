import styles from "./Markabout.module.scss";
import { Link } from "react-router-dom";
import Themecontext from "../../themecontext/Themecontext";

const Markabout = () => {
  return (
    <Themecontext.Consumer>
      {(mode) => (
        <div mode={mode}>
          <header className={mode ? styles.abouthead : styles.abouthead1}>
            <nav className={styles.aboutnav}>
              <Link to="/" className={mode ? styles.logobox : styles.logobox1}>
                <p>Back to home</p>
              </Link>
            </nav>

            <div className={mode ? styles.abouttext : styles.abouttext1}>
              <h2 className={mode ? styles.headone : styles.headone1}>
                Driving business success through data-driven strategies.
              </h2>
              <p>
                Growth marketing is a data-driven approach to increasing a
                company's revenue and growth. It's a modern and effective way of
                marketing that goes beyond traditional marketing methods,
                focused on finding and exploiting the most effective marketing
                channels and tactics for a business.
              </p>
              <p>
                Growth marketing is all about experimentation and continous
                optimization. The goal is to find what works best for your
                business and to constantly refine and improve your business
                strategies to drive even better results. This means regularly
                testing and iterating on various marketing tactics, using data
                and analytics to inform your decision-making and adjust your
                approach as needed.
              </p>
              <p>
                The perfect growth marketer is a data-driven and
                results-oriented individual who possesses a combination of
                analytical, strategic and creative skills. They have a deep
                understanding of consumer behavious and the marketing channels
                and tactics that drive engagemnent and conversions. They are
                continuously experimenting and testing new strategies, using
                data and analytics to inform their decision-making and optimize
                their approach. They possess excellent communication and
                collaboration skills and are able to work effectively with
                cross-functional teams to drive business success.
              </p>

              <h2 className={styles.headtwo}>So, me.</h2>

              <p>
                With over 12 years of experience in marketing, I bring a wealth
                of expertise and a passion for driving growth to the table. My
                skills in growth marketing, demand generation, and content
                strategy, along with my data-driven approach, have made me a
                go-to strategist for organizations looking to achieve business
                success.
              </p>
              <p>
                I have a proven track record of developing and executing
                effective go-to-market strategies that drive growth and deliver
                measurable results. My experience in leveraging marketing
                technology has allowed me to create campaigns and programs that
                engage audiences, generate demand, and deliver real results.
              </p>
              <p>
                I bring a wealth of experience in multiple industries, including
                fintech and real estate, allowing me to bring a unique
                perspective and understanding of various markets and consumer
                behavior. I am a strategic thinker with a passion for driving
                growth, and I am dedicated to staying at the forefront of
                marketing trends and technology.
              </p>
              <p>
                With excellent communication and collaboration skills, I am able
                to work effectively with cross-functional teams to drive
                business success. My experience in multiple industries and my
                passion for growth marketing make me an asset to any
                organization looking to drive business success and achieve their
                goals.
              </p>
              <h2>Education and Certifications</h2>
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
                <a href="https://drive.google.com/file/d/1GHei-cjx7lP2OOdQdhJcY5Gy5kd8zkoj/view?usp=sharing">
                  <button>VIEW MY RESUME</button>
                </a>
              </div>
            </div>
          </header>
        </div>
      )}
    </Themecontext.Consumer>
  );
};

export default Markabout;
