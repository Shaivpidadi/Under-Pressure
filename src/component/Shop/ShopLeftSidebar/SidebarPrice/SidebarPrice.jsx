import React from 'react'
// import * as jQuery from 'jquery'

class SidebarPrice extends React.Component {
  componentDidMount () {
    // $('.slider-range-price').each(function () {
    //   var min = jQuery(this).data('min')
    //   var max = jQuery(this).data('max')
    //   var unit = jQuery(this).data('unit')
    //   var value_min = jQuery(this).data('value-min')
    //   var value_max = jQuery(this).data('value-max')
    //   var label_result = jQuery(this).data('label-result')
    //   var t = $(this)
    //   $(this).slider({
    //     range: true,
    //     min: min,
    //     max: max,
    //     values: [value_min, value_max],
    //     slide: function (event, ui) {
    //       var result = label_result + ' ' + unit + ui.values[0] + ' - ' + unit + ui.values[1]
    //       console.log(t)
    //       t.closest('.slider-range').find('.range-price').html(result)
    //     }
    //   })
    // })
  }
  render () {
    return (
      <div className='widget price mb-50'>
        <h6 className='widget-title mb-30'>Filter by</h6>
        <p className='widget-title2 mb-30'>Price</p>

        <div className='widget-desc'>
          <div className='slider-range'>
            <div data-min='49' data-max='360' data-unit='$' className='slider-range-price ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all' data-value-min='49' data-value-max='360' data-label-result='Range:'>
              <div className='ui-slider-range ui-widget-header ui-corner-all' />
              <span className='ui-slider-handle ui-state-default ui-corner-all' tabIndex='0' />
              <span className='ui-slider-handle ui-state-default ui-corner-all' tabIndex='0' />
            </div>
            <div className='range-price'>Range: $49.00 - $360.00</div>
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarPrice
