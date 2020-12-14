const reducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USERS':
            return { ...state, loading: true };
        case 'USERS':

            return { ...state, users: action.users, loading: false }
        default:
            return state;
    }
};
export default reducer;