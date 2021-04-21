import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listShops } from '../actions/shopActions'
import SearchShop from '../components/SearchShop'
import { Image } from 'react-bootstrap'


function IndexSearchScreen(history) {
    const dispatch = useDispatch()
    const shopList = useSelector(state => state.shopList)
    const { error, loading, shops } = shopList

    let keyword = history.location.search

    useEffect(() => {
        dispatch(listShops(keyword))

    }, [dispatch, keyword])

    return (
        <div class="centered" style={{
            backgroundImage: "url(images/bgr.png)",
        }}>
           {/*} <h2>Search For a Shop and More ...</h2>*/}
            <SearchShop />           
        </div>  
    )
}

export default IndexSearchScreen
