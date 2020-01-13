import React from 'react'

const Lang = ({ lang, changeLang }) => {
  return <div onClick={() => changeLang(lang)} >{lang}</div>
}

export default Lang