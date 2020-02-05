import React from 'react';

import ListItem from './list-item'

const ProductsList = ({list}) => {

  let items = []
  if(list !== undefined){
    items = Object.keys(list).map(item => {
      console.log(item)
      return <li key={item}><ListItem item={list[item]} goTo={item} /></li>
    })
  }

    return (
      <ul className="subMenu">
        {
          items
        }
      </ul>
    )
}

export default ProductsList