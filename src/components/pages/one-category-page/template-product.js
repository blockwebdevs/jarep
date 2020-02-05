import React from 'react';

import OneProduct from '../../one-product';

const TemplateProducts = ({categoryList, categoryName}) => {

  let count = 1;
  let items = null 

  if(categoryList !== []) {
    items = categoryList.map((item, index) => {

      const productContainer = "productContainer product" + count;
      count += 1;
      return (
        <div key={item.id} className={productContainer}>
          <OneProduct categoryName={categoryName} index={index}  item={item} />
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