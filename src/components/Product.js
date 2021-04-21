import React from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Product({ product }) {
    return (
        <Card className="my-3 p-3 rounded">
            <ListGroup.Item className="text-center py-2">
                <Link to={`/product/${product._id}`}>
                    <Card.Img src={product.image} />
                </Link>
            </ListGroup.Item>
            
            <ListGroup variant="flush">
                <Link style={{ textDecoration: 'none', color: 'black' }} to='/vendor'>
                    <ListGroup.Item className="text-center py-2">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`/product/${product._id}`}>
                            <Card.Title as="h6">
                                <strong>{product.name}</strong>
                            </Card.Title>
                        </Link>

                        <Card.Text as="div">
                            <div >
                                <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                            </div>
                        </Card.Text>
                    </ListGroup.Item>
                </Link>
            </ListGroup>
        </Card>

    )
}

export default Product
