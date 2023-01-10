import React from 'react'
import Heading from "../components/Heading/Heading"
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'
import "./Home.css"
import ProfilePic from "../assets/ProfilePic.jpg"

const Home = () => {
  return (
    <div className="container">
      <Heading heading="Hey There!" />
      <div className='home'>
        <img className='img' src={ProfilePic} alt="Ayushman Garg" />
        <div className="text">
          <Paragraphs paragraph={`I am Ayushman Garg a frontend web developer. I was introduced to coding in my 11th class through Python. Later I started learning Web development in my first year and till now I have worked with technologies like HTML, CSS, JavaScript, ReactJs, Bootstrap and Tailwind. I usually create websites using ReactJS and other front-end tools. Apart from this I can even work on any other tech stack as I am a quick learner and can adapt to any new environment.`}/>
          <Socials/>
        </div>
      </div>
    </div>
  )
}

export default Home
