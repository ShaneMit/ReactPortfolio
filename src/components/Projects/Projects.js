import React from 'react'
import Project from './Project'
import Listivity from './../../assets/Listivity.png'
// import Project from './Project.js'

const myProjects = [
  {
    title: 'project 1',
    description: 'description',
    githubLink: 'link',
    deployedLink: 'link',
    imageAddress: Listivity

  },
  {
    title: 'project 2',
    description: 'description',
    githubLink: 'link',
    deployedLink: 'link',
    imageAddress: 'link'
  }
]

const Projects = () => {
  return(
    <div>
      {myProjects.map(project => {
        return <Project imageAddress={project.imageAddress} title={project.title} description={project.description} />
      })}
    </div>
  )
}

export default Projects