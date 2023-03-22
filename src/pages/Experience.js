import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

import '../styles/Experience.css';


const Experience = () => {
  return (
    <div>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='1996 - 1999'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<SchoolIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Teesside University</h3>
            <p>BEng(Hons) Electronic Engineering</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2015 - 2019'
          iconStyle={{background: '#3e497a', color: '#fff'}}
          icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Ultra Elctronics Airport Systems</h3>
            <p>Software Tester</p>
            <p>
              In-sprint tester on a Agile software development team. 
              The project was greenfield. The team developed a SilverLight web application for monitoring
              airport operations. 
              I was responsible for in-sprint testing new functionality, regression testing.
              I developed a Powershell script for automating the deployment of new builds to various 
              different environments.
              I developed a Powershell script for cleaning up old log files on the servers that
              the application was deployed on.
              I developed a Python script for automating the release note process. 
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2019 - 2022'
            iconStyle={{background: '#3e497a', color: '#fff'}}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>ADB Safegate Airport Systems</h3>
            <p>Software Tester</p>
            <p>
              In-sprint tester on a Agile software development team. 
              The project was greenfield. The team developed a MEAN stack web application for monitoring
              airport operations. 
              I was responsible for developing and maintaning the automated UI testing framework
              written using NightwatchJS, and the backend API testing framework written using the Python Requests
              library.  
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='2022 - 2023'
            iconStyle={{background: '#3e497a', color: '#fff'}}
            icon={<WorkIcon />}
          >
            <h3 className='vertical-timeline-element-title'>Zaizi</h3>
            <p>Software Tester</p>
            <p>
              In-sprint tester on a Agile software development team. 
              The project was greenfield. The team developed a web application for the Home Office's
              Border Force border crossing process. 
              I was responsible for developing and maintaning the automated UI testing framework
              written in Java Selenium, backend API testing framework written in Java RestAssured, 
              perfomance tetsing using JMeter, accessibility tetsing using aXe, security tetsing using OWASP ZAP.
              I developed a Python script that generated 5 years worth of test data required for performance 
              testing the appliccation.
              I also helped run the company test chapter. This involved researching, documenting new 
              testing tools, presenting, sharing and discussing my findings in community meetings.
            </p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience
