import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import  withJaService  from '../../../hoc';

import Lang from './lang';

class UserSettingsContainer extends React.Component {

  changeLang = (lang) => {
    if(lang==="ro"){
      this.props.setLang('en')
    }
    else {
      this.props.setLang("ro")
    }
  }

  render() {
    const { lang } = this.props

    return (
      <ul className="menuCabinet">
          <li className="buttMenu buttWish">
            <a href="/">
              <div className="nrArt">7</div>
            </a>
          </li>
          <li className="buttMenu buttCart">
            <a href="/"><div className="nrArt">5</div></a>
          </li>
          <li className="buttMenu buttAvatar" data-target="#login" data-toggle="modal">
            <Link to="/client"></Link>
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
    }
  }
}

const mapStateToProps = ({lang}) => {
  return {
    lang
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(UserSettingsContainer))