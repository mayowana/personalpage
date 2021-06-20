import styles from "./IntroPage.module.scss";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import Themecontext from '../themecontext/Themecontext';

const IntroPage = ({setTheme}) => {

  return (
    <Themecontext.Consumer>
      {(mode) => 
      <div mode={mode} className={mode ? styles.mainpage : styles.mainpage2}>
        {mode ? (
          <BsSun className={styles.icons} onClick={setTheme}/>
        ) : (
          <BsMoon className={styles.icons2} onClick={setTheme}/>
        )}
        <h1>mayowageorge.com</h1>
        <div className={styles.links}>
          <Link to="/about" className={mode ? styles.link1 : styles.link1a}>
            ABOUT
          </Link>
          <Link to="/work" className={mode ? styles.link2 : styles.link2b}>
            WORK
          </Link>
          <Link
            to={{ pathname: "https://medium.com/@mayowageorge" }}
            target="_blank" rel="noopener"
            className={mode ? styles.link3 : styles.link3b}
          >
            BLOG
          </Link>
          <Link to="/contact" className={mode ? styles.link4 : styles.link4b}>
            CONTACT
          </Link>
        </div>
      </div>
}
    </Themecontext.Consumer>
  );
};

export default IntroPage;
