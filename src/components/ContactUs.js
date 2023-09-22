import React from 'react'
import AnimatedSVG from './AnimatedSVG'
import AnimatedSVG2 from './AnimatedSVG2'
import './ContactUs.css'
import { Button } from './Button'

function ContactUs() {
  return (
    <div className='ContactUs'>
      <div className="container">
            <div className="inner">
                <div className="details">
                    <h2>Let’s Work Together</h2>
                    <Button buttonStyle='btn--primary' buttonSize='btn--large' text='Contact Us' />
                </div>
                <div className='back-svg' dangerouslySetInnerHTML={{ __html: AnimatedSVG }} />
                <div className='front-svg' dangerouslySetInnerHTML={{ __html: AnimatedSVG2 }} />
                <div className="contact-cta-image">
                    <img src="images/cta-image.png" alt="" />
                </div>
            </div>
      </div>
    </div>
  )
}

export default ContactUs
