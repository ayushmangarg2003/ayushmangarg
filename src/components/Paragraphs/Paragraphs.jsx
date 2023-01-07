import React from 'react'
import './Paragraphs.css'

const Paragraphs = (props) => {
  return (
    <div className='paragraph'>
      {props.paragraph}
    </div>
  )
}

export default Paragraphs
