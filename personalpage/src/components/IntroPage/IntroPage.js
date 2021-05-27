import { useState } from "react";
import styles from "./IntroPage.module.scss";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";

const IntroPage = () => {
  const [mode, setMode] = useState(true);

  return (
    <>
      <div className={mode ? styles.mainpage : styles.mainpage2}>
        {mode ? (
          <BsSun className={styles.icons} onClick={() => setMode(false)} />
        ) : (
          <BsMoon className={styles.icons2} onClick={() => setMode(true)} />
        )}
        <h1>mayowageorge.com</h1>
        <div className={styles.links}>
          <Link to="/about" className={mode ? styles.link1 : styles.link1a}>
            <p>ABOUT</p>
          </Link>
          <Link to="/work" className={mode ? styles.link2 : styles.link2b}>
            WORK
          </Link>
          <Link
            to={{ pathname: "https://medium.com/@mayowageorge" }}
            target="_blank"
            className={mode ? styles.link3 : styles.link3b}
          >
            BLOG
          </Link>
          <Link to="/contact" className={mode ? styles.link4 : styles.link4b}>
            CONTACT
          </Link>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
