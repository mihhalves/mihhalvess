import "./raimundas.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Raimundas = () => {
  return (
    <div className="raimundas">
      <div className="wrapper">
        <motion.div 
          className="textContainer"
          variants={textVariants} 
          initial="initial" 
          animate="animate"
        >
          <motion.h2 variants={textVariants}>MARKETING DIGITAL</motion.h2>
          <motion.h1 variants={textVariants}>Desperte todo o potencial da sua marca!</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>Fale Conosco</motion.button>
            <motion.button variants={textVariants}>Portifolio</motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
        RAIMUNDAS
      </motion.div>
      <div className="imageContainer">
        <img src="/michelle.png" alt=""/>
      </div>
    </div>
  );
};

export default Raimundas;
