import React from 'react';
import { Link,  } from 'react-router-dom';
import './Sidebar.css'
import {FaRegUser} from 'react-icons/fa'
import {RiMessageLine} from "react-icons/ri"
import {BiHome , BiCodeAlt } from "react-icons/bi"


const Sidebar = () => {
  return (
    <nav className='sidebar'>
        <Link to={'/'} >
            <BiHome/>
        </Link>
        <Link to={'/about'} >
            <FaRegUser/>
        </Link>
        <Link to={'/projects'} >
            <BiCodeAlt/>
        </Link>
        <Link to={'/contact'} >
            <RiMessageLine/>
        </Link>
    </nav>
  )
}

export default Sidebar
