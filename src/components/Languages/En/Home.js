import React from "react";
import { Card, Button, CardGroup, CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom'



const Home = () => {

    return (
        <div className="card">
            <div className="mb-3">
                <CardGroup className="text-center">
                    <Card className="card text-center" style={{ width: '5rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-premium/simpatico-disegno-alfabeto-inglese-per-bambini-divertente-collezione-di-lettere-dino-colorate-abc_308665-1387.jpg" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./alphabet">Alphabet</Button>
                        </CardBody>
                    </Card>
                    <Card className="card text-center" style={{ width: '5rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/raccolta-di-diversi-animali-domestici_23-2148511801.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./animals">Animals</Button>
                        </CardBody>
                    </Card>
                    <Card className="card" style={{ width: '5rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/collezione-di-piante-d-appartamento-disegnata-a-mano_23-2148910155.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./plants">Plants</Button>
                        </CardBody>
                    </Card>
                    <Card className="card" style={{ width: '5rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/insieme-di-vettori-di-raccolta-piatti-illustrazione-di-vari-frutti_41066-3874.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./food">Fruit</Button>
                        </CardBody>
                    </Card>
                </CardGroup>

                <CardGroup className="text-center">
                    <Card className="card text-center" style={{ width: '5rem' }}>
                        <Card.Body>
                        <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/pulsanti-del-sito-web-con-i-numeri_1083-85.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                        <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./numbers">Numbers</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card text-center" style={{ width: '5rem' }}>
                       <Card.Body> 
                        <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/un-insieme-di-stoffa-diversa-su-sfondo-bianco_1308-98525.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                        <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./clothes"> Clothes</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card text-center" style={{ width: '5rem' }}>
                        <Card.Body>
                        <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/illustrazione-disegnata-a-mano-del-fumetto-del-piccolo-ragazzo-asiatico_23-2150445628.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                        <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./partOfTheBody">Part of the body</Button>
                        </Card.Body>
                    </Card>
                    <Card className="card text-center" style={{ width: '5rem' }}>
                        <Card.Body>
                        <Card.Img className="image" variant="top" src="https://img.freepik.com/vettori-gratuito/progettazione-mezzi-di-trasporto_1126-205.jpg?ga=GA1.1.1519934233.1748187626&semt=ais_hybrid&w=740" />
                        <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="./vehicles">Vehicles</Button>
                        </Card.Body>
                        </Card>
                </CardGroup>
            </div>

        </div>
    );
}

export default Home;