import { useState } from "react";
import styles from "./Marketing.module.scss";
import {Link} from 'react-router-dom'
import logo from "../media/pagelogo.png";
import pic3 from "../media/pic3.jpeg";
import pic5 from "../media/pic5.jpeg";
import pic6 from "../media/pic6.png";
import pic7 from "../media/pic7.jpg";
import nobs from "../media/360nobs10.png";
import google from "../media/google10.png";
import lenovo from "../media/lenovo10.png";
import neu from "../media/neu10.png";
import promasidor from "../media/promasidor10.png";
import samsung from "../media/samsung10.png";
import tecno from "../media/tecno10.png";
import riby from "../media/riby10.png";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import {GrMail, GrLinkedin, GrTwitter, GrInstagram} from 'react-icons/gr';

const Marketing = () => {
  const [number, setNum] = useState(0);
  function frontquote() {
    if (number < 2) {
      setNum(number + 1);
    } else {
      setNum(0);
    }
  }

  function backquote() {
    if (number > 0) {
      setNum(number - 1);
    } else {
      setNum(2);
    }
  }

  const quotes = [
    {
      person: "Oye Akideinde - co-founder, 360nobs.",
      quote:
        "Working with Mayowa was very impactful. His expertise in creating great content strategies was instrumental to our rise as one of the top media companies in Nigeria.",
    },
    {
      person: "Abolore Salami - Founder/CEO, Riby.",
      quote:
        "Mayowa worked with us between 2017 and 2020, and in that time, I was able to see his skills in marketing and sales strategy, as well as product marketing. He's a unique talent in the B2B SaaS market.",
    },
    {
      person: "Kwame Boler - CEO, neu",
      quote:
        "Mayowa is loved and revered by his colleagues and co-workers. His energetic and determined nature to create solutions makes him a valuable member to any team.",
    },
  ];

  return (
    <>
      <div>
        <header className={styles.header}>
          <nav>
            <Link to='/' className={styles.logobox}>
              <img src={logo} alt="logo"></img>
            </Link>
              <ul className={styles.navlist}>
                <Link to='/marketing/about'>ABOUT</Link>
                <Link to='/blog'>BLOG</Link>
                 <Link to='/contact'>CONTACT</Link>
              </ul>
          </nav>
          <div className={styles.hero}>
            <div className={styles.herotext}>
              <h2>
                Marketing that works, from Strategy to Execution.
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

        <section className={styles.skills}>
          <h3>WHAT I DO</h3>
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
          <h3>
            I've been honored to work with the following brands in multiple
            capacities:
          </h3>
          <div className={styles.clients}>
            <img src={nobs} alt="360Nobs"></img>
            <img src={google} alt="Google"></img>
            <img src={lenovo} alt="Lenovo"></img>
            <img src={neu} alt="neu"></img>
            <img src={promasidor} alt="Promasidor"></img>
            <img src={riby} alt="Riby"></img>
            <img src={samsung} alt="Samsung"></img>
            <img src={tecno} alt="Tecno"></img>
          </div>
        </section>

        <section className={styles.testimonials}>
          <h3>TESTIMONIALS</h3>
          <div className={styles.quotebody}>
            <AiOutlineDoubleLeft className={styles.arrow} onClick={backquote}/>
            <div className={styles.quotetext}>
              <p className={styles.part1}>{quotes[number].quote}</p>
              <p className={styles.part2}>{quotes[number].person}</p>
            </div>
            <AiOutlineDoubleRight
              className={styles.arrow}
              onClick={frontquote}
            />
          </div>
        </section>

        <footer className={styles.contact}>
                <div className={styles.contactbox}> 
                    <div className={styles.socials}>
                     <a href="mailto:themayowageorge@gmail.com"> <GrMail /></a>
                     <a href="https://www.linkedin.com/in/mayowageorge/"> <GrLinkedin /></a>
                     <a href="https://twitter.com/Wana____"> <GrTwitter /></a>
                     <a href="https://www.instagram.com/wana____/"> <GrInstagram /></a>
                    </div>
                    <div className={styles.copyright}> ©2021 Oluwamayowa George. All rights reserved. </div>
                </div>
        </footer>
      </div>
    </>
  );
};

export default Marketing;
