import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import * as actions from '../../../actions'

class ShopMain extends React.Component {
  componentWillMount () {
    // const productList = this.props.getProductList()
    // const productList = this.props
    // console.log({ productList })
  }
  componentDidMount () {
    const productList = this.props.getProductList()
    // const productList = this.props.productList
    console.log({ productList })
  }
  render () {
    console.log('Products -->', this.props.productList)
    return (
      <div className='col-12 col-md-8 col-lg-9'>
        <div className='shop_grid_product_area'>
          <div className='row'>
            <div className='col-12'>
              <div className='product-topbar d-flex align-items-center justify-content-between'>
                <div className='total-products'>
                  <p><span>186</span> products found</p>
                </div>
                <div className='product-sorting d-flex'>
                  <p>Sort by:</p>
                  <form action='#' method='get'>
                    <select name='select' id='sortByselect'>
                      <option value='value'>Highest Rated</option>
                      <option value='value'>Newest</option>
                      <option value='value'>Price: $$ - $</option>
                      <option value='value'>Price: $ - $$</option>
                    </select>
                    <input type='submit' className='d-none' value='' />
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='row'>
            {this.props.productList.map(product => {
              return (
                <div className='col-12 col-sm-6 col-lg-4'>
                  <div className='single-product-wrapper'>
                    <div className='product-img'>
                      <img src='img/product-img/product-1.jpg' alt='' />
                      <img className='hover-img' src='img/product-img/product-2.jpg' alt='' />
                      {product.productDiscount}
                      <div className='product-badge offer-badge'>
                        <span>-{product.discountPercentage}%</span>
                      </div>
                      <div className='product-favourite'>
                        <a href='#' className='favme fa fa-heart' />
                      </div>
                    </div>

                    <div className='product-description'>
                      <span>{product.productType}</span>
                      <Link to='/product-details'>
                        <h6>{product.name}</h6>
                      </Link>
                      <p className='product-price'><span className='old-price'>{product.oldPrice ? '$' + product.oldPrice.toFixed(2) : 'New'}</span> ${product.price.toFixed(2)}</p>

                      <div className='hover-content'>
                        <div className='add-to-cart-btn'>
                          <a href='#' className='btn essence-btn'>Add to Cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <nav aria-label='navigation'>
          <ul className='pagination mt-50 mb-70'>
            <li className='page-item'><a className='page-link' href='#'><i className='fa fa-angle-left' /></a></li>
            <li className='page-item'><a className='page-link' href='#'>1</a></li>
            <li className='page-item'><a className='page-link' href='#'>2</a></li>
            <li className='page-item'><a className='page-link' href='#'>3</a></li>
            <li className='page-item'><a className='page-link' href='#'>...</a></li>
            <li className='page-item'><a className='page-link' href='#'>21</a></li>
            <li className='page-item'><a className='page-link' href='#'><i className='fa fa-angle-right' /></a></li>
          </ul>
        </nav>
      </div>
    )
  }
}

// export default ShopMain

const mapStateToProps = state => {
  // const { productList } = Product
  // return { productList }

  return {
    productList: state.Product.productList
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    getProductList: () => dispatch(actions.getProductList())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ShopMain))
