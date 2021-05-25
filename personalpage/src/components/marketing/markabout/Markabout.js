import styles from "./Markabout.module.scss";
import { Link } from "react-router-dom";

const Markabout = () => {
  return (
    <>
      <div>
        <header className={styles.abouthead}>
          <nav>
            <Link to="/" className={styles.logobox}>
              <p>Back to home</p>
            </Link>
          </nav>

          <div className={styles.abouttext}>
            <h2>Growth is more than marketing.</h2>
            <p>
              Growth is everything you do to get new customers, keep them using
              your product, and convert them into ambassadors of your business.
            </p>
            <p>
              Succesful growth requires cross-functional collaboration between
              Marketing, Product, Customer Success, Salaes and Engineering.
            </p>
            <p>
              You would also need a Growth expert - someone with the ability to
              understand the peculiarities of your customer, and create
              experiments and tests multiple strategies to make sure you're
              growing at the right pace.
            </p>

            <h2>Who I am.</h2>

            <p>
              My name is Oluwamayowa George, a marketing professional with 10
              years of experience helping companies grow.
            </p>
            <p>
              I've worked in multiple industries from fintech to media to B2B
              SaaS and have developed expertise in Content, Digital, Product and
              Growth Marketing.
            </p>
            <p>
              I am very data- and tech-driven. I believe in using data and
              marketing automation and technology tools to grow and scale faster
              at an increased efficiency.
            </p>
            <p>
              I have worked with numerous tools over my career, and I am
              proficient in Google Ads, Google Analytics, Mixpanel, Zapier,
              CRMs, and more. I also have technical / programming skills,
              including HTML5, CSS3, JavaScript, React & SQL.
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
              <a href="https://drive.google.com/file/d/17NFXrlKMAdxHw69zTmUIhFVf1eEHqoc8/view?usp=sharing">
                <button>VIEW MY RESUME</button>
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Markabout;
