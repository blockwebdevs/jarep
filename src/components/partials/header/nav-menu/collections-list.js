import React from 'react';

import ListItem from './list-item'

const CollectionsList = ({list}) => {

  let items = [];
  let setItems = [];
  const getSetItems = (item) => {
    setItems = item.map(item => {
      return <ListItem key={item} item={item} />
    })
  }
  if(list !== undefined){
    
     items = Object.keys(list).map(item => {
      getSetItems(list[item].sets)
      return  <li className="submenuButton" key={item}>
                <ListItem key={list[item].title} item={list[item].title} />
                <ul className="setList">
                  {
                   setItems 
                  }
                </ul>
              </li>
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

export default CollectionsList