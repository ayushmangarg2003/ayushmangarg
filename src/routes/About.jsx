import React from 'react'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import TechSkills from '../components/TechSkills/TechSkills'

const About = () => {
  return (
    <div>
      <Heading heading="About"/>
      <Paragraphs paragraph="Hi ,I am Ayushman Garg."/>
      <Paragraphs paragraph="
      I was introduced to coding in my 11th class through Python. It was a great experience learning it for 2 years. Later I started learning Web development in my college first year. Till now I have worked with technologies like HTML, CSS, JavaScript, ReactJs, Bootstrap and Tailwind. I continue to improve by exploring other tech like NodeJs and Firebase. Apart from development I am also doing DSA in Python from Leetcode"/> 
      <TechSkills/>
    </div>
  )
}

export default About
