import './Faqs.css'
import Accordion from './Accordion';
import React, { useState, useEffect } from 'react';
import db from '../firebase';
import { onSnapshot, collection } from 'firebase/firestore';

  // const accordionData = [
  //   {
  //     title: 'Sed ut perspiciatis unde omnis iste natus ?',
  //     content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
  //   },
  //   {
  //     title: 'Temporibus autem quibusdam et aut ?',
  //     content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
  //   },
  //   {
  //     title: 'Nam libero tempore, cum soluta?',
  //     content: `At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.`
  //   }
  // ];

function Faqs() {
  const [AccordionData, setAccordionData] = useState([]);

  useEffect(() => {
    onSnapshot(collection(db, 'Faqs'), (snapshot) => {
      setAccordionData(snapshot.docs.map((doc) => doc.data()));
      console.log(AccordionData);
    });
  }, []);
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
                    {AccordionData.map(({ Question, Answer }) => (
                    <Accordion title={Question} content={Answer} />
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
