import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import  withJaService  from '../../../hoc';

import Lang from './lang';
import { Auth } from '../../../modal';

class UserSettingsContainer extends React.Component {

  componentDidMount() {
    const langue = localStorage.getItem("langue");
    if(langue !== this.props.langue) {
      this.props.setLang(langue)
    }
    if(JSON.parse(localStorage.getItem("cartCount")) !== null) {
      const count = JSON.parse(localStorage.getItem("cartCount")).length
      this.props.setCartCount(count)
    }
    if(JSON.parse(localStorage.getItem("wishCount")) !== null) {
      const count = JSON.parse(localStorage.getItem("wishCount")).length
      this.props.setWishCount(count)
    }
  }

  changeLang = (langue) => {
    if(langue==="ro"){
      this.props.setLang('en')
      localStorage.setItem("langue", "en")
    }
    else {
      this.props.setLang("ro")
      localStorage.setItem("langue", "ro")
    }
  }

  getUser = (name, password) => {
    const { jaService, userLogin} = this.props
    const data = jaService.login(name, password);
    userLogin(data);
  }

  render() {
    const { langue, user, cartCount, wishCount } = this.props
    
    const loggedFunction = () => {
      if(user) {return <Link to="/client"></Link> }
      else {
        return (
          <Auth getUser={this.getUser} />
        )}
    }

    return (
      <ul className="menuCabinet">
          <li className="buttMenu buttWish">
            <a href="/">
              <div className="nrArt"> { wishCount }</div>
            </a>
          </li>
          <li className="buttMenu buttCart">
            <a href="/"><div className="nrArt">{ cartCount }</div></a>
          </li>
          <li className="buttMenu buttAvatar">
            {
              loggedFunction()
            }
          </li>
          <li className="buttMenu buttSettings">
            <Lang langue={langue} changeLang={this.changeLang}  />
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
    setCartCount: (cartCount) => {
      dispatch({
        type: 'FETCH_CARTCOUNT',
        payload: cartCount
      })
    },
    setWishCount: (wishCount) => {
      dispatch({
        type: 'FETCH_WISHCOUNT',
        payload: wishCount
      })
    }
  }
}

const mapStateToProps = ({ langue, user, cartCount, wishCount }) => {
  return {
    langue,
    user,
    cartCount,
    wishCount
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer))