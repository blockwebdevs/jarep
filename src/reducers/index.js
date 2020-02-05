import navList from './navList'
import auth from './auth'

const initialState = {
    user: null,
    langue: 'en'
}


const reducer = (state = initialState, action) => {
        switch(action.type) {
            case 'FETCH_AUTH_REQUEST':
            case 'FETCH_AUTH_SUCCES':
            case 'FETCH_AUTH_FAILURE':
                return {
                    ...state,
                    user: auth(state, action)
                }
            case "FETCH_CARTCOUNT":
                return {
                    ...state,
                    cartCount: action.payload
                }
            case "FETCH_WISHCOUNT":
                return {
                    ...state,
                    wishCount: action.payload
                }
            case "FETCH_LANG":
                return {
                    ...state,
                    langue: action.payload
                }
            case "FETCH_PRODUCT_LOADED":
                return {
                    ...state,
                    oneProduct: action.payload
                }
            case "FETCH_LOGIN":
                return {
                    ...state,
                    logged: true,
                    user: action.payload
                }
            case "FETCH_USER":
                return {
                    ...state,
                    userInfo: action.payload
                }
            default:
                return state
            }
}

export default reducer