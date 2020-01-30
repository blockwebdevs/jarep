const fetchMenuNavListLoaded = (menuNavList) => {
  return {
    type: 'FETCH_MENUNAVLIST_SUCCES',
    payload: menuNavList
  }
}
const fetchMenuNavListRequested = () => {
  return {
    type: 'FETCH_MENUNAVLIST_REQUEST'
  }
}
const fetchMenuNavListError = (error) => {
  return {
    type: 'FETCH_MENUNAVLIST_FAILURE',
    payload: error
  }
}

const authSucces = (authData) => {
  return {
    type: 'FETCH_AUTH_SUCCES',
    payload: authData
  }
}
const authStart = () => {
  return {
    type: 'FETCH_AUTH_REQUEST'
  }
}
const authFailure = (error) => {
  return {
    type: 'FETCH_AUTH_FAILURE',
    payload: error
  }
}

const fetchMenuNavList = (jaService) => (langue) => (dispatch) => {
    dispatch(fetchMenuNavListRequested());
    jaService.getNavItems(langue)
            .then(data => dispatch(fetchMenuNavListLoaded(data)))
            .catch(err => dispatch(fetchMenuNavListError(err)));
}

const auth = (jaService) => ( email, password ) => (dispatch) => {
  dispatch(authStart())
  const authData = {
    email,
    password,
    returnSecureToken: true
  }
  jaService.signUp(authData)
    .then(res => dispatch(authSucces(res)))
    .catch(err => dispatch(authFailure(err)))
}
  

export {
  fetchMenuNavList,
  auth
}