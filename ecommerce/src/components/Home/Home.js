import React from "react";
import "./Home.scss";
import Header from "../Header/Header";
import Product from "../Produtos/Produtos";
import Carousel from "react-bootstrap/Carousel";
import Footer from "../Footer/Footer";




function Home() {
  return (
    <>
    <Header/>
    <div className="home">
      <div className="home__container">
        <div className="home__image">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638485715/ecommerce/banner_yfojmd.jpg"
                alt="slide2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486266/ecommerce/eletronicos_pw440b.jpg"
                alt="slide3"
              />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 home__image"
                src="https://res.cloudinary.com/dac23jyqr/image/upload/v1638486424/ecommerce/programa_dl7bac.jpg"
                alt="slide5"
              />
            </Carousel.Item>
          </Carousel>
        </div>
    
        <div className="categorias">
          <h2>Eletrônicos</h2>
         
        </div>

        <div className="home__row">

          <Product
            id="12321381"
            title="Iphone 11 Pro Max"
            price={3499.99}
            rating={3}
            image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638384699/ecommerce/iphone_ocklvg.jpg"
          />
          <Product
            id="12321371"
            title="HP 14 8th Gen Intel Core i5 Processor 14-inch Thin and Light Laptop , 14q cs0017TU"
            price={3679.97}
            image="https://images-na.ssl-images-amazon.com/images/I/71Qz7rl%2B5RL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="12321391"
            title="TCL 108 cm (43 inches) 4K Ultra HD Certified Android Smart LED TV 43P615 "
            price={2789.67}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71vw4dDvP4L._SL1500_.jpg"
          />
     
        </div>

        <div className="categorias">
        <h2>Eletrodomésticos</h2>
          
        </div>

        <div className="home__row">
       
          <Product
            id="12321341"
            title="Geladeira Brastemp Frost Free Inox EFR-821G-1D1"
            price={3250.69}
            image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385118/ecommerce/geladeira_lzg5vm.jpg"
            rating={4}
          />

          <Product
            id="12321351"
            title="Liquidificador Mondial EFR-834G-1D1"
            price={99.99}
            image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/liquidificador_nujfud.jpg"
            rating={5}
          />
          <Product
            id="12321361"
            title="Microondas Panassonic EFR-837G-1D1" 
            price={1094.98}
            rating={4}
            image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/microondas_cl5fdf.jpg"
          />
        </div>
        <div className="categorias">
          <h2>Mais Vendidos</h2>
        </div>


        <Carousel>
          <Carousel.Item>
            <section>
              <section className="carrosel">
                <Product
              id="12321381"
              title="Iphone 11 Pro Max"
              price={3499.99}
              rating={3}
              image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638384699/ecommerce/iphone_ocklvg.jpg"
                />

                <Product
                   id="12321371"
                   title="HP 14 8th Gen Intel Core i5 Processor 14-inch Thin and Light Laptop , 14q cs0017TU"
                   price={3679.97}
                   image="https://images-na.ssl-images-amazon.com/images/I/71Qz7rl%2B5RL._SL1500_.jpg"
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
            </section>
          </Carousel.Item>
          <Carousel.Item>
            <section className="carrosel">
              <Product
                  id="12321341"
                  title="Geladeira Brastemp Frost Free Inox EFR-821G-1D1"
                  price={3250.69}
                  image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385118/ecommerce/geladeira_lzg5vm.jpg"
                  rating={4}
              />
              <Product
                    id="12321351"
                    title="Liquidificador Mondial EFR-834G-1D1"
                    price={99.99}
                    image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/liquidificador_nujfud.jpg"
                    rating={5}
              />
              <Product
                   id="12321361"
                   title="Microondas Panassonic EFR-837G-1D1" 
                   price={1094.98}
                   rating={4}
                   image="https://res.cloudinary.com/dac23jyqr/image/upload/v1638385106/ecommerce/microondas_cl5fdf.jpg"
              />
            </section>

          </Carousel.Item>

        </Carousel>
      </div>
    </div>
    <Footer/>




</>

  );
}

export default Home;



