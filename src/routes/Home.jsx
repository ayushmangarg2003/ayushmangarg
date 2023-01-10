import React from 'react'
import Heading from "../components/Heading/Heading"
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'
import "./Home.css"
import ProfilePic from "../assets/ProfilePic.jpg"
const Home = () => {
  return (
    <div className="container">
      <Heading heading="Hi There!" />
      <div className='home'>
        <img src={ProfilePic} alt="Ayushman Garg" />
        <div className="text">
          <Paragraphs paragraph="I am Ayushman Garg, a Frontend Web Developer from Delhi"/>
          <Socials/>
        </div>
      </div>
    </div>
  )
}

export default Home
