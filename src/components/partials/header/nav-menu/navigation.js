import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import ErrorIndicator from '../../../error-indicator'
import Spinner from '../../../spinner'
import {compose} from '../../../../utils'
import  withJaService  from '../../../hoc';
import ProductsList from './products-lists';
import CollectionList from './collections-list';


import logo from './logo.svg';

const Nav = ({menuNavList}) => {
  return (
    <ul className="menuLeft">
      <li className="itemButt">
          <span> { menuNavList.var.categories }</span>
          <ProductsList list={ menuNavList.categories }  />
      </li>
      <li className="itemButt">
          <span> { menuNavList.var.collections } </span>
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

  state = {
    menuNavList: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    const { langue, jaService } = this.props
    jaService.getNavItems(langue).then(data => {
      this.setState({menuNavList: data, loading: false})
    })
  }

  componentDidUpdate(prevProps) {
    const { langue, jaService } = this.props
    if (prevProps.langue !== this.props.langue  ) {
      jaService.getNavItems(langue).then(data => {
        this.setState({menuNavList: data, loading: false})
      })
    }
  }


  render() {
    const { loading, error, menuNavList } = this.state
    
    if(loading || menuNavList == []) {
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



// const mapDispatchToProps = (dispatch, {jaService}) => {
//   return bindActionCreators({
//       fetchMenuNavList: fetchMenuNavList(jaService)
//   }, dispatch)
// }
const mapStateToProps = ({ langue } ) => {
  return {
    langue
  }
}

export default compose(
  withJaService(),
  connect(mapStateToProps, null))(NavContainer)

