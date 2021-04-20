import styles from "./IntroPage.module.scss";
import box1 from '../media/box1.png';
import box2 from '../media/box2.png';


const IntroPage = () => {
  return (
    <>
      <div className={styles.mainpage}>
        <h1>Hi! This is Mayowa George. Who would you like to meet?</h1>
        <div className={styles.cardbox}>
          <div className={styles.box1}>
            <img src={box1} alt=""></img>
            <h3>Content & Growth Marketer</h3>
          </div>
          <div className={styles.box2}>
          <img src={box2} alt=""></img>
            <h3>Front End Developer</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroPage;
