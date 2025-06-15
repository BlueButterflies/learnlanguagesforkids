import React from "react";
import { Button, Card, CardBody, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="mb-3">
                <CardGroup className="text-center">
                    <Card className="text-center home" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/500px-Flag_of_the_United_Kingdom.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/en">English</Button>
                        </CardBody>
                    </Card>
                    <Card className="text-center home" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/it">Italian</Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center home" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/250px-Flag_of_Bulgaria.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/bg">Bulgarian</Button>
                        </CardBody>
                    </Card>
                    <Card className="text-center home" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/330px-Flag_of_Germany.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/de">German</Button>
                        </CardBody>
                    </Card>
                </CardGroup>

                {/*<CardGroup className="text-center">
                    <Card className="text-center" style={{ width: '15rem' }}>
                        <Card.Body>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/250px-Flag_of_France.svg.png" />
                            <div className="mb-2"></div>    
                            <Button variant="outline-primary" size="lg" as={Link} to="/en">French</Button>
                        </Card.Body>
                    </Card>
                    <Card className="text-center" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/250px-Flag_of_Spain.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/it">Spanish</Button>
                        </CardBody>
                    </Card>

                    <Card className="text-center" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Flag_of_Serbia.svg/250px-Flag_of_Serbia.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/bg">Serbian</Button>
                        </CardBody>
                    </Card>
                    <Card className="text-center" style={{ width: '15rem' }}>
                        <CardBody>
                            <Card.Img className="image" variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Flag_of_Croatia.svg/250px-Flag_of_Croatia.svg.png" />
                            <div className="mb-2"></div>
                            <Button variant="outline-primary" size="lg" as={Link} to="/de">Croatian</Button>
                        </CardBody>
                    </Card>
                </CardGroup>}*/}
            </div>
        </div>
    );
}

export default Home;