import React from 'react'
import ShopLeftSidebar from '../ShopLeftSidebar/ShopLeftSidebar'
import ShopMain from '../ShopMain/ShopMain'

const ShopFull = (props) => (
  <section className='shop_grid_area section-padding-80'>
    <div className='container'>
      <div className='row'>
        <ShopLeftSidebar />
        <ShopMain />
      </div>
    </div>
  </section>
)

export default ShopFull
