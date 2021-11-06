import React from 'react';
import CartIcon from '../../../../assets/cart.svg';
import './product-navbar.styles.scss';

import navbarIcon from '../../../../assets/navbar-icon.svg';

const ProductNavbar = () => {

  return (
    <nav className="product-navbar">
      <div className="product-navbar-left">
        <img src={navbarIcon} style={{ height: '50px', width: '50px'}}/>
        <h4>Amaranthaceae</h4>
      </div>

      <div className="product-navbar-right">

          <a href="#related-card-container">Related</a>
          <a href="#questions-section-container">Questions</a>
          <a href="#ratings-reviews-container">Reviews</a>
          <img src={CartIcon} style={{ height: '50px', width: '50px' }}/>
      </div>

    </nav>
  )
}

export default ProductNavbar