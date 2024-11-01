import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import "./app.scss"
import Raimundas from "./components/raimundas/Raimundas"
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Início"> 
      <Navbar/>
      <Raimundas/>
      </section>
    <section id="Sobrenos"><Parallax type="sobrenos"/></section>
    <section> Sobre nós </section>
    <section id="servicos"><Parallax type="servicos"/></section>
    <section id="Serviços"> Serviços </section>
    <section id="Contato"> Contato</section>
     
  </div>;
 

};

export default App;
