import React  from 'react';
import { Link } from 'react-router-dom'

import './one-product.scss'

import OptionsProduct from './options-product';

const OneProduct = ({item, categoryName, index}) => {
  
  return (
    <div className="oneProductBlock">
      <Link to={
        {pathname: `/product/${item.id}`, 
          query: {
          categoryName, index}}
      }><img src={item.imgSrc[0]} alt=""/></Link>
      <div className="productDescr">
        <Link to={
        {pathname: `/product/${item.id}`, 
          query: {
          categoryName, index}}
        }>
          {item.name}
        </Link>
        <div className="price">
          <span> { item.priceReduce } lei</span>
          <span> { item.price } lei</span>
        </div>
        <OptionsProduct categoryName={categoryName} item={item} />
      </div>
    </div>
  )
}

export default OneProduct