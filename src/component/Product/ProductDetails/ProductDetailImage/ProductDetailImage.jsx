import React from 'react'
// import OwlCarousel from 'react-owl-carousel'

const ProductDetailImage = (props) => (
  <div className='single_product_thumb clearfix'>
    {/* <OwlCarousel margin={10} >
      <img src='img/product-img/product-big-1.jpg' alt='' />
      <img src='img/product-img/product-big-2.jpg' alt='' />
      <img src='img/product-img/product-big-3.jpg' alt='' />
    </OwlCarousel> */}
    <div className='product_thumbnail_slides owl-carousel'>
      <img src='img/product-img/product-big-1.jpg' alt='' />
      <img src='img/product-img/product-big-2.jpg' alt='' />
      <img src='img/product-img/product-big-3.jpg' alt='' />
    </div>
  </div>
)

export default ProductDetailImage
