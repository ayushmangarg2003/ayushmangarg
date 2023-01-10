import React from 'react'
import Certificates from '../components/Certificates/Certificates'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import TechSkills from '../components/TechSkills/TechSkills'
import './About.css'
const About = () => {
  return (
    <div>
      <Heading heading="About me"/>
      <div className="para"><Paragraphs paragraph="Hi, I am Ayushman Garg. Please take a look around."/></div>
      <Certificates/>
      <TechSkills/>
    </div>
  )
}

export default About
