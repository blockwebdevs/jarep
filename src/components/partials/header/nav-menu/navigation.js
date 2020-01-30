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
    const { langue } = this.props
    this.props.fetchMenuNavList(langue);
  }

  componentDidUpdate(prevProps) {
    const { langue } = this.props
    if (prevProps.langue !== this.props.langue  ) {
      this.props.fetchMenuNavList(langue);
    }
  }


  render() {
    const { menuNavList, loading, error } = this.props
    console.log(menuNavList)
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

const mapStateToProps = ({ user: {settings}, navList: {menuNavList, error, loading}}) => {
  return {
    menuNavList,
    langue: settings.langue,
    loading,
    error
  }
}

export default compose(
  withJaService(),
  connect(mapStateToProps, mapDispatchToProps))(NavContainer)

