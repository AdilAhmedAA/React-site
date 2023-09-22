import React from 'react'
import './herosec.css';

export default function PageHero(title) {
  return (
    <section className='hero page-hero'>
        <div className='container'>
            <div className='inner'>
              <div className='hero-details'>
                <h1>{title.title}</h1>
              </div>
            </div>
        </div>
    </section>
  )
}
