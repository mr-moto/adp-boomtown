const initialState = {
    errorMsg: {},
    isLoading: false,
    singleUser: {}
}


const mergeUsersItems = (users, items) => {
    return users.map(user => {
        return {
            ...user,
            items: items.filter(item => item.itemOwner === user.id)
        }
    })
}

const mergeItemsWithUser = (user, items) => {
    return {
        ...user
    }
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_USERS_BEGIN':
            return {
                ...state,
                isLoading: true
            }
        case 'GET_SINGEL_USER_SUCCESS':
            return {
                ...state,
                singleUser: action.user,
                isLoading: false
            }
        case 'GET_USERS_ERROR':
            return {
                ...state,
                errorMsg: action.error,
                isLoading: false
            }
        default:
            return state;
    }
}