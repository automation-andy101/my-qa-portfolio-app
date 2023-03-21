import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, my name is Andy</h2>
            <div className='prompt'>
                <p>
                    I am a senior software tester with a passion for automation and coding.
                </p>
                <a href='https://www.linkedin.com/in/andy-short-qa/'><LinkedInIcon /></a>
                <a href='https://github.com/automation-andy101'><GitHubIcon /></a>
                <a href=''><EmailIcon /></a>
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>UI Automation Frameworks</h2>
                    <span>Cypress</span>
                    <span>Cypress</span>
                </li>
                <li className='item'>
                    <h2>Backend API Automation Frameworks</h2>
                    <span>RestAssured</span>
                    <span>Requests</span>
                </li>
                <li className='item'>
                    <h2>Perfomance Testing Automation Frameworks</h2>
                    <span>JMeter</span>
                </li>
                <li className='item'>
                    <h2>Accessbility Testing Automation Frameworks</h2>
                    <span>aXe</span>
                </li>
                <li className='item'>
                    <h2>Security Testing Automation Frameworks</h2>
                    <span>aXe</span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>C#</span>
                    <span>Java</span>
                    <span>Javascript</span>
                    <span>Python</span>
                    <span>Ruby</span>
                    <span>Typescript</span>
                </li>
                <li className='item'>
                    <h2>Other Skills</h2>
                    <span>Cucumber BDD</span>
                    <span>Basic Linux Commands</span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home;

