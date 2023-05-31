'use client';
import {motion} from 'framer-motion';
import styles from '../styles';
import { slideIn,staggerContainer,textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`%{styles.yPaddings} sm:pl-16 pl-6`}> 
  {/* //smaller devices=sm and for rest it is simple */}
    <motion.div 
      varients={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{once:false,amount:0.25}}
      // once=false means it will happen when the user scroll it, not once but whenever user scroll
      // to learn about it google framer motion documentation */}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(1.1)} className={styles.heroHeading}>
          Animeverse
        </motion.h1>
        <motion.div
          variants={textVariant(1.2)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>Ma</h1>
          <div className={styles.heroDText} h-30/>
          <h1 className={styles.heroHeading}>Ness</h1>
        </motion.div>
      </div>
      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className='relative w-full md:-mt-[20px] -mt-[12px]'
      >
        <div className='absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[20px]'/>
          <img 
            src='/ak.jpg'
            alt='cover'
            className='w-full sm:h-[480px] h-[350px] object-cover rounded-tl-[140px] z-10 relative'
          />
          <a href='#explore'>
            <div className='w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10'>
              <img 
                src='/stamp.png'
                alt='stamp'
                className='sm:w-[135px] w-[100px] sm:h-[120px] h-[100px] object-contain'
              />
            </div>
          </a>
      </motion.div>

    </motion.div>
  </section>
);

export default Hero;
