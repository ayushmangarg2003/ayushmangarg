import React from 'react'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'

const Contact = () => {
  return (
    <div>
      <Heading heading="Contact" />
      <Paragraphs paragraph="For any work or project-related inquiries, please email me at ayushmangarg929@gmail.com" />
      <Paragraphs paragraph=" Additionally, feel free to reach out to me on my social media handles to start a conversation."/>
      <Socials />
    </div>
  )
}

export default Contact
