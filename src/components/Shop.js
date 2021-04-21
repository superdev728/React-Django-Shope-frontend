import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'


function Shop({ shop }) {
    return (
        <Card className="my-3 p-2 rounded">
            <Link to={`/shop/${shop._id}`}>
                <Card.Img src={shop.image} />
            </Link>

            <Card.Body>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`/shop/${shop._id}`}>
                    <Card.Title as="h7">
                        <strong>{shop.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-2">
                        <Rating value={shop.rating} color={'#f8e825'} />  
                        {`${shop.numReviews} reviews`}                                         
                    </div>

                </Card.Text>

                <Card.Text as="h6">
                    <strong>{shop.city}</strong>
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default Shop
