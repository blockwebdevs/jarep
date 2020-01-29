import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'

import ErrorIndicator from '../../../error-indicator'
import Spinner from '../../../spinner'
import {compose} from '../../../../utils'
import  withJaService  from '../../../hoc';
import ProductsList from './products-lists';
import CollectionList from './collections-list';

import { fetchMenuNavList } from '../../../../actions'

import logo from './logo.svg';

const Nav = ({menuNavList}) => {
  return (
    <ul className="menuLeft">
      <li className="itemButt">
          <span>{ menuNavList.var.categories }</span>
          <ProductsList list={ menuNavList.categories }  />
      </li>
      <li className="itemButt">
          <span> { menuNavList.var.collections }  </span>
          <CollectionList list={ menuNavList.collections } condition="collections" />
      </li>
      <li className="itemButt">
          <span><a href="/">  { menuNavList.var.outlet } </a></span>
      </li>
      <li className="itemButt">
          <span><a href="/">new</a></span>
      </li>
      <li className="itemButt">
          <span>
            <Link to="/" className="logo">
              <img src={logo} alt=""/>
            </Link>
          </span>
      </li>
    </ul>
  )
}

class NavContainer extends React.Component {

  componentDidMount() {
    const { lang } = this.props
    this.props.fetchMenuNavList(lang);
  }

  componentDidUpdate(prevProps) {
    const { lang } = this.props
    if (prevProps.lang !== this.props.lang  ) {
      this.props.fetchMenuNavList(lang);
    }
  }


  render() {
    const { menuNavList, loading, error } = this.props
    if(loading) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }

    return (
      <Nav menuNavList={menuNavList} />
    )
  }
}



const mapDispatchToProps = (dispatch, {jaService}) => {
  return bindActionCreators({
      fetchMenuNavList: fetchMenuNavList(jaService)
  }, dispatch)
}

const mapStateToProps = ({ lang, navList: {menuNavList, error, loading}}) => {
  return {
    menuNavList,
    lang,
    loading,
    error
  }
}

export default compose(
  withJaService(),
  connect(mapStateToProps, mapDispatchToProps))(NavContainer)

