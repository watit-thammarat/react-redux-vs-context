import React, { Component } from 'react';

import ShopContext from '../context/shop-context';
import MainNavigation from '../components/MainNavigation';
import './Products.css';

class ProductsPage extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {({ products, cart, addProductToCart, removeProductFromCart }) => (
          <React.Fragment>
            <MainNavigation
              cartItemNumber={cart.reduce((count, curItem) => {
                return count + curItem.quantity;
              }, 0)}
            />
            <main className="products">
              <ul>
                {products.map(product => (
                  <li key={product.id}>
                    <div>
                      <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                      <button onClick={addProductToCart.bind(this, product)}>
                        Add to Cart
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </main>
          </React.Fragment>
        )}
      </ShopContext.Consumer>
    );
  }
}

export default ProductsPage;
