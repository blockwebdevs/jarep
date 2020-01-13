import React, { Component } from 'react'
import { connect } from 'react-redux';

import  withJaService  from '../../hoc';

import './one-category-page.css'
import TemplateProducts from './template-product';

class OneCategoryPage extends Component {

  componentDidMount() {
    const { jaService, lang, id } = this.props;
    const data = jaService.getProductsCategory(lang, id);
    this.props.categoryListLoaded(data);
  }

  componentDidUpdate(prevProps) {
    const { jaService, lang, id } = this.props;
    if (prevProps.lang !== this.props.lang || prevProps.id !== this.props.id) {
      const data = jaService.getProductsCategory(lang, id);
      this.props.categoryListLoaded(data);
    }
  }

  render() {
    const {categoryList, id} = this.props;
    console.log(id)
    return (
      <main>
        <div className="productsPageContent mainPage">
            <div className="titleFixed">
              <span>id</span>
            </div>
              <div className="productsPageHeader">
                  <div className="headerText">
                      <div><span>{ id }</span></div>
                      <div><span id="filterWord">Filter</span></div>
                  </div>
                  <div className="btnFilter"></div>
              </div>
            <TemplateProducts categoryList={categoryList} />
          </div>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    categoryListLoaded: (newList) => {
      dispatch({
        type: 'FETCH_CATEGORYLIST_LOADED',
        payload: newList
      })
    }
  }
}

const mapStateToProps = ({categoryList, lang}) => {
  return {
    categoryList,
    lang
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(OneCategoryPage))