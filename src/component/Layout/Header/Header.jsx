import React from 'react'
import HeaderRightCard from '../../Cart/HeaderRightCard/HeaderRightCard'
import HeaderNav from './HeaderNav/HeaderNav'
import * as $ from 'jquery'
class Header extends React.Component {
  componentDidMount () {
    /* eslint-disable no-unused-expressions */
    // eslint-disable-next-line
    $( '.navbarToggler' ).click(function() {
      $('.classy-menu').toggleClass('menu-on')
    })

    $('.cross-wrap').click(function () {
      $('.classy-menu').toggleClass('menu-on')
    })

    $('.classynav ul>li').click(function () {
      $('.classy-menu').toggleClass('menu-on')
    })
  }
  render () {
    return (
      <React.Fragment>
        <HeaderNav />
        <HeaderRightCard />
      </React.Fragment>
    )
  }
}

export default Header
