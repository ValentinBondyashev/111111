let defaultState = {
    token: '',

};

export function auth(state = defaultState, action) {
    switch (action.type) {
        case 'CHECK_AUTH':
            return {...state, token: action.payload.token}; 
        default:
            return state;
    }
}