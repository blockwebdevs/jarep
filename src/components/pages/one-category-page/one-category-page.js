import React, { Component } from 'react'
import { connect } from 'react-redux';

import  withJaService  from '../../hoc';
import Spinner from '../../spinner';
import ErrorIndicator from '../../error-indicator'

import './one-category-page.css'
import TemplateProducts from './template-product';

const OneCategoryFunc = ({productsList, categoryName}) => {
  const newProductsList = productsList.slice(0, 3)
  return (
    <main>
        <div className="productsPageContent mainPage">
            <div className="titleFixed">
              <span>id</span>
            </div>
              <div className="productsPageHeader">
                  <div className="headerText">
                      <div><span>{ categoryName }</span></div>
                      <div><span id="filterWord">Filter</span></div>
                  </div>
                  <div className="btnFilter"></div>
              </div>
            <TemplateProducts categoryName={categoryName} categoryList={newProductsList} />
          </div>
      </main>
  )
}

class OneCategoryPage extends Component {

  state = {
    productsList: [],
    loading: true,
    error: false
  }

  componentDidMount() {
    const { jaService, langue, categoryName } = this.props;
    jaService.getCategoryProducts(categoryName, langue).then(data => {
      this.setState({productsList: data, loading: false})
    });
  }

  componentDidUpdate(prevProps) {
    const { jaService, langue, categoryName } = this.props;
    if (prevProps.langue !== this.props.langue || prevProps.categoryName !== this.props.categoryName) {
      this.setState({loading: true})
      jaService.getCategoryProducts(categoryName, langue).then(data => {
        this.setState({productsList: data, loading: false})
      });
    }
  }

  render() {
    const { loading, error, productsList } = this.state
    const { categoryName } = this.props

    if(loading || productsList == []) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }

    return (
      <OneCategoryFunc categoryName={categoryName} productsList={productsList} />
    )
  }
}


const mapStateToProps = ({langue}) => {
  return {
    langue
  }
}

export default withJaService()(connect(mapStateToProps, null)(OneCategoryPage))