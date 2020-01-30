const auth = (state, action) => {

if (state === undefined) {
    return {
            token: null,
            id: '0',
            loading: true,
            error: null
        }
}

switch(action.type) {
    case 'FETCH_MENUNAVLIST_REQUEST':
        return {
            ...state,
            error: null,
            loading: true
        }
    case 'FETCH_MENUNAVLIST_SUCCES':
        return {
            token: action.idToken,
            id: action.userId,
            error: null,
            loading: false
        }
    case 'FETCH_MENUNAVLIST_FAILURE':
        return {
            ...state, 
            loading: false,
            error: action.payload
        }
        
}
}

export default auth