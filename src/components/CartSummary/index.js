import './index.css'
import CartContext from '../../context/CartContext'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const total = cartList.reduce(
        (prev, current) => prev + current.price * current.quantity,
        0,
      )
      const emptyList = cartList.length === 0
      return emptyList ? null : (
        <div className="order-summary-container">
          <h1 className="order-text">
            Order total:<span className="order-total">Rs {total}/-</span>
          </h1>
          <p className="item-count">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            CheckOut
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
