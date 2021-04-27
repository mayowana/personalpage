import styles from "./Marketing.module.scss";
import logo from "../media/pagelogo.png";
import pic1 from "../media/pic2.jpg";
import pic3 from '../media/pic3.jpeg';
import pic5 from '../media/pic5.jpeg';
import pic6 from '../media/pic6.png';
import pic7 from '../media/pic7.jpg';
import nobs from '../media/360nobs10.png';
import google from '../media/google10.png';
import lenovo from '../media/lenovo10.png';
import neu from '../media/neu10.png';
import promasidor from '../media/promasidor10.png';
import samsung from '../media/samsung10.png';
import tecno from '../media/tecno10.png';
import riby from '../media/riby10.png';



const Marketing = () => {
  return (
    <>
      <div>
        <header className={styles.header}>
          <nav>
            <div className={styles.logobox}>
              <img src={logo} alt="logo"></img>
            </div>
            <div>
              <ul className={styles.navlist}>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORK</li>
              </ul>
            </div>
          </nav>
          <div className={styles.hero}>
            <div className={styles.herotext}>
              <h2>
                Marketing that works,<br></br> from Strategy to Execution.
              </h2>
              <p>
                I'm a full-stack marketer with expertise in Product, Digital,
                Content and Growth marketing, and how to make them work for your
                business.
              </p>
            </div>
            <div className={styles.buffer}></div>
          </div>
        </header>
        <section className={styles.about}>
          <img src={pic1} alt="marketing audience"></img>

          <div className={styles.abouttext}>
            <h3>What you sell matters. How you sell it matters more.</h3>
            <p>
              In today's fast-moving world, there are numerous brands vying for
              the attention of the same audience you're trying to reach.
              <br></br>
              <br></br>Success in marketing requires understanding your
              customer, and creating a unique experience for them. You need
              skilled marketers to carry out these plans, and that's where I
              come in.
            </p>
          </div>
        </section>

        <section className={styles.skills}>
          <h3>A bouquet of valuable skills, just for you.</h3>
          <p>
            With over 10 years of experience in Marketing, I have valuable
            experience and skills in the following:
          </p>
          <div className={styles.skillcards}>
            <div className={styles.skillcard}>
              <h4>Content Marketing</h4>
              <img src={pic3} alt=""></img>
              <p>
                With over 6 years of experience in media, I'm skilled at using
                storytelling to attract and engage customers.
              </p>
            </div>
            <div className={styles.skillcard}>
              <h4>Digital Marketing</h4>
              <img src={pic5} alt=""></img>
              <p>
                In today's increasingly digital world, digital marketing is very
                key. I have created and executed successful social media, email
                and PPC marketing campaigns to drive paid growth.{" "}
              </p>
            </div>
            <div className={styles.skillcard}>
              <h4>Product Marketing</h4>
              <img src={pic6} alt=""></img>
              <p>
                Having successfully launched and worked with B2B and B2C SaaS
                products, I have experience driving product demand and adoption
                through messaging and product value.
              </p>
            </div>
            <div className={styles.skillcard}>
              <h4>Growth Marketing</h4>
              <img src={pic7} alt=""></img>
              <p>
                I'm experienced in constantly testing and experimenting multiple
                channels for customer acquisition and retention to ensure user
                and revenue growth at scale.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.history}>
                <h3>I've been honored to work with the following brands in multiple capacities: </h3>
            <div className={styles.clients}>
                <img src={nobs} alt='360Nobs'></img>
                <img src={google} alt='Google'></img>
                <img src={lenovo} alt='Lenovo'></img>
                <img src={neu} alt='neu'></img>
                <img src={promasidor} alt='Promasidor'></img>
                <img src={riby} alt='Riby'></img>
                <img src={samsung} alt='Samsung'></img>
                <img src={tecno} alt='Tecno'></img>
            </div>
        </section>
      </div>
    </>
  );
};

export default Marketing;
