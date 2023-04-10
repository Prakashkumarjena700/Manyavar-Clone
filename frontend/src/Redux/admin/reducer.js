import {
    GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,
    UPDATE_USERS_ERROR, UPDATE_USERS_LOADING, UPDATE_USERS_SUCCESS,
    DELETE_USERS_ERROR, DELETE_USERS_LOADING, DELETE_USERS_SUCCESS,
    ADD_PRODUCTS_ERROR, ADD_PRODUCTS_LOADING, ADD_PRODUCTS_SUCCESS,
    UPDATE_PRODUCTS_ERROR, UPDATE_PRODUCTS_LOADING, UPDATE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR, DELETE_PRODUCTS_LOADING, DELETE_PRODUCTS_SUCCESS,
    GET_ADMIN_ERROR, GET_ADMIN_LOADING, GET_ADMIN_SUCCESS,
} from './action.type'

const initialState = {
    usersListLoading: false,
    usersListError: false,
    usersList: [],
    updateusersLoading: false,
    updateusersError: false,
    updateusers: false,
    deleteusersLoading: false,
    deleteusersError: false,
    deleteusers: false,
    adminListLoading: false,
    adminListError: false,
    adminList: [],
    productsListLoading: false,
    productsListError: false,
    productsList: [],
    addProductLoading: false,
    addProductError: false,
    addProductResult: '',
    updateProductLoading: false,
    updateProductError: false,
    updateProductResult: false,
    deleteProductLoading: false,
    deleteProductError: false,
    deleteProductResult: false

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
        case DELETE_PRODUCTS_ERROR: {
            return {
                ...state,
                deleteProductLoading: false,
                deleteProductError: true
            }
        }
        case DELETE_PRODUCTS_LOADING: {
            return {
                ...state,
                deleteProductLoading: true,
                deleteProductError: false
            }
        }
        case DELETE_PRODUCTS_SUCCESS: {
            return {
                ...state,
                deleteProductLoading: false,
                deleteProductError: false,
                deleteProductResult: payload
            }
        }
        case GET_ADMIN_ERROR: {
            return {
                ...state,
                adminListLoading: false,
                adminListError: true
            }
        }
        case GET_ADMIN_LOADING: {
            return {
                ...state,
                adminListLoading: true,
                adminListError: false
            }
        }
        case GET_ADMIN_SUCCESS: {
            return {
                ...state,
                adminListLoading: false,
                adminListError: true,
                adminList: payload
            }
        }
        case UPDATE_USERS_ERROR: {
            return {
                ...state,
                updateusersLoading: false,
                updateusersError: true,
            }
        }
        case UPDATE_USERS_LOADING: {
            return {
                ...state,
                updateusersLoading: true,
                updateusersError: false
            }
        }
        case UPDATE_USERS_SUCCESS: {
            return {
                ...state,
                updateusersLoading: false,
                updateusersError: false,
                updateusers: payload
            }
        }
        case DELETE_USERS_ERROR: {
            return {
                ...state,
                deleteusersLoading: false,
                deleteusersError: true
            }
        }
        case DELETE_USERS_LOADING: {
            return {
                ...state,
                deleteusersLoading: true,
                deleteusersError: false
            }
        }
        case DELETE_USERS_SUCCESS: {
            return {
                ...state,
                deleteusersLoading: false,
                deleteusersError: false,
                deleteusers: payload
            }
        }
        default: {
            return state
        }
    }
}