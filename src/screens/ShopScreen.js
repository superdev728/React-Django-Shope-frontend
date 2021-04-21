import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'
import Loader from '../components/Loader'
import Message from '../components/Message'
//import axios from 'axios'
import { listShopDetails, createShopReview } from '../actions/shopActions'
//import { SHOP_CREATE_REVIEW_RESET } from '../constants/shopConstants'


function ShopScreen({ match }) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const shopDetails = useSelector(state => state.shopDetails)
    const { loading, error, shop } = shopDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const shopReviewCreate = useSelector(state => state.shopReviewCreate)
    const {
        loading: loadingShopReview,
        error: errorShopReview,
        success: successShopReview,
    } = shopReviewCreate

    useEffect(() => {
        dispatch(listShopDetails(match.params.id))
    }, [dispatch, match])


    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(createShopReview(
            match.params.id, {
            rating,
            comment
        }
        ))
    }

    return (
        <div>
            <Link style={{ textDecoration: 'none', color: 'black' }} to='/shops' className='btn btn-light my-3'>
                Go Back To Shops
            </Link>
            {loading ?
                <Loader />
                : error 
                    ? <Message variant='danger'>{error}</Message>
                    : (
                        <div>
                            <Row>
                                <Col md={6}>
                                    <Card className="my-0 p-2 rounded">
                                        <Link to={`/shop/${shop._id}`}>
                                            <Card.Img src={shop.image} />
                                        </Link>
                
                                        <Card.Body>
                                            <Card.Text className="list">
                                                <Link 
                                                style={{ textDecoration: 'none', color: 'black' }}
                                                to={{ pathname: shop.url }} 
                                                target='_blank'
                                                >  

                                                    <Button 
                                                    className='btn btn-dark' 
                                                    disabled={shop.url === ""} 
                                                    type='button'>
                                                        Enter The Shop
                                                    </Button>
                                                </Link> 
                                               {/* <Button className='btn btn-dark' disabled={product.countInStock === 0} type='button'>Enter The Shop</Button>*/}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                
                                <Col md={6}>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item>
                                            <h4 style={{ textDecoration: 'none', color: 'black' }}>{shop.name} <div><br /></div></h4>
                                            <h6><i className="fas fa-map-marker-alt fa-lg"></i> {shop.address}</h6>
                                            <h6><i className="fas fa-city fa-lg"></i> {shop.postalCode} {shop.city}</h6>
                                            <h6><i className="fas fa-globe-europe fa-lg"></i> {shop.state}</h6>
                                        </ListGroup.Item>
                
                                        <ListGroup.Item>
                                            <h6><i className="fas fa-phone fa-lg"></i> {shop.phone}</h6>
                                            <h6><i className="fas fa-door-open fa-lg"></i> {shop.hours}</h6>
                                        </ListGroup.Item>
                
                                        <ListGroup.Item>
                                            <Rating value={shop.rating} text={`${shop.numReviews} reviews`} color={'#f8e825'} />
                                        </ListGroup.Item>
                
                                        <ListGroup.Item>
                                            <h6>{shop.description}</h6>
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={6}>
                                    <h4>Reviews</h4>
                                    {shop.reviews.length === 0 && <Message variant='info'>No Reviews</Message>}

                                    <ListGroup variant='flush'>
                                        {shop.reviews.map((review) => (
                                            <ListGroup.Item key={review._id}>
                                                <strong>{review.name}</strong>
                                                <Rating value={review.rating} color='#f8e825' />
                                                <p>{review.createdAt.substring(0, 10)}</p>
                                                <p>{review.comment}</p>
                                            </ListGroup.Item>
                                        ))}

                                        <ListGroup.Item>
                                            <h4>Write a review</h4>

                                            {loadingShopReview && <Loader />}
                                            {successShopReview && <Message variant='success'>Review Submitted</Message>}
                                            {errorShopReview && <Message variant='danger'>{errorShopReview}</Message>}

                                            {userInfo ? (
                                                <Form onSubmit={submitHandler}>
                                                    <Form.Group controlId='rating'>
                                                        <Form.Label>Rating</Form.Label>
                                                        <Form.Control
                                                            as='select'
                                                            value={rating}
                                                            onChange={(e) => setRating(e.target.value)}
                                                        >
                                                            <option value=''>Select...</option>
                                                            <option value='1'>1 - Poor</option>
                                                            <option value='2'>2 - Fair</option>
                                                            <option value='3'>3 - Good</option>
                                                            <option value='4'>4 - Very Good</option>
                                                            <option value='5'>5 - Excellent</option>
                                                        </Form.Control>
                                                    </Form.Group>

                                                    <Form.Group controlId='comment'>
                                                        <Form.Label>Review</Form.Label>
                                                        <Form.Control
                                                            as='textarea'
                                                            row='5'
                                                            value={comment}
                                                            onChange={(e) => setComment(e.target.value)}
                                                        ></Form.Control>
                                                    </Form.Group>

                                                    <Button
                                                        disabled={loadingShopReview}
                                                        type='submit'
                                                        variant='primary'
                                                    >
                                                        Submit
                                                    </Button>

                                                </Form>
                                            ) : (
                                                    <Message variant='info'>Please <Link to='/login_client'>login</Link> to write a review</Message>
                                                )}
                                        </ListGroup.Item>
                                    </ListGroup>
                                </Col>
                            </Row>
                        </div>
                    )
            }
                        
        </div>
    )
}

export default ShopScreen