// Action
const LOGIN = "LOGIN";
const LOGOUT = "LOGOUT";

// Action Creator

export const login = user => ({
    type: "LOGIN",
    payload: user
});
export const logout = () => ({
    type: "LOGOUT"
});

// Reducer
const initialState = {
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { ...state, user: action.payload };
        case LOGOUT:
            return { ...state, user: null };
        default:
            return state;
    }
};
