import "./app.scss"
import Navbar from "./components/navbar/Navbar";
import "./app.scss"
import Raimundas from "./components/raimundas/Raimundas"


const App = () => {
  return <div>
    <section id="Início"> 
      <Navbar/>
      <Raimundas/>
      </section>
    <section id="Sobre nós"> Sobre nós </section>
    <section id="Serviços"> Serviços </section>
    <section id="Contato"> Contato</section>
     
  </div>;
 

};

export default App;
