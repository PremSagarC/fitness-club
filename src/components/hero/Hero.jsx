import React from 'react'
import Header from '../header/Header'
import './Hero.css'
import Heart from '../../assets/heart.png'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {

  const transition ={type: 'spring', duration: 3}
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id='Home'>
      <div className="blur blur-hero"></div>
      <div className='left-h'>

        <Header />
        {/* Best Add */}
        <div className="best-ad">
          <motion.div
            initial={{left: mobile ? '150px' : '200px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}>
          </motion.div>
          <span>Best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            <span className='stroke-text'>Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>
              Ideal Body
            </span>
          </div>
          <div>
          <span>
            one's ability to execute daily activities with optimal performance, endurance, and strength with the management of disease, fatigue, and stress and reduced sedentary behavior
          </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay="1"/>+
            </span>
            <span>expert couches</span>
          </div>
          <div>
          <span>
              <NumberCounter end={978} start={800} delay="2"/>+
            </span>
            <span>memebers</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={20} delay="2"/>+
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        <div className='button'>
          <button>Get Started</button>
          <button>Learn More</button>
        </div>


      </div>

      <div className='right-h'>
        <button className='r-button'>Join Now</button>

        <motion.div className="heartrate"
        initial={{right:'-2rem'}}
        transition={transition}
        whileInView={{right: '2rem'}}>
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        {/* Hero image */}
        <img src={hero_image} alt="" className="heroimage" />
        <motion.img src={hero_image_back} alt="" className="heroimageback" 
        initial={{right: '1rem'}}
        whileInView={{right:'28rem'}}
        transition={transition}/>

        {/* Calories */}
        <motion.div className="calories"
        initial={{right:'100rem'}}
        transition={transition}
        whileInView={{right: '70rem'}}>
          <img src={Calories} alt="" />
          <div>
            <span>Calories burned</span>
            <span>220 Calories</span>
          </div>
        </motion.div>

      </div>
    </div>
  )
}

export default Hero
