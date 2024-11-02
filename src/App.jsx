import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import "./app.scss"
import Raimundas from "./components/raimundas/Raimundas"
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";

const App = () => {
  return <div>
    <section id="Início"> 
      <Navbar/>
      <Raimundas/>
      </section>
      <section id="Services"><Parallax type="services"/></section>
      <section> <Services/> </section>
    <section id="Portifolio"><Parallax type="portifolio"/></section>
    <section> Sobre nós </section>
   
    <section id="Contato"> Contato</section>
     
  </div>;
 

};

export default App;
