
import { CarrinhoContext } from '../../contexts/Carrinho';
import { useContext, useState } from 'react';
import { Container, ListGroup, Card, Button } from 'react-bootstrap';
import { Formik, Field, Form } from 'formik';


const Carrinho = () => {
    const { produtosCarrinho, adicionarCarrinho, removerDoCarrinho } = useContext(CarrinhoContext);
    let todosOsProdutos = [...produtosCarrinho]

    const [quantidade, setQuantidade] = useState(1)

    const handleAdicionarCarrinho = (produto) => {
        produto.quantidade = quantidade
        adicionarCarrinho(produto)
    }
    
    // function atualizar (values,produto){
        //     console.log(produto)
        //     setQuantidade(values.qtd)
        //     handleAdicionarCarrinho(produto)
        // }
        
    let valorTotal= 0
    return (
        <>
            <ListGroup>
                {todosOsProdutos.length !== 0 && (
                    todosOsProdutos.map((produto) => (
                        <ListGroup.Item key={produto.id} >
                            <Container>
                                <Card className="flex-row">
                                    <Card.Img style={{ width: '100px' }} className="my-50px" src={produto.image} />
                                    <Card.Body className="card-body">
                                        <Card.Title >{produto.titulo}</Card.Title>
                                        <Card.Text style={{ height: '6.50rem' }} title={produto.descricao} className="card-text">
                                            {produto.descricao >= 77 ? produto.descricao : produto.descricao.substring(0, 76) + "..."}
                                        </Card.Text>
                                        <Button variant="primary" onClick={() => { removerDoCarrinho(produto) }}
                                        >Remover do carrinho</Button>
                                    </Card.Body>
                                    <Card.Title>R${produto.preco} </Card.Title>
                                </Card>
                            </Container>
                            <p style={{display:'none'}}>{valorTotal = valorTotal + (produto.quantidade * produto.preco)}</p>
                        </ListGroup.Item>
                    ))
                )}
                <ListGroup.Item>R${valorTotal}</ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default Carrinho;