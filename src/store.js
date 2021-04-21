import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { 
    shopListReducer, 
    shopDetailsReducer, 
    shopReviewCreateReducer, 
    shopTopRatedReducer } from './reducers/shopReducers'

import { 
    productListReducer, 
    productDetailsReducer, 
    productDeleteReducer, 
    productCreateReducer, 
    productUpdateReducer, 
    productReviewCreateReducer, 
    productTopRatedReducer } from './reducers/productReducers'

import { cartReducer } from './reducers/cartReducers'

import { 
    userLoginReducer, 
    userRegisterReducer, 
    userDetailsReducer, 
    userUpdateProfileReducer, 
    userListReducer, 
    userDeleteReducer, 
    userUpdateReducer } from './reducers/userReducers'

import { 
    orderCreateReducer, 
    orderDetailsReducer, 
    orderPayReducer, 
    orderListMyReducer, 
    orderListReducer, 
    orderDeliverReducer } from './reducers/orderReducers'

const reducer = combineReducers({
    shopList: shopListReducer,
    shopDetails: shopDetailsReducer,
    shopReviewCreate: shopReviewCreateReducer,
    shopTopRated: shopTopRatedReducer,

    cart: cartReducer,

    orderCreate: orderCreateReducer,
    orderDetails: orderDetailsReducer,
    orderPay: orderPayReducer,
    orderListMy: orderListMyReducer,
    orderList: orderListReducer,
    orderDeliver: orderDeliverReducer,

    productList: productListReducer,
    productDetails: productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,
    productReviewCreate: productReviewCreateReducer,
    productTopRated: productTopRatedReducer,

    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails: userDetailsReducer,
    userUpdateProfile: userUpdateProfileReducer,
    userList: userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
})

const cartItemsFromStorage = localStorage.getItem('cartItems') ? 
    JSON.parse(localStorage.getItem('cartItems')) : []


const userInfoFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const initialState = {
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage },
}


const middleware = [thunk]

const store = createStore(reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware)))

export default store  