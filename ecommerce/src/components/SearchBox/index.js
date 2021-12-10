import { useNavigate } from "react-router";
import { Formik, Form, Field } from "formik";
import { Container } from "react-bootstrap";

const SearchBox = () => {
    let paginaDePesquisa = useNavigate();

    function handleSubmit(values) {
        console.log(values)
        if (values.searchParams === '') {
            console.log("Valores de pesquisa vazios")
        } else {
            paginaDePesquisa(`/busca/${values.searchParams}`);
        }
    }


    return (
        <>
            <section id="search-box">
                <Container className="is-box">
                    <Formik initialValues={{ searchParams: '' }} onSubmit={handleSubmit}>
                        <Form>
                            <div className="form-floating">
                                <Field type="text" className="form-control" id="searchParams" name="searchParams" placeholder="Buscar no CTD Commerce..." />
                                <label htmlFor="searchParams">Buscar no CTD Commerce...</label>
                            </div>
                        </Form>
                    </Formik>
                </Container>
            </section>
        </>
    )
}


export default SearchBox;