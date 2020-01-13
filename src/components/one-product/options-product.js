import React, {Component} from 'react';

class OptionsProduct extends Component {
  state = {
    selectedSize: "Marimea",
    addCart: false
  }

  classObj = "containerSize"

  hide() {
    const array = document.querySelectorAll(".selectBox")
    array.forEach(element => {
        element.classList.remove('active')
    });
  }

  show = (e) => {
    e.persist()
    const target = e.target;
    const parent = target.parentNode;

    if(!parent.classList.contains('active')){
      this.hide(target)
    }
    
    if(parent.classList.contains('active')) {
      this.hide();
    } else {
      parent.classList.add('active')
    }
  }

  sizeSelect = (e) => {
    const value = e.target.title

    this.setState({selectedSize: value, addCart: true})
    this.hide()
  }

  checkStock = (stock) => {
    
    if(parseInt(stock) === 0) {
      return this.classObj = "containerSize soldOut"
    } else 
    if(parseInt(stock) > 0 && parseInt(stock) <= 5) {
      return this.classObj = "containerSize limitedSold"
    } else {
      return this.classObj = "containerSize"
    }
  }

  addToCart = () => {
    const {addCart, selectedSize } = this.state
    if(addCart) {
      console.log("product: " + this.props.item.id + "\nsize: " + selectedSize)
    } else {
      console.log("select size")
    }
    
  }

  render() {
    const { selectedSize } = this.state
    const { item } = this.props

    const sizeObj = item.size;
    const sizeItems = Object.keys(sizeObj).map(item => {
      this.checkStock(sizeObj[item].stock)
      return (
        <div key={sizeObj[item].title} className={this.classObj}>
          <input type="radio" name="size" title={sizeObj[item].title} value={item} onChange={this.sizeSelect} />
          <span className="option">
            <span className="optionSize">{ sizeObj[item].title }</span>
            <span> { sizeObj[item].statut } </span>
          </span>
        </div>
      )
    })
    return (
      <div className="productOptions">
        <div className="iconWish"></div>
        <div className="selectBox">
          <div className="optionSelectedBox" onClick={this.show}> { selectedSize } </div>
          <div className="options">
            {
              sizeItems
            }
          </div>
        </div>
        <div className="iconCart buttAddToCart" onClick={this.addToCart} ></div>
      </div>
    )
  }
}

export default OptionsProduct