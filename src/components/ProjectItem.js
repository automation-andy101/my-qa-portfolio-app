import React from 'react'

const ProjectItem = ({ image, name }) => {
  return (
    <div className='projectItem'>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3>{name}</h3>
    </div>
  )
}

export default ProjectItem;
