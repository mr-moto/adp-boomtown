const initialState = {
    // users: [],
    // errorMsg: {},
    // isLoading: false,
    // allItems: [],
    selectedTags: []
}

// const filteredUsers = (users, items) => {
//     return users.map(user => {
//         const borrowCount = items.filter(item => {
//             if(user.id === item.borrower) 
//             return item
//         }).length
//         const shareCount = items.filter(item => {
//             if(user.id === item.itemowner)
//             return item
//         }).length
        
//         return {
//             ...user,
//             borrowCount: borrowCount,
//             shareCount: shareCount
//         }
//     })
// }

// const mergeItemsUsers = (users, items) => {
//     return items.map(item => {
//         return {
//             ...item,
//             itemowner: users.find(user => user.id === item.itemowner)
//         }
//     })
// }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILTER':
            return {
                ...state, 
                selectedTags: action.tag
            }
        // case 'GET_USERS_BEGIN':
        // case 'GET_ITEMS_BEGIN':
        //     return {
        //         ...state,
        //         isLoading: true
        //     }
        // case 'GET_USERS_SUCCESS':
        //     return {
        //         ...state,
        //     }
        // case 'GET_ITEMS_SUCCESS':
        //     return { 
        //         ...state,
        //         isLoading: false,
        //         users: filteredUsers(action.users, action.items),
        //         allItems: mergeItemsUsers(action.users, action.items)
        //     }
        // case 'GET_USERS_ERROR':
        // case 'GET_ITEMS_ERROR':
        //     return {
        //         ...state,
        //         errorMsg: action.error,
        //         isLoading: false
        //     }
        default:
            return state;
    }
}