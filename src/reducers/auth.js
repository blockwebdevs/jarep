const auth = (state, action) => {

if (state === undefined) {
    return {
        user: {
            token: null,
            refreshToken: null,
            id: 'null',
            role: 'guest',
            wishCount: '0',
            cartCount: '3',
            settings: {
                langue: 'en',
                country: 'Your country'
            },
            loading: true,
            error: null
        } 
    }
}

switch(action.type) {
    case 'FETCH_MENUNAVLIST_REQUEST':
        return {
            user: state.user,
            error: null,
            loading: true
        }
    case 'FETCH_MENUNAVLIST_SUCCES':
        return {
            ...state.user,
            token: action.idToken,
            id: action.userId,
            error: null,
            loading: false
        }
    case 'FETCH_MENUNAVLIST_FAILURE':
        return {
            ...state.user, 
            loading: false,
            error: action.payload
        }
        
}
}

export default auth