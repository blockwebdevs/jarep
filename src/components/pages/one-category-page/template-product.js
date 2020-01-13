import React from 'react';

import OneProduct from '../../one-product';

const TemplateProducts = ({categoryList}) => {

  let count = 1;
  let items = null 

  if(categoryList !== []) {
    items = categoryList.map(item => {
      const productContainer = "productContainer product" + count;
      count += 1;
      return (
        <div key={item.id} className={productContainer}>
          <OneProduct  item={item} />
        </div>
      )
    })
  }
  
  return (
    <div className="templateProductsOne">
      {
        items
      }
    </div>
  )
}

export default TemplateProducts