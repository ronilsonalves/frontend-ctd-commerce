import useAPIGIT from "../../hooks/useAPIGIT";
import { Card, Row, Container } from 'react-bootstrap';
import './index.scss';

export default function UsersCard(user) {
    console.log(user)
    const userData = useAPIGIT(`${user.integrante}`)

    return (
        <>
            <Container>
                <Row xs={1} sm={2} md={3} lg={3} className="justify-content-center">
                    <Card style={{ width: '10rem' }} id="card-git">
                        <a href={userData.html_url} target="_blank" rel="noreferrer">
                            <Card.Img variant="top" src={userData.avatar_url} id="git" />
                        </a>
                        <Card.Body>
                            <Card.Title>{userData.name}</Card.Title>
                            <Card.Text>
                                {userData.blog}
                            </Card.Text>
                            <Card.Text>
                                {userData.location}
                            </Card.Text>
                        </Card.Body>

                    </Card>
                </Row>
            </Container>
        </>
    )
}