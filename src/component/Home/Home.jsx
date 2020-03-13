import React from 'react'
import BannerSection from '../BannerSection/BannerSection'
import Catagories from '../Catagories/Catagories'
import CTABanner from '../CTABanner/CTABanner'
import BrandAlerts from '../BrandAlerts/BrandAlerts'
// import NewArrivals from '../NewArrivals/NewArrivals'

class Home extends React.Component {
  render () {
    return (
      <React.Fragment>
        <BannerSection />
        <Catagories />
        <CTABanner />
        {/* <NewArrivals /> */}
        <BrandAlerts />
      </React.Fragment>
    )
  }
}

export default Home
