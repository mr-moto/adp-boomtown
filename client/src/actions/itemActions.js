// import {mainURL} from '../constants';
// import {getUsers} from './userActions'

// const getItemsBegin = () => {
//     return { type: 'GET_ITEMS_BEGIN' }
// }

// const getItemsSuccess = (items, users) => {
//     return { type: 'GET_ITEMS_SUCCESS', items, users }
// }

// const getItemsError = (error) => {
//     return { type: 'GET_ITEMS_ERROR', error }
// }

export const filteredItems = (tag) => {
    return { type: 'UPDATE_FILTER', tag }
};


// export const getItems = () => {
//     return (dispatch) => {
//         dispatch(getItemsBegin())
//         return fetch(`${mainURL}/items`)
//             .then(response => response.json())
//             .then(items => {
//                 return getUsers(dispatch).then(users => {
//                     dispatch(getItemsSuccess(items, users))
//                 })
//             }).catch(err => {
//                 dispatch(getItemsError(err))
//             })
//     }
// }
