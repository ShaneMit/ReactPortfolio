import React from 'react'

const Project = props => {
  return(
    <>
      <div className="card" style={{width: '18rem'}}>
        <img src={props.imageAddress} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h1>{props.title}</h1>
            <p className="card-text">{props.description}</p>
            <link rel="stylesheet" href={props.githubLink}/>
            <link rel="stylesheet" href={props.deployedLink}/>
          </div>
      </div>
    </>
  )
}

export default Project