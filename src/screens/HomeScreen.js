import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Shop from '../components/Shop'
import Loader from '../components/Loader'
import Message from '../components/Message'
import PaginateShop from '../components/PaginateShop'
import ShopCarousel from '../components/ShopCarousel'
import { listShops } from '../actions/shopActions'
import SearchShop from '../components/SearchShop'



function HomeScreen(history) {
    const dispatch = useDispatch()
    const shopList = useSelector(state => state.shopList)
    const { error, loading, shops, page, pages } = shopList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listShops(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ShopCarousel /> }

            <h2>Latest Shops</h2>
            <div> <br /> </div>
            <SearchShop />
            {loading ?  <Loader />
                :  error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {shops.map(shop => (
                                <Col key={shop._id} sm={12} md={6} lg={4} xl={3}>
                                    <Shop shop={shop} />
                                </Col>
                            ))}
                        </Row>
                        <PaginateShop page={pages} pages={pages} keyword={keyword} />
                    </div>
            }
            
        </div>
    )
}

export default HomeScreen
