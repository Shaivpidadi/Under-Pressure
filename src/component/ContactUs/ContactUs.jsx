import React from 'react'
import ContactUsMap from './ContactUsMap/ContactUsMap'
import ContactUsDetails from './ContactUsDetails/ContactUsDetails'

const ContactUs = (props) => (
  <div className='contact-area d-flex align-items-center'>
    <ContactUsMap />
    <ContactUsDetails />
  </div>
)

export default ContactUs
