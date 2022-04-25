import React from "react"
import GithubIcon from "../images/GitHub Icon.png"
import LinkedInIcon from "../images/linkedin-3-25.png"
import CodepenIcon from "../images/codepen-icon-logo-png-transparent.png"
import {NavLink} from "react-router-dom"

export default function Footer(){
    return(
        <div className="footer-container">
            <img src={GithubIcon} alt="github" className="icon-github"/>
            <img src={LinkedInIcon} alt="linkedin" className="icon-linkedIn"/>
            <img src={CodepenIcon} alt="codepen" className="icon-codepen"/>
        </div>
    )
}