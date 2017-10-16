const initialState = {
    users: [],
    errorMsg: {},
    isLoading: false,
    allItems: [],
    filteredItems: [],
    singleUser: {}
}

// const  parseAllItems = (users) => {
//     return users.reduce((acc, cur) => {
//         cur.items.map(item => {
//            return acc.push({ uid: cur.id, name: cur.fullName,  item: item })
//         })
//         return acc
//       }, [])
// }

// const mergeUsersItems = (users, items) => {
//     return users.map(user => {
//         return {
//             ...user,
//             items: items.filter(item => item.itemOwner === user.id)
//         }
//     })
// }

const mergeItemsUsers = (users, items) => {
    return items.map(item => {
        return {
            ...item,
            itemOwner: users.filter(user => user.id === item.itemOwner)[0]
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
                ...state,
                singleUser: action.user
            }
        case 'GET_ITEMS_SUCCESS':
            // const usersTreated = mergeUsersItems(action.users, action.items)
            return { 
                ...state,
                isLoading: false,
                // users: usersTreated,
                // allItems: parseAllItems(usersTreated),
                allItems: mergeItemsUsers(action.users, action.items)
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