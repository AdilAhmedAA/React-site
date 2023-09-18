import React from 'react'
import './WhoWeAre.css'
import { Link } from 'react-router-dom'
import { usespring, animated, useSpring } from 'react-spring'

function Number({n}) {
const {number} = useSpring({
  from: {number: 0},
  number: n,
  delay: 200,
  config: {mass: 1, tension:20, friction: 10},
});
return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>

}

function WhoWeAre(items) {
  return (
    <section className='about-us'>
        <div className='container'>
        <div className="inner">
          <div className="who-we-are">
            <div className="about-image">
              <img src={"images/who-image.png"} alt="" />
            </div>
            <div className="head">
              <h3>Who We Are</h3>
              <h2>Professional Team for Your Solution</h2>
              <p>Vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
            </div>
          </div>
          <div className="about-features">
            <div className="features">
              <Link className="feature">
                <h4><Number n={502} /></h4>
                <p>Projects</p>
              </Link>
              <Link className="feature">
                <h4><Number n={2131} /></h4>
                <p>Customers</p>
              </Link>
              <Link className="feature">
                <h4><Number n={10} /></h4>
                <p>Employees</p>
              </Link>
              <Link className="feature">
                <h4><Number n={341} /></h4>
                <p>Coffee</p>
              </Link>
            </div>
            <div className="about-image">
              <img src="images/feature-image.png" alt="" />
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default WhoWeAre
