import React from 'react'
import './Faqs.css'
import Accordion from './Accordion';

  const accordionData = [
    {
      title: 'Sed ut perspiciatis unde omnis iste natus ?',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
    },
    {
      title: 'Temporibus autem quibusdam et aut ?',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
    },
    {
      title: 'Nam libero tempore, cum soluta?',
      content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
    }
  ];

function Faqs() {
  return (
    <div className='Faqs'>
      <div className="container">
        <div className="inner">
            <div className="faqs-wrapper">
                <div className="head">
                    <h3>Frequently Asked Question</h3>
                    <h2>How can we help?</h2>
                </div>
                <div className="accordion">
                    {accordionData.map(({ title, content }) => (
                    <Accordion title={title} content={content} />
                    ))}
                </div>
            </div>
            <div className="Faqs-image">
                <img src="images/Faqs.png" alt="" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Faqs
