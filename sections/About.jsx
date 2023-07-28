'use client';
import { motion } from "framer-motion";
import { TypingText } from '../components'
import styles from "../styles/index";
import { fadeIn, staggerContainer } from '../utils/motion'

const About = () => (
  <section className={`relative ${styles.paddings} z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div 
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} ${styles.flexCenter} mx-auto flex-col`}
    >
      <TypingText title="| About Marketing & Social Communication" textStyles="text-center" />
      <motion.p 
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Marketing combined with <span className="font-extrabold text-white">social communication</span> forms a powerful synergy, utilizing <span className="font-extrabold text-white">social media's</span> reach to amplify marketing efforts. It involves engaging with the audience, gaining insights, and <span className="font-extrabold text-white">adapting swiftly</span> to changing demands. This approach fosters brand advocacy and lasting connections with customers, ensuring a <span className="font-extrabold text-white">competitive edge</span> in the digital landscape.
      </motion.p>

      <motion.img 
        variants={fadeIn('up', 'tween', 1, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
