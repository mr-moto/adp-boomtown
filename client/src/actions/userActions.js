import {mainURL} from '../constants';
import {getItems} from './itemActions'

const getUsersBegin = () => {
    return { type: 'GET_USERS_BEGIN' }
}

const getUsersSuccess = () => {
    return { type: 'GET_USERS_SUCCESS' }
}

const getSingleUserSuccess = (user, items) => {
    return { type: 'GET_SINGEL_USER_SUCCESS', user, items}
}

const getUsersError = (error) => {
    return { type: 'GET_USERS_ERROR', error }
}


export const getUsers = (dispatch) => {
    dispatch(getUsersBegin())
    return fetch(`${mainURL}/users`)
        .then(response => {
            dispatch(getUsersSuccess())
            return response.json()
        })
        .catch(err => {
            dispatch(getUsersError(err))
        })
}

export const getSingleUser = (userId) => {
    return (dispatch) => {
        dispatch(getUsersBegin())
        return fetch(`http://localhost:3001/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                return getItems(dispatch).then(items => {
                    dispatch(getSingleUserSuccess(user, items))
                })
            }).catch(err => {
                dispatch(getUsersError(err))
            })
    };
}