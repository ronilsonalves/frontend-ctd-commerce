import useAPIGIT from "../../hooks/useAPIGIT";
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function UsersCard(user) {
    console.log(user)
    const userData = useAPIGIT(`${user.integrante}`)
      
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={userData.avatar_url} />
                <Card.Body>
                    <Card.Title>{userData.name}</Card.Title>
                    <Card.Text>
                        {userData.bio}
                    </Card.Text>
                    <Link to ={userData.blog}>
                    <Button variant="primary">Go somewhere</Button>
                    </Link>
                </Card.Body>
            </Card>

        </>
    )
}