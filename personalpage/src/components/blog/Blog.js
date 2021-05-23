import styles from "./Blog.module.scss";
import logo from "../media/pagelogo.png";
import { Link, NavLink } from "react-router-dom";
import Showblog from "./showblog/showblog";

const Blog = () => {
  return (
    <>
      <div>
        <div className={styles.navbox}>
          <nav>
            <Link to="/" className={styles.logobox}>
              <img src={logo} alt="logo"></img>
            </Link>
              <ul className={styles.navlist}>
                <NavLink to="/marketing/" activeStyle={{ color: "red" }}>
                  MARKETING
                </NavLink>
                <NavLink to="/engineering/" activeStyle={{ color: "red" }}>
                  ENGINEERING
                </NavLink>
                <NavLink to="/blog/" activeStyle={{ color: "red" }}>
                  BLOG
                </NavLink>
              </ul>
          </nav>
        </div>
        <div className={styles.subscribe}>
          <h2>
            I write majorly on marketing, with a bit of technology and life
            in general. Enter your email below to subscribe.
          </h2>
          <form className={styles.subform}>
            <input
              type="text"
              placeholder="Your email address goes here."
            ></input>
            <input type="submit" value="Subscribe"></input>
          </form>
        </div>

        <div>
            <Showblog />
        </div>
      </div>
    </>
  );
};

export default Blog;
