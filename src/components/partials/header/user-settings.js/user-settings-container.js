import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import  withJaService  from '../../../hoc';

import Lang from './lang';
import { Auth } from '../../../modal';

class UserSettingsContainer extends React.Component {

  componentDidUpdate(prevProps) {
    const { jaService, user, userLoaded } = this.props;
    if(user !== null && prevProps.user !== user) {
      const data = jaService.getUser(user);
      this.props.setLang(data.langue)
      userLoaded(data)
    }
  }

  changeLang = (lang) => {
    if(lang==="ro"){
      this.props.setLang('en')
    }
    else {
      this.props.setLang("ro")
    }
  }

  getUser = (name, password) => {
    const { jaService, userLogin} = this.props
    const data = jaService.login(name, password);
    userLogin(data);
  }

  render() {
    const { lang, logged, userInfo } = this.props

    const loggedFunction = () => {
      if(logged) {return <Link to="/client"></Link> }
      else {
        return (
          <Auth getUser={this.getUser} />
        )}
    }

    return (
      <ul className="menuCabinet">
          <li className="buttMenu buttWish">
            <a href="/">
              <div className="nrArt">{ userInfo != null ? userInfo.wishCount : '8' }</div>
            </a>
          </li>
          <li className="buttMenu buttCart">
            <a href="/"><div className="nrArt">{ userInfo != null ? userInfo.cartCount : '8' }</div></a>
          </li>
          <li className="buttMenu buttAvatar">
            {
              loggedFunction()
            }
          </li>
          <li className="buttMenu buttSettings">
            <Lang lang={lang} changeLang={this.changeLang}  />
              {/* <a href="/" data-target="#settings" data-toggle="modal">mdl / en /<span className="flag"> </span></a> */}
          </li>
      </ul>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLang: (newLang) => {
      dispatch({
        type: 'FETCH_LANG',
        payload: newLang
      })
    },
    userLogin: (newUser) => {
      dispatch({
        type: "FETCH_LOGIN",
        payload: newUser
      })
    },
    userLoaded: (newUser) => {
      dispatch({
        type: "FETCH_USER",
        payload: newUser
      })
    }
  }
}

const mapStateToProps = ({lang, logged, user, userInfo}) => {
  return {
    lang,
    logged, 
    user,
    userInfo
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer))