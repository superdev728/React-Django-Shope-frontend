import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import { listProducts } from '../actions/productActions'
import SearchProduct from '../components/SearchProduct'



function HomeProductScreen({history}) {
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { error, loading, products, page, pages } = productList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listProducts(keyword))

    }, [dispatch, keyword])

    return (
        <div>
            {!keyword && <ProductCarousel /> }
            
            <h2>Latest Products</h2>
            <div> <br /> </div>
            <SearchProduct />
            {loading ?  <Loader />
                :  error ? <Message variant='danger'>{error}</Message>
                    :
                    <div>
                        <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xL={2}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <Paginate page={pages} pages={pages} keyword={keyword} />
                    </div>
            }
            
        </div>
    )
}

export default HomeProductScreen
