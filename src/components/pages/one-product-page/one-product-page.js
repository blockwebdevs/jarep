import React, { Component } from 'react'
import { connect } from 'react-redux';

import  withJaService  from '../../hoc';
import TextSlide from './text-slide';

class OneProductPage extends Component {

  componentDidMount() {
    const { jaService, lang, id } = this.props;
    const data = jaService.getOneProduct(lang, id);
    this.props.oneProductLoaded(data);
  }

  componentDidUpdate(prevProps) {
    const { jaService, lang, id } = this.props;
    if (prevProps.lang !== this.props.lang || prevProps.id !== this.props.id) {
      const data = jaService.getOneProduct(lang, id);
      this.props.oneProductLoaded(data);
    }
  }

  render() {
    const {oneProduct} = this.props;
    return (
      <main>
        <div className="oneProductContent">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="row galleryProduct">
                  <div className="col-md-6 col-12 ">
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </div>
                  <div className="col-md-6 col-12 ">
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </div>
                  <p>this product is beauty</p>
                  <div className="col-md-6 col-12 ">
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </div>
                  <div className="col-md-6 col-12 ">
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </div>
                </div>
              </div>
              <div className="col-md-4 posRelative">
                <div className="descrItem">
                  <div>
                      <div className="name">
                        {oneProduct.name}
                      </div>
                      <div className="price">{oneProduct.price} lei</div>
                      <div className="color">{oneProduct.priceReduce} lei
                      </div>
                  </div>
                </div>
                <TextSlide />
              </div> 
            </div>
          </div>
        </div>
      </main>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    oneProductLoaded: (newProduct) => {
      dispatch({
        type: 'FETCH_PRODUCT_LOADED',
        payload: newProduct
      })
    }
  }
}

const mapStateToProps = ({oneProduct, lang}) => {
  return {
    oneProduct,
    lang
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(OneProductPage))