import React from 'react'
import { Link } from 'react-router-dom'

const HeaderNav = (props) => (
  <header className='header_area'>
    <div className='classy-nav-container breakpoint-off d-flex align-items-center justify-content-between'>
      <nav className='classy-navbar' id='essenceNav'>
        <Link className='nav-brand' to='/' ><img src='img/core-img/logo.png' alt='' /> </Link>
        <div className='classy-navbar-toggler'>
          <span className='navbarToggler'><span /><span /><span /></span>
        </div>
        <div className='classy-menu'>
          <div className='classycloseIcon'>
            <div className='cross-wrap'><span className='top' /><span className='bottom' /></div>
          </div>
          <div className='classynav'>
            <ul style={{ width: '100%' }}>
              <li className='megamenu-item'>
                <Link to='/shop'>Shop</Link>
                <div className='megamenu'>
                  <ul className='single-mega cn-col-4'>
                    <li className='title'>Women's Collection</li>
                    <li><Link to='/shop'>Dresses</Link></li>
                    <li><Link to='/shop'>Blouses &amp; Shirts</Link></li>
                    <li><Link to='/shop'>T-shirts</Link></li>
                    <li><Link to='/shop'>Rompers</Link></li>
                    <li><Link to='/shop'>Bras &amp; Panties</Link></li>
                  </ul>
                  <ul className='single-mega cn-col-4'>
                    <li className='title'>Men's Collection</li>
                    <li><Link to='/shop'>T-Shirts</Link></li>
                    <li><Link to='/shop'>Polo</Link></li>
                    <li><Link to='/shop'>Shirts</Link></li>
                    <li><Link to='/shop'>Jackets</Link></li>
                    <li><Link to='/shop'>Trench</Link></li>
                  </ul>
                  <ul className='single-mega cn-col-4'>
                    <li className='title'>Kid's Collection</li>
                    <li><Link to='/shop'>Dresses</Link></li>
                    <li><Link to='/shop'>Shirts</Link></li>
                    <li><Link to='/shop'>T-shirts</Link></li>
                    <li><Link to='/shop'>Jackets</Link></li>
                    <li><Link to='/shop'>Trench</Link></li>
                  </ul>
                  <div className='single-mega cn-col-4'>
                    <img src='img/bg-img/bg-6.jpg' alt='' />
                  </div>
                </div>
              </li>
              {/* <li className='megamenu-item cn-dropdown-item has-down pr12'>
                <Link to='#'>Pages</Link>
                <ul className='dropdown'>
                  <li><Link to='index.html'>Home</Link></li>
                  <li><Link to='/shop'>Shop</Link></li>
                  <li><Link to='single-product-details.html'>Product Details</Link></li>
                  <li><Link to='checkout.html'>Checkout</Link></li>
                  <li><Link to='blog.html'>Blog</Link></li>
                  <li><Link to='single-blog.html'>Single Blog</Link></li>
                  <li><Link to='regular-page.html'>Regular Page</Link></li>
                  <li><Link to='contact.html'>Contact</Link></li>
                </ul>
              </li> */}
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/contact-us'>Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className='header-meta d-flex clearfix justify-content-end'>
        <div className='search-area'>
          <form action='#' method='post'>
            <input type='search' name='search' id='headerSearch' placeholder='Type for search' />
            <button type='submit'><i className='fa fa-search' aria-hidden='true' /></button>
          </form>
        </div>
        <div className='favourite-area'>
          <Link to='#'><img src='img/core-img/heart.svg' alt='' /> </Link>
        </div>
        <div className='user-login-info'>
          <Link to='#'><img src='img/core-img/user.svg' alt='' /> </Link>
        </div>
        <div className='cart-area'>
          <Link to='#' id='essenceCartBtn'><img src='img/core-img/bag.svg' alt='' /> <span>3</span> </Link>
        </div>
      </div>

    </div>
  </header>
)

export default HeaderNav
