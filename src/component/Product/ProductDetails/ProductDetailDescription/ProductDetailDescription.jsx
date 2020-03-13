import React from 'react'
import * as $ from 'jquery'

class ProductDetailDescription extends React.Component {
  componentDidMount () {
    const cartbtn1 = $('#essenceCartBtn')
    const cartOverlay = $('.cart-bg-overlay')
    const cartWrapper = $('.right-side-cart-area')
    const cartbtn2 = $('#rightSideCart')
    const cartOverlayOn = 'cart-bg-overlay-on'
    const cartOn = 'cart-on'

    cartbtn1.on('click', function () {
      cartOverlay.toggleClass(cartOverlayOn)
      cartWrapper.toggleClass(cartOn)
    })
    cartOverlay.on('click', function () {
      $(this).removeClass(cartOverlayOn)
      cartWrapper.removeClass(cartOn)
    })
    cartbtn2.on('click', function () {
      cartOverlay.removeClass(cartOverlayOn)
      cartWrapper.removeClass(cartOn)
    })

    if ($.fn.niceSelect) {
      $('select').niceSelect()
    }
  }

  render () {
    return (
      <div className='single_product_desc clearfix'>
        <span>mango</span>
        <a href='cart.html'>
          <h2>One Shoulder Glitter Midi Dress</h2>
        </a>
        <p className='product-price'><span className='old-price'>$65.00</span> $49.00</p>
        <p className='product-desc'>Mauris viverra cursus ante laoreet eleifend. Donec vel fringilla ante. Aenean finibus velit id urna vehicula, nec maximus est sollicitudin.</p>

        <form className='cart-form clearfix' method='post'>
          <div className='select-box d-flex mt-50 mb-30'>
            <select name='select' id='productSize' className='nice-select mr-5'>
              <option value='value'>Size: XL</option>
              <option value='value'>Size: X</option>
              <option value='value'>Size: M</option>
              <option value='value'>Size: S</option>
            </select>
            <select name='select' id='productColor' className='nice-select mr-5'>
              <option value='value'>Color: Black</option>
              <option value='value'>Color: White</option>
              <option value='value'>Color: Red</option>
              <option value='value'>Color: Purple</option>
            </select>
          </div>
          <div className='cart-fav-box d-flex align-items-center'>
            <button type='submit' name='addtocart' value='5' className='btn essence-btn'>Add to cart</button>
            <div className='product-favourite ml-4'>
              <a href='#' className='favme fa fa-heart' />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default ProductDetailDescription
