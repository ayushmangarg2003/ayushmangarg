import React from 'react'
import Paragraphs from '../Paragraphs/Paragraphs';
import "./Project.css"

const Project = (props) => {
    const tags = (props.tags);
    return (
        <div className='projectcard'>
        <div className='left'>
            <h1>{props.name}</h1>
            <Paragraphs paragraph= {props.text} />
            <div className="buttons">
                {tags.map((i , index)=>(
                    <button key={index} className='btn'>{i}</button>
                ))}
            </div>
        </div>
        <div className="right">
        <a href={props.link} target={"blank"}><img src={props.img} alt="" /></a>
        </div>
        </div>
    )
}

export default Project
