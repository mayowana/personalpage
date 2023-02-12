import styles from "./Marketing.module.scss";
import { Link } from "react-router-dom";
import Themecontext from '../themecontext/Themecontext'
import google from '../media/google10.png';
import nobs from '../media/360nobs10.png';
import lenovo from '../media/lenovo10.png';
import neu from '../media/neu10.png'
import promasidor from '../media/promasidor10.png'
import riby from '../media/riby10.png';
import samsung from '../media/samsung10.png';
import tecno from '../media/tecno10.png';
import drugbank from '../media/drugbank.png';
import vanhack from '../media/vanhack10.png'
import GreyScaleImage from "./greyscale/greyscale";


const Marketing = () => {

  return (
    <>
    <Themecontext.Consumer>
      {(mode) =>
      <div mode = {mode} className={mode ? styles.workbody : styles.workbody1}>
        <header className={styles.header}>
          <nav className={styles.aboutnav}>
            <Link to="/" className={mode ? styles.logobox : styles.logobox1}>
              <p>Back to home</p>
            </Link>
          </nav>
          <div className={styles.hero}>
            <div className={styles.herotext}>
              <h2 className={mode ? styles.headtwo : styles.headtwo1}>A full stack marketer, at your service.</h2>
              <p>
                I'm a well-rounded marketing professional with expertise across all aspects of the marketing mix, including strategy, tactics and technology, able to develop and execute effective campaigns and programs that drive growth and achieve business objectives.
              </p>
              <h2>What I do.</h2>
              <p>
                With over 12 years of experience in Marketing, I have developed valuable
                experience and skills in the following:
              </p>
              <p>
                <strong>Content Marketing: </strong>I am able to develop and execute engaging content strategis that educate and inform target audiences, build brand awareness and drive conversions.
              </p>
              <p>
                <strong>Digital Marketing: </strong>I am skilled in the execution of campaigns and programs that reach and engage target audiences across digital channels, including social media, email, display and search.
              </p>
              <p>
                <strong>Product marketing: </strong>I am experienced in conducting market research, developing product positioning and messaging, and creating go-to-market plans that effectively introduce new products and drive sales.
              </p>
              <p>
                <strong>Growth marketing: </strong>With the use of data and experimentation, I'm able to drve growth and achieve business objectives, leveraging a wide range of marketing channels and tactics to increase engagement and conversions.
              </p>

              <h2>Who I've worked with.</h2>

              <p>I have worked with the following organizations in full-time or contract capacities:</p>

              <div>

                <GreyScaleImage src={nobs} alt="360Nobs"></GreyScaleImage>
                <GreyScaleImage src={drugbank} alt="DrugBank"></GreyScaleImage>
                <GreyScaleImage src={google} alt="Google"></GreyScaleImage>
                <GreyScaleImage src={lenovo} alt="Lenovo"></GreyScaleImage>
                <GreyScaleImage src={neu} alt="neu"></GreyScaleImage>
                <GreyScaleImage src={promasidor} alt="Promasidor"></GreyScaleImage>
                <GreyScaleImage src={riby} alt="Riby"></GreyScaleImage>
                <GreyScaleImage src={samsung} alt="Samsung"></GreyScaleImage>
                <GreyScaleImage src={tecno} alt="Tecno"></GreyScaleImage>
                <GreyScaleImage src={vanhack} alt="VanHack"></GreyScaleImage>

              </div>

              <div className={mode ? styles.buttons : styles.buttons1}>
                <Link
                  to={{ pathname: "https://www.linkedin.com/in/mayowageorge/" }}
                  target="_blank"
                  rel="noopener"
                >
                  Viewed my LinkedIn Profile
                </Link>
              </div>
            </div>
          </div>
        </header>
      </div>
      }
      </Themecontext.Consumer>
    </>
  );
};

export default Marketing;
