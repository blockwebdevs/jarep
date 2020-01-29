import React from 'react'

const SlideItem = ({item}) => {

  return (
    <div className="item">
      <img alt="img" src={item.srcImg} />
    </div>
  )
}

export default SlideItem