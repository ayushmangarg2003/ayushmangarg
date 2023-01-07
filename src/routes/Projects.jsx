import React from 'react'
import Heading from '../components/Heading/Heading'
import Project from '../components/Project/Project';
import "./Projects.css"
import projectDetails from "../components/ProjectDetails"

const Projects = () => {
  return (
    <div>
      <Heading heading="My Projects"/>
      <div className="projects">
        {
        projectDetails.map((i)=>(
          <Project key={i.name} name = {i.name} text={i.text} tags= {i.tags} img={i.imgsrc} link={i.link}></Project>
        ))
        }
      </div>
    </div>
  )
}

export default Projects
