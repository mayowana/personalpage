import styles from "./IntroPage.module.scss";
import box1 from "../media/box1.png";
import box2 from "../media/box2.png";
import {Link} from 'react-router-dom';

const IntroPage = () => {
  return (
    <>
      <div className={styles.mainpage}>
        <h1>Hi! This is Mayowa George. Who would you like to meet?</h1>
        <div className={styles.cardbox}>
          <Link to='/marketing' className={styles.box1}>
            <img src={box1} alt=""></img>
            <h3>The Marketer</h3>
          </Link>
          <Link to='/programming' className={styles.box2}>
            <img src={box2} alt=""></img>
            <h3>The Engineer</h3>
          </Link>
        </div>
      </div>
    </> 
  );
};

export default IntroPage;
