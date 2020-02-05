import React from 'react'

const Lang = ({ langue, changeLang }) => {
  return <div onClick={() => changeLang(langue)} >{langue}</div>
}

export default Lang