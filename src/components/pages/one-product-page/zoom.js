import React, {Component} from 'react'

import './zoom.scss'

class ZoomContainer extends Component {
  state = {
    arr: null,
    y: 0,
    currentImg: null
  }

  componentDidMount(){
    const { arr, currentImage } = this.props
    this.setState({arr, currentImage, y: 0})
  }

  changeCurrentImage = (e) => {
    const currentImage = e.target.src
    e.target.classList.add('current')
    this.setState({currentImage})
  }

  onMove = (e) => {
    const ham = e.target.offsetHeight
    const vpnHeight = window.innerHeight
    const y = -((ham - vpnHeight) / vpnHeight) * e.clientY
    // if (y < 0) {
    //   return null
    // }
    this.setState({y})
    
  }
  
  render() {
    const { closeThis } = this.props
    const { arr, currentImage, y } = this.state

    let elements = null

    if(arr !== null) {
      elements = arr.map((item, key) => {
        return <img onClick={this.changeCurrentImage} className={ item == currentImage ? "current" : null } src={item} key={key} />
      })
    }
    
    return(
      <div className="zoomContainer">
        <div className="zoomContainerNavigation">
          {elements}
        </div>
        {currentImage ? <img onClick={closeThis} onMouseMove={this.onMove} src={currentImage} style={{top: y + "px"}} /> : null }
      </div>
    )
  }
}

export default ZoomContainer