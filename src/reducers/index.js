const initialState = {
    menuList: [],
    productsList: [],
    categoryList: [],
    oneProduct: [],
    lang: 'en'
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
        default:
            return state
    }
}

export default reducer