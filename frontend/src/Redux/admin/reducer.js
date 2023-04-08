import {
    GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_ERROR, ADD_PRODUCTS_LOADING, ADD_PRODUCTS_SUCCESS,
    UPDATE_PRODUCTS_ERROR, UPDATE_PRODUCTS_LOADING, UPDATE_PRODUCTS_SUCCESS
} from './action.type'

const initialState = {
    usersListLoading: false,
    usersListError: false,
    usersList: [],
    productsListLoading: false,
    productsListError: false,
    productsList: [],
    addProductLoading: false,
    addProductError: false,
    addProductResult: '',
    updateProductLoading: false,
    updateProductError: false,
    updateProductResult: ''
}

export const adminReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_USERS_LOADING: {
            return {
                ...state,
                usersListLoading: true,
                usersListError: false,
            }
        }
        case GET_USERS_ERROR: {
            return {
                ...state,
                usersListLoading: false,
                usersListError: true,
            }
        }
        case GET_USERS_SUCCESS: {
            return {
                ...state,
                usersListLoading: false,
                usersList: payload
            }
        }
        case GET_PRODUCTS_ERROR: {
            return {
                ...state,
                productsListLoading: false,
                productsListError: true
            }
        }
        case GET_PRODUCTS_LOADING: {
            return {
                ...state,
                productsListLoading: true,
                productsListError: false
            }
        }
        case GET_PRODUCTS_SUCCESS: {
            return {
                ...state,
                productsListLoading: false,
                productsList: payload
            }
        }
        case ADD_PRODUCTS_ERROR: {
            return {
                ...state,
                addProductLoading: false,
                addProductError: true,
            }
        }
        case ADD_PRODUCTS_LOADING: {
            return {
                ...state,
                addProductLoading: true,
                addProductError: false,
            }
        }
        case ADD_PRODUCTS_SUCCESS: {
            return {
                ...state,
                addProductLoading: false,
                addProductResult: payload
            }
        }
        case UPDATE_PRODUCTS_ERROR: {
            return {
                ...state,
                updateProductLoading: false,
                updateProductError: true
            }
        }
        case UPDATE_PRODUCTS_LOADING: {
            return {
                ...state,
                updateProductLoading: true,
                updateProductError: false
            }
        }
        case UPDATE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                updateProductLoading: false,
                updateProductResult: payload
            }
        }
        default: {
            return state
        }
    }
}