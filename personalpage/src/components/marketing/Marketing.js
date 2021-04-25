import styles from "./Marketing.module.scss";
import logo from "../media/pagelogo.png";
import pic1 from "../media/pic2.jpg";

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
          <h3>What I bring to the table</h3>
          <p>
            With over 10 years of experience in Marketing, I have valuable
            experience and skills in the following:
          </p>
          <div>
            <div>
              <h4>Content Marketing</h4>
              <img></img>
              <p></p>
            </div>
            <div>
              <h4></h4>
              <img></img>
              <p></p>
            </div>
            <div>
              <h4></h4>
              <img></img>
              <p></p>
            </div>
            <div>
              <h4></h4>
              <img></img>
              <p></p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Marketing;
