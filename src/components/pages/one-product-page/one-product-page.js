import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Container, Row, Col} from 'react-bootstrap'

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
          <Container>
            <Row>
              <Col md={8}>
                <Row className="row galleryProduct">
                  <Col md={6}>
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </Col>
                  <Col md={6}>
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </Col>
                  <p>this product is beauty</p>
                  <Col md={6}>
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </Col>
                  <Col md={6}>
                    <img src={oneProduct.img} alt="product" className="mainImg"/>                    
                  </Col>
                </Row>
              </Col>
              <Col md={4} className="posRelative">
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
              </Col> 
            </Row>
          </Container>
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