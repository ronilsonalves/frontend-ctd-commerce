import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './notfound.scss';



const NotFound = () => {

    const navigate = useNavigate();

    setTimeout(() => {
        navigate('/');
    }, 5000);

    return (
        <>

            <Helmet>
                <title>CTDCOMMERCE | NOTFOUND</title>
            </Helmet>
           
                <div className="justify-content-center ">
                    <div className="imagem"></div>
                    <img
                        className="notfound"
                        src="https://i.pinimg.com/originals/a5/4b/f8/a54bf8e8bd76d92be03bbecae09c1b69.png"
                        alt="Pagina_nao–encontrada"
                    />
                </div>
           
        </>
    )
}
export default NotFound;