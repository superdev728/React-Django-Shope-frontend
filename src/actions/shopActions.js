import axios from 'axios'
import { 
    SHOP_LIST_REQUEST,
    SHOP_LIST_SUCCESS,
    SHOP_LIST_FAIL,

    SHOP_DETAILS_REQUEST,
    SHOP_DETAILS_SUCCESS,
    SHOP_DETAILS_FAIL,

    SHOP_CREATE_REVIEW_REQUEST,
    SHOP_CREATE_REVIEW_SUCCESS,
    SHOP_CREATE_REVIEW_FAIL,

    SHOP_TOP_REQUEST,
    SHOP_TOP_SUCCESS,
    SHOP_TOP_FAIL,
} from '../constants/shopConstants'

export const listShops = (keyword = '') => async (dispatch) => {
    try {
        dispatch({ type: SHOP_LIST_REQUEST })

        const { data } = await axios.get(`/api/shops${keyword}`)

        dispatch({ 
            type: SHOP_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOP_LIST_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
}

export const listShopDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: SHOP_DETAILS_REQUEST })

        const { data } = await axios.get(`/api/shops/${id}`)

        dispatch({ 
            type: SHOP_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOP_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        })
    }
} 


export const createShopReview = (shopId, review) => async (dispatch, getState) => {
    try {
        dispatch({
            type: SHOP_CREATE_REVIEW_REQUEST
        })

        const {
            userLogin: { userInfo },
        } = getState()

        const config = {
            headers: {
                'Content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.post(
            `/api/shops/${shopId}/reviews_shop/`,
            review,
            config
        )
        dispatch({
            type: SHOP_CREATE_REVIEW_SUCCESS,
            payload: data,
        })



    } catch (error) {
        dispatch({
            type: SHOP_CREATE_REVIEW_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}


export const listTopShops = () => async (dispatch) => {
    try {
        dispatch({ type: SHOP_TOP_REQUEST })

        const { data } = await axios.get(`/api/shops/top_shop/`)

        dispatch({
            type: SHOP_TOP_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: SHOP_TOP_FAIL,
            payload: error.response && error.response.data.detail
                ? error.response.data.detail
                : error.message,
        })
    }
}