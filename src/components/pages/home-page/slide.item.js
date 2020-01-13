import React from 'react'

const SlideItem = ({item}) => {

  return (
    <div className="item">
      <img alt="img" src={item.src} />
      <div>{ item.id }</div>
    </div>
  )
}

export default SlideItem