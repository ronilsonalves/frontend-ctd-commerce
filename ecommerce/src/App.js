import "./App.scss";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Rotas from "./components/Rotas";




function App() {



  return (
    
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <Rotas/>
      
    </div>
  );
}

export default App;
