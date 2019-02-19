import React, { Component } from 'react';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Cart.css';

class CartPage extends Component {
  static contextType = ShopContext;

  componentDidMount() {
    console.log(this.context);
  }

  render() {
    const {
      cart,
      products,
      addProductToCart,
      removeProductFromCart
    } = this.context;
    return (
      <React.Fragment>
        <MainNavigation
          cartItemNumber={cart.reduce((count, curItem) => {
            return count + curItem.quantity;
          }, 0)}
        />
        <main className="cart">
          {cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={removeProductFromCart.bind(this, cartItem.id)}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}

export default CartPage;
