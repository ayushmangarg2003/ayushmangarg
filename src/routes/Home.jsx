import React from 'react'
import Heading from "../components/Heading/Heading"
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'
import "./Home.css"
import ProfilePic from "../assets/profilePic.jpg"

const Home = () => {
  return (
    <div className="container">
      <Heading heading="Hey There!" />
      <div className='home'>
        <img className='img' src={ProfilePic} alt="Ayushman Garg" />
        <div className="text">
          <Paragraphs paragraph={`Hi, My name is Ayushman Garg and I am a MERN stack Web developer.

My passion for computers brought me to Maharaja Agrasen Institute of Technology from where I am pursuing my BTech in Information Technology. I specialize in creating websites using ReactJS and other front-end tools, but I am also a quick learner and able to adapt to new environments and technologies..`}/>
          <Socials/>
        </div>
      </div>
    </div>
  )
}

export default Home
