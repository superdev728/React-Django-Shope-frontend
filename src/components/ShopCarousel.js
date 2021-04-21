import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'
import Loader from './Loader'
import Message from './Message'
import { listTopShops } from '../actions/shopActions'

function ShopCarousel() {
    const dispatch = useDispatch()

    const shopTopRated = useSelector(state => state.shopTopRated)
    const { error, loading, shops } = shopTopRated

    useEffect(() => {
        dispatch(listTopShops())
    }, [dispatch])

    return (loading ? <Loader />
        : error
            ? <Message variant='danger'>{error}</Message>
            : (
                <Carousel pause='hover' className='bg-dark'>
                    {shops.map(shop => (
                        <Carousel.Item key={shop._id}>
                            <Link to={`/shop/${shop._id}`}>
                                <Image src={shop.image} fluid />
                                <Carousel.Caption className='carousel.caption'>
                                    <h4>{shop.name} {shop.city}</h4>
                                </Carousel.Caption>
                            </Link>
                        </Carousel.Item>
                    ))}
                </Carousel>
            )

    )
}

export default ShopCarousel
