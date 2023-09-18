import React from 'react';
import './FeaturesCardItem.css';
import FeaturesCardItem from './FeaturesCardItem';


const Data = [
  {
    id:32,
    path: '/',
    label: 'Web Design',
    src:'images/Iconpc.png',
    text:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    link:'Find Out More'
  },
  { id:56,
    path:'/',
    label:'Consultance',
    src:'images/Iconpc1.png',
    text:'Nulla vitae elit libero, a pharetra augue. Cum sociis natoque penatibus et magnis dis parturient montes.',
    link:'Find Out More'
  },
  { id:84,
    path:'/',
    label:'Web Development',
    src:'images/Iconpc2.png',
    text:'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Aenean lacinia bibendum nulla sed consectetur.',
    link:'Find Out More'
  },
];

function FeatureCards() {
  return (
    <section className='FeaturesCardItem'>
      <div className='container'>
    <div className='cards'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
          {Data.map((item, id) => (
                <FeaturesCardItem
                  id={item.id}
                  key={id}
                  path={item.path}
                  label={item.label}
                  src={item.src}
                  text={item.text}
                  link={item.link}
                />
              ))}
          </ul>
        </div>
      </div>
    </div>
    </section>
  );
}

export default FeatureCards;







// import React ,{useEffect, useState} from 'react';
// import './FeaturesCardItem.css';
// import FeaturesCardItem from './FeaturesCardItem';
// import axios from 'axios';


// function FeatureCards() {

//   const [products, setProducts] = useState([])

//   useEffect(()=>{
//     axios.get('https://fakestoreapi.com/products')
//     .then(response => setProducts(response.data))
//     .catch(err => console.log(err))

//   },[])

//   const newProducts = products.filter((data) =>{
//     return data.category === "jewelery";
//   })

//   console.log("newPro" , newProducts)

//   return (
//     <section className='FeaturesCardItem'>
//       <div className='container'>
//     <div className='cards'>
//         <div className='cards__wrapper'>
//           <ul className='cards__items'>
//           {newProducts.slice(0,3).map((item, id) => (
//                 <FeaturesCardItem
//                   id={item.id}
//                   key={id}
//                   // path={item.path}
//                   label={item.category}
//                   src={item.image}
//                   text={item.description}
//                   link={item.price}
//                 />
//               ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//     </section>
//   );
// }

// export default FeatureCards;
