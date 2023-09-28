import React, { useState, useEffect, useRef } from 'react';
import './Accordian.css';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const accordionContentRef = useRef(null);  

  useEffect(() => {
    if (isActive) {
      accordionContentRef.current.classList.add('active');
      accordionContentRef.current.style.margin = '0 0 0 0';
      
    } else {
      accordionContentRef.current.classList.remove('active');
      const emargin = accordionContentRef.current.clientHeight;
      accordionContentRef.current.style.margin = '-' + emargin +'px 0 0 0';

    }
  }, [isActive]);

  return (
    <div className="accordion-single" >
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h6>{title}</h6>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div
        className="accordion-content"
        ref={accordionContentRef} 
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Accordion;

/* 
  import Accordion from './Accordion';

  const accordionData = [
    {
      title: 'Section 1',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Section 2',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    },
    {
      title: 'Section 3',
      content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`
    }
  ];

<div className="accordion">
    {accordionData.map(({ title, content }) => (
    <Accordion title={title} content={content} />
    ))}
</div>
*/
