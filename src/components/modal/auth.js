import React, { Fragment, Component } from 'react';
import { Modal } from 'react-bootstrap';
import { getQueriesForElement } from '@testing-library/react';

class Auth extends Component {
  state = {
    show: false,
    name: '',
    password: ''
  }

  handleClose = () => this.setState({show: false})
  handleShow = () => this.setState({show: true})
  getName = (e) => this.setState({name: e.target.value})
  getPassword = (e) => this.setState({password: e.target.value})

  render() {
    const { name, password, show } = this.state
    return (
      <Fragment>
        <a onClick={this.handleShow}></a>
        <Modal id="auth" show={show} onHide={this.handleClose}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="headerModal">
                Login
                <div onClick={this.handleClose} className="close">X</div>
              </div>
              <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.getUser(name, password)
                }}>
                <input onChange={this.getName} type="text" placeholder="name" />
                <input onChange={this.getPassword} type="password" placeholder="*****" />
                <input onClick={this.handleClose} type="submit" value="send" />
              </form>
            </div>
          </div>
        </Modal>
      </Fragment>
    )
  }
}

export default Auth;