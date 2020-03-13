import React from 'react'
import ProductDetailImage from './ProductDetailImage/ProductDetailImage'
import ProductDetailDescription from './ProductDetailDescription/ProductDetailDescription'

const ProductDetails = (props) => (
  <section className='single_product_details_area d-flex align-items-center'>
    <ProductDetailImage />
    <ProductDetailDescription />
  </section>
)

export default ProductDetails
