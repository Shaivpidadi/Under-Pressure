import React from 'react'
import BreadCumb from '../Layout/BreadCumb/BreadCumb'
import ShopFull from './ShopFull/ShopFull'

const Shop = (props) => (
  <React.Fragment>
    <BreadCumb breadCumbTitle={'Dresses'} />
    <ShopFull />
  </React.Fragment>
)

export default Shop
