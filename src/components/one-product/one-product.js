import React  from 'react';
import { Link } from 'react-router-dom'

import './one-product.scss'

import OptionsProduct from './options-product';

const OneProduct = ({item}) => {
  const go = "/product/" + item.id
  return (
    <div className="oneProductBlock">
      <a href="oneProductPage.html"><img src={item.img} alt=""/></a>
      <div className="productDescr">
        <Link to={go}>
          {item.name}
        </Link>
        <div className="price">
          <span> { item.priceReduce } lei</span>
          <span> { item.price } lei</span>
        </div>
        <OptionsProduct item={item} />
      </div>
    </div>
  )
}

export default OneProduct