import React from 'react'

const Input = (props) => (
  <input
    type={props.type}
    className='form-control'
    value={props.value}
    onChange={props.onChange}
    placeholder={props.placeholder}
  />
)

export default Input
