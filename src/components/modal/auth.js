import React from 'react';

import './modal.scss'

export default class Auth extends React.Component {

  state = {
    show: false
  }

  render(){
    if(!this.state.show) {
      return <div></div>
    }
    return (
      <div id="auth" className="modal">
        <div className="modal-content">
          <form>
            <input type="text" placeholder="name" />
            <input type="password" placeholder="*****" />
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    )
  }
}