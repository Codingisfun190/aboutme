import './App.css'
import { useState } from 'react'
import AboutMe from './AboutMe'
import Portfolio from './Portfolio'
import Experience from './Experience'
import Skills from './Skills'
import ContactMe from './ContactMe'

function App() {
  let [displayAboutMe, setDisplayAboutMe] = useState(false)
  let [displayExperience, setDisplayExperience] = useState(false)
  let [displaySkills, setDisplaySkills] = useState(false)
  let [displayPortfolio, setDisplayPorfolio] = useState(false)
  let [displayContactMe, setDisplayContactMe] = useState(false)

  //createCategories()

  function toggleAboutMe() {
    setDisplayAboutMe(true)
    setDisplayExperience(false)
    setDisplaySkills(false)
    setDisplayPorfolio(false)
    setDisplayContactMe(false)
  }

  function toggleExperience() {
    setDisplayAboutMe(false)
    setDisplayExperience(true)
    setDisplaySkills(false)
    setDisplayPorfolio(false)
    setDisplayContactMe(false)
  }

  function toggleSkills() {
    setDisplayAboutMe(false)
    setDisplayExperience(false)
    setDisplaySkills(true)
    setDisplayPorfolio(false)
    setDisplayContactMe(false)
  }

  function togglePortfolio() {
    setDisplayAboutMe(false)
    setDisplayExperience(false)
    setDisplaySkills(false)
    setDisplayPorfolio(true)
    setDisplayContactMe(false)
  }
  function toggleContactMe() {
    setDisplayAboutMe(false)
    setDisplayExperience(false)
    setDisplaySkills(false)
    setDisplayPorfolio(false)
    setDisplayContactMe(true)
  }

  return (
    <div className="App">
      <div>
        <h3>Welcome to my page</h3>
        <h1>Samuel Kim</h1>
      </div>
      <div id="button-click">
        <a href="#button-click">
          <button className="button" onClick={() => toggleAboutMe()}>
            About Me
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => toggleExperience()}>
            Experience
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => toggleSkills()}>
            Skills
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => togglePortfolio()}>
            Portfolio
          </button>
        </a>
        <a href="#button-click">
          <button className="button" onClick={() => toggleContactMe()}>
            Contact Me
          </button>
        </a>
      </div>
      <div>{displayAboutMe && <AboutMe />}</div>
      <div>{displayExperience && <Experience />}</div>
      <div>{displaySkills && <Skills />}</div>
      <div>{displayPortfolio && <Portfolio />}</div>
      <div>{displayContactMe && <ContactMe />}</div>
    </div>
  )
}

export default App
