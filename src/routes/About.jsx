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
      <div className="para"><Paragraphs paragraph="Hi, I am Ayushman Garg, I was first introduced to programming in my 11th grade through Python programming language. I then began learning web development during my first year of college and have since gained experience working with technologies such as HTML, CSS, JavaScript, ReactJs, MongoDB, ExpressJs, NodeJs,Firebase, Bootstrap, and Tailwind."/></div>
      <Certificates/>
      <TechSkills/>
    </div>
  )
}

export default About
