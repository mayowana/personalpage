import styles from "./Marketing.module.scss";
import { Link } from "react-router-dom";

const Marketing = () => {

  return (
    <>
      <div className={styles.workbody}>
        <header className={styles.header}>
          <nav className={styles.aboutnav}>
            <Link to="/" className={styles.logobox}>
              <p>Back to home</p>
            </Link>
          </nav>
          <div className={styles.hero}>
            <div className={styles.herotext}>
              <h2 className={styles.headtwo}>Designing growth that works, from strategy to execution.</h2>
              <p>
                I'm a full-stack marketer with expertise in Product, Digital,
                Content and Growth marketing as well as front-end web
                development, and the knowledge on how to make these work for
                your business.
              </p>
              <h2>What I do.</h2>
              <p>
                With over 10 years of experience in Marketing, I have valuable
                experience and skills in the following:
              </p>
              <p>
                <strong>Content Marketing: </strong>With over 6 years of
                experience in media, I'm skilled at using storytelling to
                attract and engage customers.
              </p>
              <p>
                <strong>Digital Marketing: </strong>In today's increasingly
                digital world, digital marketing is very key. I have created and
                executed successful social media, email and PPC marketing
                campaigns to drive paid growth.
              </p>
              <p>
                <strong>Product marketing: </strong>Having successfully launched
                and worked with B2B and B2C SaaS products, I have experience
                driving product demand and adoption through messaging and
                product value.
              </p>
              <p>
                <strong>Growth marketing: </strong>I'm experienced in constantly
                testing and experimenting multiple channels for customer
                acquisition and retention to ensure user and revenue growth at
                scale.
              </p>
              <p>
                <strong>Front-end development and data analysis: </strong>I
                create beautiful web pages that convert and apps that engage. I
                am also proficient at analysing data with SQL.
              </p>

              <h2>Who I've worked with.</h2>
              <ul>
                <li>360Nobs</li>
                <li>Google</li>
                <li>Lenovo</li>
                <li>neu</li>
                <li>Promasidor</li>
                <li>Riby</li>
                <li>Samsung</li>
                <li>Tecno</li>
              </ul>

              <div className={styles.buttons}>
                <Link
                  to={{ pathname: "https://github.com/mayowana" }}
                  target="_blank"
                  rel="noopener"
                >
                  GitHub
                </Link>
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/mayowageorge/" }}
                  target="_blank"
                  rel="noopener"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Marketing;
