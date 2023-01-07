import React from 'react'
import {FiTwitter , FiGithub} from "react-icons/fi"
import {GrLinkedinOption} from "react-icons/gr"
import "./Socials.css"
const Socials = () => {
  return (
    <div className='socials'>
      <a href="https://twitter.com/AyushmanGarg4" target={'blank'}><FiTwitter/></a>
      <a href="https://www.linkedin.com/in/ayushmangarg/" target={'blank'}><GrLinkedinOption/></a>
      <a href="https://github.com/ayushmangarg2003" target={'blank'}><FiGithub/></a>
    </div>
  )
}

export default Socials
