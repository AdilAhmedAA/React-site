import React from 'react'

function Testimonial_cards(author) {
  return (
    <div className='Testimonials-card'>
      <p className='message'>{author.message}</p>
        <div className="author">
            <img src={author.image} alt="" />
            <div className="author-name">
                <h4>{author.name}</h4>
                <span>{author.role}</span>
            </div>
        </div>
    </div>
  )
}

export default Testimonial_cards
