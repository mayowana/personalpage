import styles from "./Marketing.module.scss";
import logo from "../media/pagelogo.png";

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
            <h2>Marketing that works,<br></br> from Strategy to Execution</h2>
            <p>
              I'm a full-stack marketer that understands Product, Digital,
              Content and Growth marketing, and how to make them work for your business.
            </p>
          </div>
          <div className={styles.buffer}></div>
          </div>
        </header>
        <section>
            <div></div>
            <div></div>
        </section>
      </div>
    </>
  );
};

export default Marketing;
