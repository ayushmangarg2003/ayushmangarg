import React from 'react'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import TechSkills from '../components/TechSkills/TechSkills'

const About = () => {
  return (
    <div>
      <Heading heading="About"/>
      <Paragraphs paragraph="I am Ayushman Garg, a Frontend Web Developer from Delhi"/>
      <Paragraphs paragraph="
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa ratione, expedita veritatis dolorem magni animi praesentium voluptatibus vero debitis possimus? Unde architecto ea, facere, officiis nesciunt dignissimos officia nemo optio voluptas consequuntur vitae in non laboriosam atque fugiat mollitia facilis magni maiores soluta, dolore nihil error. Perferendis nulla eveniet eum!"/> 
      <TechSkills/>
    </div>
  )
}

export default About
