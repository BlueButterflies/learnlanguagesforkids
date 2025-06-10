import React from "react";
import { Card, Button, CardGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom'

//import Alphabet from '../En/Alphabet';  Import the Alphabet component


const Home = () => {

    return (
        <>
            <CardGroup className="mb-3">
                <Card className="card" style={{ width: '5rem'}}> 
                    <Card.Img className="image" variant="top" src="https://img.freepik.com/free-vector/english-alphabets_1308-2901.jpg" />
                    <Card.Body>
                        <Link to={"/en/alphabet"} className="btn">Alphabet</Link>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '5rem' }}>
                    <Card.Img variant="top" src="https://www.shutterstock.com/image-vector/cute-animals-collection-farm-wild-600nw-783342166.jpg" />
                    <Card.Body>
                        <Button variant="primary">Animals</Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '5rem' }}>
                    <Card.Img variant="top" src="https://cdn.firstcry.com/education/2022/11/29123342/Types-Of-Plants-In-English-For-Preschoolers-And-Kids.jpg" />
                    <Card.Body>
                        <Button variant="primary">Plants</Button>
                    </Card.Body>
                </Card> 
            </CardGroup>

            <CardGroup className="mb-3">
                <Card className="card" style={{ width: '5rem'}}> 
                    <Card.Img className="image" variant="top" src="https://img.freepik.com/free-vector/counting-numbers-with-kids-balloons_1308-71435.jpg" />
                    <Card.Body>
                        <Button variant="primary">Numbers</Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '5rem' }}>
                    <Card.Img variant="top" src="https://img.freepik.com/free-vector/colorful-baby-clothes-boy-girl-cartoon-illustration-set-hand-drawn-pants-dresses-blouses-accessories-socks-winter-jacket-cap-white-background-childrens-wardrobe-fashion-concept_74855-22418.jpg?semt=ais_hybrid&w=740" />
                    <Card.Body>
                        <Button variant="primary">Clothes</Button>
                    </Card.Body>
                </Card>
                <Card className="card" style={{ width: '5rem' }}>
                    <Card.Img variant="top" src="https://content.tinytap.it/FE258E0B-1BBE-446C-9179-3BD71A07927F/coverImage.png?ver=2" />
                    <Card.Body>
                        <Button variant="primary">Part of the body</Button>
                    </Card.Body>
                </Card> 
            </CardGroup>

        </>
    );
}

export default Home;