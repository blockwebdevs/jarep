import React from 'react';
import {Link} from 'react-router-dom'

const ListItem = ({item, goTo}) => {
  const go = "/category/" + goTo
  return (
      <Link to={go} >
        {item}
      </Link>
  )
}

export default ListItem