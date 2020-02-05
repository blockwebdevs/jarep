import React, {Component} from 'react';
import {connect} from 'react-redux'

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

  addTo = (setWhat, cons, item, cart) => {
    const countStorage = JSON.parse(localStorage.getItem(cons))
    
    if(countStorage == null) {
      let arr = [];
      arr = [...arr, item]
      
      localStorage.setItem(cons, JSON.stringify(arr))
      setWhat(JSON.parse(localStorage.getItem(cons)).length)

    } else {

      const boolWish = countStorage
      let bool = true

      for(let i in boolWish) {
        if(boolWish[i]["id"] == item.id){
          if(!cart) {
            bool = false
            break
          }
          if(boolWish[i]["selectedSize"] !== item.selectedSize) {
            bool = true
            break
          } else {
            bool = false
            break
          }
        }
      }

      if(bool) {
        const newCount = [...countStorage, item]
        localStorage.setItem(cons, JSON.stringify(newCount))
        setWhat(JSON.parse(localStorage.getItem(cons)).length)
      }
    }
  }

  addToCart = () => {
    const {addCart, selectedSize } = this.state
    const { item, setCartCount, categoryName } = this.props
    const cart = true

    const newItem = {
      id: item.id,
      categoryName,
      selectedSize
    }
    if(addCart) {
      const cons = "cartCount"
      this.addTo(setCartCount, cons, newItem, cart)
    } else {
      console.log("select size")
    }
  }

  addToWish = () => {
    const { item, setWishCount, categoryName } = this.props
    const newItem = {
      id: item.id,
      categoryName
    }
    const cons = "wishCount"
    this.addTo(setWishCount, cons, newItem)
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
        <div className="iconWish" onClick={this.addToWish}></div>
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

const mapDispatchToProps = (dispatch) => {
  return {
    setCartCount: (cartCount) => {
      dispatch({
        type: 'FETCH_CARTCOUNT',
        payload: cartCount
      })
    },
    setWishCount: (wishCount) => {
      dispatch({
        type: 'FETCH_WISHCOUNT',
        payload: wishCount
      })
    }
  }
}

export default connect(null, mapDispatchToProps)(OptionsProduct)