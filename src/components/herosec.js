import React from 'react'
import { Button } from './Button';
import './herosec.css';
import Hero from './images/Saly.png'

export default function herosec() {
  return (
    <section className='hero'>
        <div className='container'>
            <div className='inner'>
                <div className='hero-details'>
                    <h1>Digital Marketing Solution for <span>Your Business</span></h1>
                    <div className='btn-wrapper'>
                  <Button buttonStyle='btn--primary' buttonSize='btn--large' text='Button' />
                  <Button buttonStyle='btn--outline' buttonSize='btn--large' text='Button' />
                    </div>
                </div>
                <div className='hero-image'>
                    <img src={Hero} />
                </div>
            </div>
        </div>
    </section>
  )
}
