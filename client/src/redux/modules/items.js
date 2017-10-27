// action
const UPDATE_FILTER = "UPDATE_FILTER";

// action creator
export const filteredItems = tag => {
    return { type: UPDATE_FILTER, tag };
};

// reducer
const initialState = {
    selectedTags: []
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "UPDATE_FILTER":
            return {
                ...state,
                selectedTags: action.tag
            };
        default:
            return state;
    }
};
