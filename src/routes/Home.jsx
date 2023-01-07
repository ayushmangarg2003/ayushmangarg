import React from 'react'
import Heading from "../components/Heading/Heading"
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'
const Home = () => {
  return (
    <div className='home'>
      <Heading heading="Hi There!" />
      <Paragraphs paragraph="I am Ayushman Garg, a Frontend Web Developer from Delhi"/>
      <Socials/>
    </div>
  )
}

export default Home
