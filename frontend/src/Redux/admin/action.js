import { GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from './action.type'

export const getUser = async (dispatch) => {
    dispatch({ type: GET_USERS_LOADING })
    try {
        let users = await fetch(`https://proud-lamb-suspenders.cyclic.app/users`)
        let actualusers = await users.json()
        dispatch({ type: GET_USERS_SUCCESS, payload: actualusers })
    } catch (e) {
        dispatch({ type: GET_USERS_ERROR, payload: e.message })
    }
}

export const getProducts = async (dispatch) => {
    dispatch({ type: GET_PRODUCTS_LOADING })
    try {
        let products = await fetch(`https://proud-lamb-suspenders.cyclic.app/products`)
        let actualproducts = await products.json()
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: actualproducts })
    } catch (e) {
        dispatch({ type: GET_PRODUCTS_ERROR, payload: e.message })
    }
}

export const addProduct = async (dispatch, obj) => {

}
