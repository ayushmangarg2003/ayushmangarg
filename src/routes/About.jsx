import React from 'react'
import Certificates from '../components/Certificates/Certificates'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import TechSkills from '../components/TechSkills/TechSkills'

const About = () => {
  return (
    <div>
      <Heading heading="About me"/>
      <Paragraphs paragraph="Hi, I am Ayushman Garg."/>
      <Certificates/>
      <TechSkills/>
    </div>
  )
}

export default About
