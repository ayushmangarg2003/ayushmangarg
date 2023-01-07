import React from 'react'
import "./TechSkills.css"

const TechSkills = () => {
    let skills = ["HTML" , "CSS" ,"JavaScript" , "ReactJs" , "TailwindCss", "Python"]
  return (
    <div className='skills'>
      <h1>My Tech Stack</h1>
      <div className="skillsBtn">
        {
            skills.map((i) => (
                <button className='btn'>{i}</button>
            ))
        }
      </div>
    </div>
  )
}


export default TechSkills
