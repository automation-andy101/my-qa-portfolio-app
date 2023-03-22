import React from 'react';

import { useParams } from 'react-router-dom';

import GitHubIcon from '@mui/icons-material/GitHub';

import { ProjectList } from '../helpers/ProjectList';

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];

    return (
        <div className='Project'>
            <h1> {project.name} </h1>
            <img src={project.image} />
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <a href={project.github}><GitHubIcon /></a>
            
        </div>
    )
}

export default ProjectDisplay