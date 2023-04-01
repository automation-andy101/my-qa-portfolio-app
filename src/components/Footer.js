import React from 'react';

import '../styles/Footer.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <a href='https://www.linkedin.com/in/andy-short-qa/'><LinkedInIcon /></a>
        <a href='https://github.com/automation-andy101'><GitHubIcon /></a>
        {/* <a href='https://github.com/automation-andy101'><EmailIcon /></a> */}
      </div>
      <p> &copy; 2023 - andy.short101@gmail.com</p>
    </div>
  )
}

export default Footer;
