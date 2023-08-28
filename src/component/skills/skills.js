import React from 'react'
import './skills.css'
import uiDesign from '../assets/ui-design.png'
import webDesign from '../assets/website-design.png'
import appDesign from '../assets/app-design.png'
const Skills = () => {
  return (
    <section id="skills">
      <span className="skillsItem">what I do</span>
      <span className="skillsDescription"></span>
      <div className="skillsBars"></div>
      <div className="skillsbar"></div>
      <img src={uiDesign} alt="uiDesign" className="skillsBar" />
      <div className="skillsBarText">
        <h2></h2>
        <p></p>
      </div>
      <div className="skillsbar"></div>
      <img src={appDesign} alt="appDesign" className="skillsBar" />
      <div className="skillsBarText">
        <h3></h3>
        <p></p>
      </div>
      <div className="skillsbar"></div>
      <img src={webDesign} alt="webDesign" className="skillsBar" />
      <div className="skillsBarText">
        <h4></h4>
        <p></p>
      </div>
    </section>
  )
}
export default Skills
