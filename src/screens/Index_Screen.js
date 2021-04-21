import React from 'react'
//import { ImageBackground } from 'react-native'
import { Row, Col, Image, ListGroup, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function Index_Screen() {
    return (
        <div>
            <div className="text-center py-2">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/shops'><h4>Welcome to AfroShopMe</h4></Link>
                <h6>Find your AfroShop and more ...</h6>
            </div>

            <Row>
                <Col md={6}>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/search_shop'>
                                <ListGroup.Item className="text-center py-2">
                                    <h4>Looking for a special shop?</h4>
                                    <Image src="../images/looking_shop.png" alt="looking_shop" fluid />
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/products'>
                                <ListGroup.Item className="text-center py-2">
                                    <h4>Or just start shopping here.</h4>
                                    <Image src="../images/shop.png" alt="shop" fluid />
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>
                </Col>

                <Col md={6}>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/vendor'>
                                <ListGroup.Item className="text-center py-2">
                                    <h4>Open your own Store...</h4>
                                    <Image src="../images/shop_open.png" alt="shop_open" fluid />
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>    
                </Col>

                <Col md={6}>
                    <Card className="my-3 p-3 rounded">
                        <ListGroup variant="flush">
                            <Link style={{ textDecoration: 'none', color: 'black' }} to='/business'>
                                <ListGroup.Item className="text-center py-2">
                                    <h4>And grow your business.</h4>
                                    <Image src="../images/diversity.png" alt="diversity" fluid />
                                </ListGroup.Item>
                            </Link>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>

        </div>
    )
}

export default Index_Screen
