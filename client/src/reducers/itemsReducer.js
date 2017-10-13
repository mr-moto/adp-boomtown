const initialState = {
    users: [],
    errorMsg: {},
    isLoading: false,
    filteredItems: []
}

const mergeUsersItems = (users, items) => {
    return users.map(user => {
        return {
            ...user,
            items: items.filter(item => item.itemOwner === user.id)
        }
    })
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_ITEMS_BEGIN':
        case 'GET_USERS_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_USERS_SUCCESS':
            return {
                ...state
            }
        case 'GET_ITEMS_SUCCESS':
            return { 
                ...state,
                isLoading: false,
                users: mergeUsersItems(action.users, action.items)
            }
        case 'GET_USERS_ERROR':
        case 'GET_ITEMS_ERROR':
            return {
                ...state,
                errorMsg: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}