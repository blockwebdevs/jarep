import React, { Component, Fragment } from 'react';
import Slider from "react-slick";
import { connect } from 'react-redux';

import  withJaService  from '../../hoc'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SlideItem from './slide.item';

class SliderHome extends Component{

  componentDidMount() {
    const { jaService, lang } = this.props;
    const data = jaService.getProductsSlideHome(lang);
    this.props.productsLoaded(data);
  }

  componentDidUpdate(prevProps) {
    const { jaService, lang } = this.props;
    if (prevProps.lang !== this.props.lang) {
      const data = jaService.getProductsSlideHome(lang);
      this.props.productsLoaded(data);
    }
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
      items = productsList.map(item => {
        return <SlideItem key={item.id} item={item} />
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

const mapStateToProps = ({productsList, lang}) => {
  return {
    productsList,
    lang
  }
}

export default withJaService()(connect(mapStateToProps, mapDispatchToProps)(SliderHome))