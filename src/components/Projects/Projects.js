import React from 'react'
import Project from './Project'
import Listivity from './../../assets/Listivity.png'
import CoZone from './../../assets/CoZone.jpg'
// import Project from './Project.js'

const myProjects = [
  {
    title: 'CoZone',
    description: 'Worked with a group to create an app that shows Covid19 statistics for any country the user searches for.',
    githubLink: 'https://github.com/TuffLuffJimmy/CoZone',
    deployedLink: 'https://tuffluffjimmy.github.io/CoZone/',
    imageAddress: CoZone
  },
  {
    title: 'Listivity',
    description: 'Collaborated with a group to create an application where a user can save activities that they would like to do by category. The user can then use a randomizer to be presented with a random activity from their list.',
    githubLink: 'https://github.com/ShaneMit/Project2',
    deployedLink: 'https://radiant-woodland-54871.herokuapp.com/',
    imageAddress: Listivity

  }

]

const Projects = () => {
  return(
    <div>
      {myProjects.map(project => {
        return <Project imageAddress={project.imageAddress} title={project.title} description={project.description} githubLink={project.githubLink} deployedLink={project.deployedLink}/>
      })}
    </div>
  )
}

export default Projects