import React from 'react'
import { Link } from 'react-router-dom'

const Project = props => {
  return(
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src={props.imageAddress} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1>{props.title}</h1>
            <p className="card-text">{props.description}</p>
            <a href={props.deployedLink}>{props.title}</a>
            <a href={props.githubLink}> GitHub</a>
          </div>
      </div>
    </>
  )
}

export default Project