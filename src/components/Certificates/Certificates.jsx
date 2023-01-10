import React from 'react'
import './Certificates.css'
import IBM from "../../assets/IBMlogo.jfif"
import Gymnasium from "../../assets/GymnasiumLogo.jfif"

const Certificates = () => {
    return (
        <div className="certificates">
            <h1>Certificates</h1>
            <a  target={'blank'} href='https://coursera.org/share/46386011d54b4102911371de0261fbd2' class="certificate">
                <img src={IBM} alt=""></img>
                <div className="certificate-text">
                    <h4>Introduction to Web Development with HTML, CSS, JavaScript </h4>
                    <p>IBM</p>
                </div>
            </a>
            <a target={'blank'} href='https://www.credential.net/3611f2e5-78ba-4f54-b4b2-c3376dae275f#gs.m7vtbx' class="certificate">
                <img src={Gymnasium} alt=""></img>
                <div className="certificate-text">
                    <h4>MODERN WEB DESIGN</h4>
                    <p>Gymnasium</p>
                </div>
            </a>
        </div>
    )
}

export default Certificates
