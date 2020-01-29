import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import  withJaService  from '../../hoc'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from './slide.item';

class SliderHome extends Component{

  componentDidMount() {
    const { jaService } = this.props;
    jaService.getProductsSlideHome()
        .then(data => this.props.productsLoaded(data))
  }
 
  componentDidUpdate() {
    console.log('update')
  }
  render() {
    const { productsList } = this.props
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    let items;
    if(productsList !== []) {
      items = Object.entries(productsList).map(item => {
        return <SlideItem key={item[1].id} item={item[1]} />
      })
    }
    return (
      <Fragment>
        <Slider className="slideHome" {...settings}>
          {items}
        </Slider>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    productsLoaded: (newProducts) => {
      dispatch({
        type: 'FETCH_PRODUCTSSLIDEHOME_LOADED',
        payload: newProducts
      })
    }
  }
}

const mapStateToProps = ({productsList}) => {
  return {
    productsList
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(SliderHome))