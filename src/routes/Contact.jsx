import React from 'react'
import Heading from '../components/Heading/Heading'
import Paragraphs from '../components/Paragraphs/Paragraphs'
import Socials from '../components/Socials/Socials'

const Contact = () => {
  return (
    <div>
      <Heading heading="Contact" />
      <Paragraphs paragraph="For work and project related enquiries mail me at: ayushmangarg929@gmail.com" />
      <Paragraphs paragraph="You can also" />
      <Paragraphs paragraph="
Ping me on my social media handles to start a conversation."/>
      <Socials />

    </div>
  )
}

export default Contact
