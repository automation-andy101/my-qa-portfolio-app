import React from 'react'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

import '../styles/Home.css';


const Home = () => {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, my name is Andy</h2>
            <div className='prompt'>
                <p>
                    I am a senior software tester with a passion for automation.
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
                    <h2>UI Testing Tools</h2>
                    <span>Cypress, Playwright, Selenium, Protractor, Nightwatch, Katalon Studio</span>
                </li>
                <li className='item'>
                    <h2>API Testing Tools</h2>
                    <span>RestAssured, Requests, Cypress, Playwright, Karate Pact, Postman</span>
                </li>
                <li className='item'>
                    <h2>Perfomance Testing Tools</h2>
                    <span>JMeter</span>
                </li>
                <li className='item'>
                    <h2>Accessbility Testing Tools</h2>
                    <span>aXe</span>
                </li>
                <li className='item'>
                    <h2>Security Testing Tools</h2>
                    <span>OWASP ZAP</span>
                </li>
                <li className='item'>
                    <h2>Mobile Testing Tools</h2>
                    <span>Appium</span>
                </li>
                <li className='item'>
                    <h2>Programming Languages</h2>
                    <span>C#, Java, Javascript, Python, Ruby, Typescript, SQL</span>
                </li>
                <li className='item'>
                    <h2>Other tools/Skills</h2>
                    <span>Basic Linux Commands, Cucumber BDD, Jenkins</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home;

