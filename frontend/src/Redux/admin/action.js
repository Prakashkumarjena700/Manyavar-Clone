import {
    GET_ADMIN_ERROR, GET_ADMIN_LOADING, GET_ADMIN_SUCCESS,
    GET_USERS_ERROR, GET_USERS_LOADING, GET_USERS_SUCCESS,
    UPDATE_USERS_ERROR, UPDATE_USERS_LOADING, UPDATE_USERS_SUCCESS,
    DELETE_USERS_ERROR, DELETE_USERS_LOADING, DELETE_USERS_SUCCESS,
    GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,
    ADD_PRODUCTS_ERROR, ADD_PRODUCTS_LOADING, ADD_PRODUCTS_SUCCESS,
    UPDATE_PRODUCTS_ERROR, UPDATE_PRODUCTS_LOADING, UPDATE_PRODUCTS_SUCCESS,
    DELETE_PRODUCTS_ERROR, DELETE_PRODUCTS_LOADING, DELETE_PRODUCTS_SUCCESS
} from './action.type'

export const getAdmin = async (dispatch) => {
    dispatch({ type: GET_ADMIN_LOADING })
    try {
        let admins = await fetch(`https://proud-lamb-suspenders.cyclic.app/users/admin`)
        let actualAdmins = await admins.json()
        dispatch({ type: GET_ADMIN_SUCCESS, payload: actualAdmins })
    } catch (e) {
        dispatch({ type: GET_ADMIN_ERROR, payload: e.message })
    }
}
export const getUser = async (dispatch) => {
    dispatch({ type: GET_USERS_LOADING })
    try {
        let users = await fetch(`https://proud-lamb-suspenders.cyclic.app/users/user`)
        let actualusers = await users.json()
        dispatch({ type: GET_USERS_SUCCESS, payload: actualusers })
    } catch (e) {
        dispatch({ type: GET_USERS_ERROR, payload: e.message })
    }
}

export const updateUser = async (dispatch, id, obj) => {
    dispatch({ type: UPDATE_USERS_LOADING })
    try {
        let updateResult = await fetch(`https://proud-lamb-suspenders.cyclic.app/users/edit/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        let actualUpdateResult = await updateResult.json()
        dispatch({ type: UPDATE_USERS_SUCCESS, payload: actualUpdateResult })

    } catch (e) {
        dispatch({ type: UPDATE_USERS_ERROR, payload: e.message })
    }
}

export const deleteUser = async (dispatch, id) => {
    dispatch({ type: DELETE_USERS_LOADING })
    try {
        let deleteResult = await fetch(`https://proud-lamb-suspenders.cyclic.app/users/delete/${id}`, {
            method: 'DELETE'
        })
        let deleteUpdateResult = await deleteResult.json()
        dispatch({ type: DELETE_USERS_SUCCESS, payload: deleteUpdateResult })
    } catch (e) {
        dispatch({ type: DELETE_USERS_ERROR, payload: e.message })
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
    dispatch({ type: ADD_PRODUCTS_LOADING })
    try {
        let addProduct = await fetch(`https://proud-lamb-suspenders.cyclic.app/products/add`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })

        let postResult = await addProduct.json()
        dispatch({ type: ADD_PRODUCTS_SUCCESS, payload: postResult })
    } catch (e) {
        dispatch({ type: ADD_PRODUCTS_ERROR, payload: e.message })
    }
}

export const updateProduct = async (dispatch, id, obj) => {
    dispatch({ type: UPDATE_PRODUCTS_LOADING })
    try {
        let updateResult = await fetch(`https://proud-lamb-suspenders.cyclic.app/products/update/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        let actualUpdateResult = await updateResult.json()
        dispatch({ type: UPDATE_PRODUCTS_SUCCESS, payload: actualUpdateResult })
    } catch (e) {
        dispatch({ type: UPDATE_PRODUCTS_ERROR, payload: e.message })
    }
}

export const deleteProduct = async (dispatch, id) => {
    dispatch({ type: DELETE_PRODUCTS_LOADING })
    try {
        let deleteResult = await fetch(`https://proud-lamb-suspenders.cyclic.app/products/delete/${id}`, {
            method: 'DELETE'
        })
        let deleteUpdateResult = await deleteResult.json()
        dispatch({ type: DELETE_PRODUCTS_SUCCESS, payload: deleteUpdateResult })
    } catch (e) {
        dispatch({ type: DELETE_PRODUCTS_ERROR, payload: e.message })
    }
}