import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from './action.type'

const initialState = {
    usersListLoading: false,
    usersListError: false,
    usersList: [],
    productsListLoading: false,
    productsListError: false,
    productsList: []
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
        default: {
            return state
        }
    }
}