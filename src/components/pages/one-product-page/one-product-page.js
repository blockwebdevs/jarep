import React, { Component } from 'react'
import { connect } from 'react-redux';

import {Container, Row, Col} from 'react-bootstrap'

import Spinner from '../../spinner'
import ErrorIndicator from '../../error-indicator'

import ZoomContainer from './zoom'

import  withJaService  from '../../hoc';
import TextSlide from './text-slide';
import OptionsProduct from '../../one-product/options-product';

class OneProductPage extends Component {

  state = {
    oneProduct: [],
    loading: true,
    error: null,
    show: false,
    image: null
  }

  componentDidMount() {
    const { jaService, langue, categoryName, index } = this.props;
    
    jaService.getOneProduct(langue, categoryName, index).then(data => {
      this.setState({oneProduct: data, loading: false})
    });
  }

  componentDidUpdate(prevProps) {
    const { jaService, langue, categoryName, index } = this.props;

    if (prevProps.langue !== this.props.langue || prevProps.id !== this.props.id) {
      this.setState({loading: true})
      jaService.getOneProduct(langue, categoryName, index).then(data => {
        this.setState({oneProduct: data, loading: false})
      });
    }
  }

  zoomThis = (e) => {
    this.setState({show: true, image: e.target.src})
    document.getElementById("body").style.overflow = "hidden";
  }

  closeThis = () => {
    this.setState({show: false, image: null})
    document.getElementById("body").style.overflow = "visible";
  }

  render() {
    const {oneProduct, loading, error, show, image } = this.state;

    const { categoryName } = this.props

    if(loading || oneProduct == []) {
      return <Spinner />
    }

    if(error) {
      return <ErrorIndicator />
    }
    
    return (
      <main>
        <div className="oneProductContent">
          { show ? <ZoomContainer closeThis={this.closeThis} currentImage={image} arr={oneProduct.imgSrc} /> : null }
          <Container>
            <Row>
              <Col md={8}>
                <Row className="row galleryProduct">
                  <Col md={6}>
                    <img onClick={this.zoomThis} src={oneProduct.imgSrc[0]} alt="product" className="mainImg" />                 
                  </Col>
                  <Col md={6}>
                    <img onClick={this.zoomThis} src={oneProduct.imgSrc[1]} alt="product" className="mainImg" />                  
                  </Col>
                  <p>this product is beauty</p>
                  <Col md={6}>
                    <img onClick={this.zoomThis} src={oneProduct.imgSrc[2]} alt="product" className="mainImg" />                
                  </Col>
                  <Col md={6}>
                    <img onClick={this.zoomThis} src={oneProduct.imgSrc[3]} alt="product" className="mainImg" />                   
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
                      <OptionsProduct categoryName={categoryName} item={oneProduct} />
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

// const mapDispatchToProps = (dispatch) => {
//   return {
//     oneProductLoaded: (newProduct) => {
//       dispatch({
//         type: 'FETCH_PRODUCT_LOADED',
//         payload: newProduct
//       })
//     }
//   }
// }

const mapStateToProps = ({langue}) => {
  return {
    langue
  }
}

export default withJaService()(connect(mapStateToProps, null)(OneProductPage))