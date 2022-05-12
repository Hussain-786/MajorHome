import React from 'react';
import '../Styles/Process.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button, CardGroup } from 'react-bootstrap';

function Process() {
    return (
        <Container className="process-container">
            <h1 className="process-h1">Process Flow</h1>
            <CardGroup>
                <Card className="process-cards" style={{ width: '18rem' }}>
                    <center><Card.Img className="card-img" variant="top" src={require("../Images/register.png")} /></center>
                    <Card.Body>
                        <Card.Title>Register</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Register</Button>
                    </Card.Body>
                </Card>
                <Card className="process-cards" style={{ width: '18rem' }}>
                    <center><Card.Img className="card-img" variant="top" src={require("../Images/search.png")}/></center>
                    <Card.Body>
                        <Card.Title>Search</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Search</Button>
                    </Card.Body>
                </Card>
                <Card className="process-cards" style={{ width: '18rem' }}>
                    <center><Card.Img className="card-img" variant="top" src={require("../Images/done.png")} /></center>
                    <Card.Body>
                        <Card.Title>Hire</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Hire</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Container>
    );
}

export default Process;