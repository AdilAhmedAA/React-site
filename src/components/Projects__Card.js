import React from 'react'
import './Projects.css'
import { Link } from 'react-router-dom'

function Projects__Card(Project) {
  return (
    <div className='Project__Card'>
        <Link>
        <img src={Project.image} alt="" />
        <div className="details">
          <h4>{Project.title}</h4>
          <span>{Project.desc}</span>
        </div>
        </Link>
    </div>
  )
}

export default Projects__Card
