const navList = (state, action) => {

  if (state === undefined) {
      return {
          menuNavList: [],
          loading: true,
          error: null
      }
  }

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
              error: null,
              loading: false
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