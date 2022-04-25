import React from "react"
import Portrait from "../images/14_pape copy.jpg"
import Envelope from "../images/envelope-solid.svg"

export default function Info (){
    return (
    <div>
        <header className="container">
            <img src={Portrait} alt="portrait" className="portrait"/>
        </header>
        <main className="main">
            <h1>Lisa Pape</h1>
            <h2>Full-Stack Developer</h2>
            <button type="submit" className="button"><img src={Envelope} alt="envelope" className="envelope-icon" />Email</button>
        </main>
    </div>
    )
}