import axios from 'axios'

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

const authSucces = (autData) => {
  return {
    type: 'FETCH_AUTH_SUCCES',
    payload: autData
  }
}
const authStart = () => {
  return {
    type: 'FETCH_AUTH_REQUEST'
  }
}
const authFilure = (error) => {
  return {
    type: 'FETCH_AUTH_FAILURE',
    payload: error
  }
}

const fetchMenuNavList = (jaService) => (lang) => (dispatch) => {
    dispatch(fetchMenuNavListRequested());
    jaService.getNavItems(lang)
            .then(data => dispatch(fetchMenuNavListLoaded(data)))
            .catch(err => dispatch(fetchMenuNavListError(err)));
}

const auth = (jaService) => ( email, password ) => (dispatch) => {
  dispatch(authStart())
  const authData = {
    email: 'test@gmail.com',
    password: 'japroject2020',
    returnSecureToken: true
  }
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCXqZjWEtNyhgMUarFrFnU12nxAR1Qx4gY', 
            {
              method: 'POST', 
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(authData)
          })
          .then(res => console.log(res.json()))
}

export {
  fetchMenuNavList,
  auth
}