import React from 'react'
import BillingAddress from './BillingAddress/BillingAddress'
import OrderSummary from './OrderSummary/OrderSummary'
import BreadCumb from '../Layout/BreadCumb/BreadCumb'

const Checkout = (props) => (
  <React.Fragment>
    <BreadCumb />
    <div className='checkout_area section-padding-80'>
      <div className='container'>
        <div className='row'>
          <BillingAddress />
          <OrderSummary />
        </div>
      </div>
    </div>
  </React.Fragment>
)

export default Checkout
