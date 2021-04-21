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
    SHOP_CREATE_REVIEW_RESET,

    SHOP_TOP_REQUEST,
    SHOP_TOP_SUCCESS,
    SHOP_TOP_FAIL,
} from '../constants/shopConstants'

export const shopListReducer = (state = { shops: [] }, action) => {
    switch(action.type){
        case SHOP_LIST_REQUEST:
            return { loading: true, shops: [] }

        case SHOP_LIST_SUCCESS:
            return { 
                loading: false, 
                shops: action.payload.shops, 
                page: action.payload.shops, 
                pages: action.payload.pages 
            }

        case SHOP_LIST_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}


export const shopDetailsReducer = (state = { shop: {reviews:[]} }, action) => {
    switch(action.type){
        case SHOP_DETAILS_REQUEST:
            return { loading: true, ...state }

        case SHOP_DETAILS_SUCCESS:
            return { loading: false, shop: action.payload}

        case SHOP_DETAILS_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
} 


export const shopReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SHOP_CREATE_REVIEW_REQUEST:
            return { loading: true }

        case SHOP_CREATE_REVIEW_SUCCESS:
            return { loading: false, success: true, }

        case SHOP_CREATE_REVIEW_FAIL:
            return { loading: false, error: action.payload }

        case SHOP_CREATE_REVIEW_RESET:
            return {}

        default:
            return state
    }
}


export const shopTopRatedReducer = (state = { shops: [] }, action) => {
    switch (action.type) {
        case SHOP_TOP_REQUEST:
            return { loading: true, shops: [] }

        case SHOP_TOP_SUCCESS:
            return { loading: false, shops: action.payload, }

        case SHOP_TOP_FAIL:
            return { loading: false, error: action.payload }

        default:
            return state
    }
}