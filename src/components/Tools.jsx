import React, {useState} from 'react'
import Selenium from '../assets/images/Selenium_logo.svg.png'
import Playwright from '../assets/images/Playwright_Logo.svg.png'
import HTML from "../assets/images/logo-html5.png";

const Tools = () => {
    const [myTools, setMyTools] = useState({
        tool1:"Selenium",
        tool2:"Playwright",
        tool3:"Docker",
        tool4:"Git"

    })

    const {tool1, tool2, tool3, tool4} = myTools

    return (
        <div className="image-container">
            <span><div>{tool1}</div>
            <div ><img src={Selenium} alt="Selenium"/></div></span>
            <span><div>{tool2}</div>
            <div ><img src={Playwright} alt="Playwright"/></div></span>

        </div>
    )
}
export default Tools
