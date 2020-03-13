import React from 'react'
import SidebarBrands from '../ShopLeftSidebar/SidebarBrands/SidebarBrands'
import SidebarCatagories from '../ShopLeftSidebar/SidebarCatagories/SidebarCatagories'
import SidebarColor from '../ShopLeftSidebar/SidebarColor/SidebarColor'
import SidebarPrice from '../ShopLeftSidebar/SidebarPrice/SidebarPrice'

const ShopLeftSidebar = (props) => (
  <div className='col-12 col-md-4 col-lg-3'>
    <SidebarBrands />
    <SidebarCatagories />
    <SidebarColor />
    <SidebarPrice />
  </div>
)

export default ShopLeftSidebar
