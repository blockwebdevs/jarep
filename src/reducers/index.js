import navList from './navList'
import auth from './auth'

const initialState = {
    navList: {
        menuNavList: [],
        loading: true,
        error: null
    },
    logged: false,
    productsList: [],
    categoryList: [],
    oneProduct: [],
    lang: 'en',
    user: {
        token: null,
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
    },
    userInfo: null,
    
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MENUNAVLIST_REQUEST':
        case 'FETCH_MENUNAVLIST_SUCCES':
        case 'FETCH_MENUNAVLIST_FAILURE':
            return {
                ...state,
                navList: navList(state, action)
            }
        case 'FETCH_AUTH_REQUEST':
        case 'FETCH_AUTH_SUCCES':
        case 'FETCH_AUTH_FAILURE':
            return {
                ...state,
                user: auth(state, action)
            }
        case "FETCH_PRODUCTSSLIDEHOME_LOADED":
            return {
                ...state,
                productsList: action.payload
            }
        case "FETCH_LANG":
            return {
                ...state,
                lang: action.payload
            }
        case "FETCH_CATEGORYLIST_LOADED":
            return {
                ...state,
                categoryList: action.payload
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