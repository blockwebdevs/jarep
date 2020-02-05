const navList = (state, action) => {
    if(state === undefined) {
        return {
            menuNavList: [],
            loading: true,
            error: null
        }
    }
    console.log(state)
switch(action.type) {
    case 'FETCH_MENUNAVLIST_REQUEST':
        return {
            menuNavList: [],
            error: null,
            loading: true
        }
    case 'FETCH_MENUNAVLIST_SUCCES':
        return {
            menuNavList: action.payload,
            loading: false,
            error: null
        }
    case 'FETCH_MENUNAVLIST_FAILURE':
        return {
            menuNavList: [],
            loading: false,
            error: action.payload
        }
    }
}

export default navList