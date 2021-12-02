import React from "react";
import "./Home.scss";
import Product from "../Produtos/Produtos";
import Carousel from "react-bootstrap/Carousel";



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* <div className="home__image"> */}
        <Carousel>
  <Carousel.Item>
  <section>
    <Product
            id="12321341"
            
            price={759.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Qz7rl%2B5RL._SL1500_.jpg"
            title="HP 14 8th Gen Intel Core i5 Processor 14-inch Thin and Light Laptop , 14q cs0017TU"
            rating={4}
          />
         
          <Product
            id="12321351"
            title="OPPO A12 (Blue, 3GB RAM, 32GB Storage) With No Cost EMI/Additional"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg"
            rating={5}
          />
          <Product
            id="12321361"
            title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 "
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vw4dDvP4L._SL1500_.jpg"
          />
    </section>
  </Carousel.Item>
  <Carousel.Item>
    <section>
    <Product
            id="12321381"
            title="Casio Edifice Analog Blue Dial Men's Watch - EFR-552GL-2AVUDF (EX358)"
            price={40.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71girhyQcJL._UL1100_.jpg"
          />
          <Product
            id="12321371"
            title="XBOOM Go PL5 Portable Bluetooth Speaker with Meridian Audio Technology"
            price={25.99}
            image="https://www.lg.com/us/images/home-audio/md07500093/gallery/desktop-01.jpg"
            rating={5}
          />
          <Product
            id="12321391"
            title="Sketchfab Extra bass Headphones Over The Ear Headset with Deep bass (Red)"
            price={58.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41rBUEf16jL.jpg"
          />
    </section>
   
  </Carousel.Item>
 
</Carousel>
          
       {/*  </div> */}
        <div className="categorias">
          <h2>Produtos por categorias</h2>
        </div>
        
        <div className="home__row">
        
          <Product
            id="12321341"
            title="HP 14 8th Gen Intel Core i5 Processor 14-inch Thin and Light Laptop , 14q cs0017TU"
            price={759.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Qz7rl%2B5RL._SL1500_.jpg"
            rating={4}
          />
         
          <Product
            id="12321351"
            title="OPPO A12 (Blue, 3GB RAM, 32GB Storage) With No Cost EMI/Additional"
            price={34.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71bp9IpcK-L._SX522_.jpg"
            rating={5}
          />
          <Product
            id="12321361"
            title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 "
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vw4dDvP4L._SL1500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12321381"
            title="Casio Edifice Analog Blue Dial Men's Watch - EFR-552GL-2AVUDF (EX358)"
            price={40.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71girhyQcJL._UL1100_.jpg"
          />
          <Product
            id="12321371"
            title="XBOOM Go PL5 Portable Bluetooth Speaker with Meridian Audio Technology"
            price={25.99}
            image="https://www.lg.com/us/images/home-audio/md07500093/gallery/desktop-01.jpg"
            rating={5}
          />
          <Product
            id="12321391"
            title="Sketchfab Extra bass Headphones Over The Ear Headset with Deep bass (Red)"
            price={58.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41rBUEf16jL.jpg"
          />
        </div>


        </div>
      </div>
    
  );
}

export default Home;
