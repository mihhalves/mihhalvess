import  "./services.scss"
import {motion, useInView} from  "framer-motion"
import React, { useRef } from "react";

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition: {
            duration:1,
            staggerChildren: 0.1,
        },

    },
};

const Services = () => {

const ref = useRef()

const isInView = useInView(ref, {margin:"-100px"})

  return( 
  <motion.div className="services" 
  variants={variants} 
  initial="initial" 
//   animate="animate"
// whileInView="animate"
  ref={ref}
  animate={isInView && "animate"}
  >
    <motion.div className="textContainer" variants={variants}>
        <p>Empoderando Marcas com  <br/>
        Inovação e Criatividade</p>
        <hr/>
    </motion.div>
    <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="/people.webp" alt="" />
        <h1>
            <motion.b whileHover={{color:"orange"}}>Raimundas</motion.b> conectando
        </h1>
        </div>
       <div className="title">
       <h1>
        <motion.b whileHover={{color:"orange"}}>histórias</motion.b> ao digital.
        </h1>
          
        <button> Fale Conosco</button>
        </div>
        
    </motion.div>
    <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Criação de Sites</h2>
            <p>Acreditamos que cada marca tem uma história única para contar. Por isso, trabalhamos lado a lado com nossos clientes,
             entendendo suas necessidades e objetivos, para desenvolver campanhas que não apenas atinjam, mas superem suas expectativas.</p>
             <button>Fale conosco</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Criação da Marca</h2>
            <p>A identidade da sua marca é o que a diferencia e comunica seus valores ao público. No Raimundas, trabalhamos em cada aspecto da 
                criação da marca — desde o design do logotipo até a definição de uma paleta de cores e estilo visual únicos. Nosso objetivo é construir uma identidade forte e memorável que reflita a essência do seu negócio.</p>
             <button>Fale conosco</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
            <h2>Gerenciamento de Mídias Sociais</h2>
            <p>Administramos suas redes sociais de forma estratégica, criando conteúdo envolvente e interativo que aumenta o alcance e 
                engajamento da sua marca. Além de planejar e criar postagens, acompanhamos os resultados de cada campanha e ajustamos as estratégias para garantir que seu público esteja sempre conectado com o melhor da sua marca.</p>
             <button>Fale conosco</button>
        </motion.div>
    </motion.div>
  </motion.div>
)
}

export default Services