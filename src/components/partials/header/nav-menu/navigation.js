import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

import  withJaService  from '../../../hoc';
import ProductsList from './products-lists';
import CollectionList from './collections-list';

import logo from './logo.svg';

class Nav extends React.Component {

  componentDidMount() {
    const { jaService, lang } = this.props;
    const data = jaService.getMenuList(lang);
    this.props.menuListLoaded(data);
  }

  componentDidUpdate(prevProps) {
    const { jaService, lang } = this.props;
    if (prevProps.lang !== this.props.lang) {
      const data = jaService.getMenuList(lang);
      this.props.menuListLoaded(data);
    }
  }

  render() {
    const { menuList } = this.props
    return (
      <ul className="menuLeft">
        <li className="itemButt">
            <span>produse</span>
            <ProductsList list={ menuList.products }  />
        </li>
        <li className="itemButt">
            <span>colectii</span>
            <CollectionList list={ menuList.collections } condition="collections" />
        </li>
        <li className="itemButt">
            <span><a href="/">outlet</a></span>
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
}

const mapDispatchToProps = (dispatch) => {
  return {
    menuListLoaded: (newList) => {
      dispatch({
        type: 'FETCH_MENULIST_LOADED',
        payload: newList
      })
    }
  }
}

const mapStateToProps = ({menuList, lang}) => {
  return {
    menuList,
    lang
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(Nav))
