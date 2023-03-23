import React from 'react'

import { useNavigate } from 'react-router-dom'


const ProjectItem = ({ image, name, idx }) => {
  const navigate = useNavigate();

  return (
    <div className='projectItem' onClick={() => {
      navigate('/project/' + idx)
    }}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3>{name}</h3>
    </div>
  )
}

export default ProjectItem;
