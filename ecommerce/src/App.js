
import "./App.scss";
import Header from "../src/components/Header/Header";
import Home from "../src/components/Home/Home";
import Footer from "../src/components/Footer/Footer";
import Rotas from "./components/Rotas/routes";



function App() {



  return (

    <div className="App">
      <Rotas/>
      <Header />
      <Home />
      <Footer />
    </div>

  );
}

export default App;
