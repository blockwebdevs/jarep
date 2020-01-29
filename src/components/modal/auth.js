import React, { Fragment, Component } from 'react';
import { Modal } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import {compose} from '../../utils'
import  withJaService  from '../hoc';

import { auth } from '../../actions'

class Auth extends Component {

  componentDidMount() {
    this.props.auth('1993albu@gmail.com', 'japroject2020')
  }
  state = {
    email: null,
    password: null
  }

  handleClose = () => this.setState({show: false})
  handleShow = () => this.setState({show: true})
  getEmail = (e) => this.setState({email: e.target.value})
  getPassword = (e) => this.setState({password: e.target.value})

  render() {
    const { email, password, show, onAuth } = this.state
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
                  onAuth()
                }}>
                <input onChange={this.getEmail}  type="email" placeholder="email..." required />
                <input onChange={this.getPassword} type="password" placeholder="*****" required />
                <input type="submit" value="send" />
              </form>
            </div>
          </div>
        </Modal>
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch, {jaService}) => {
  return bindActionCreators({
      auth: auth()
  }, dispatch)
}

const mapStateToProps = ({ lang }) => {
  return {
    lang
  }
}

export default compose(
  withJaService(),
  connect(mapStateToProps, mapDispatchToProps))(Auth)