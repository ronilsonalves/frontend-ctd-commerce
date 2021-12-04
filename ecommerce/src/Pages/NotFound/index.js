import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/Header';
/* import { Helmet } from 'react-helmet'; */
import './notfound.scss';
import Footer from '../../components/Footer/Footer';

const NotFound = () => {
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

 /*  setTimeout(() => {
    navigate('/');
  }, 5000);
 */
  return (
    <>
    <Header />
      {/* <Helmet>
        <title>CTDCOMMERCE | 404</title>
      </Helmet> */}
      
      <img
                className="notfound"
                src="https://www.miguelsantiago.com.br/wp-content/uploads/2019/03/404-SVG-Animated-Page-Concept-1024x580.png"
                alt="Pagina_nao–encontrada"
              />

    <Footer />
    </>
  )
}
export default NotFound;