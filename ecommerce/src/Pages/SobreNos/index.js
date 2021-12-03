
import "../../Pages/SobreNos/style.scss"
import Header from "../../components/Header/Header";
import foto from "../../Pages/SobreNos/img/sobrenos.jpg"
import Footer from "../../components/Footer/Footer";
import Descricao from "../../components/Descricao";
import Cards from "../../components/Cards/index";
//jsx-a11y/alt-text
// eslint-disable-next-line




function SobreNos() {



  return (
    
    <div className="App">
      
      <Header />
      <img class="imagem" src={foto}/>
      <Descricao/>
      <Cards/>
      <Footer />
    </div>    
  );
}

export default SobreNos;
