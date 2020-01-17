const initialState = {
    logged: false,
    menuList: [],
    productsList: [],
    categoryList: [],
    oneProduct: [],
    lang: 'en',
    user: null,
    userInfo: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_MENULIST_LOADED':
            return {
                ...state,
                menuList: action.payload  
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