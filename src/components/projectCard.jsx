import React from 'react'
import {  Card, Typography, CardMedia, CardContent, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { motion } from 'framer-motion';


function ProjectCard({project}) {
  const MotionIconButton = motion(IconButton);
  const MotionCard = motion(Card);
  return (
    <MotionCard initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.3, ease:'easeOut'}}
    sx={{width:{sx:'100%', sm:'358px', md:'320px' }, boxShadow:'none', borderRadius:'0px', my:'2px'} }  >
       <CardMedia 
          image={project.url}
          alt={project.title}
          sx={{width:{sx:'100%', sm:'358px', md:'400px'}, height:170, objectFit:'cover'}}
       />
    <CardContent sx={{backgroundColor:'#28397b', height:'106px'}}>
    <Typography variant='subtitle1' fontWeight='bold' color='#fcfbf7'>
      {project.title} 
      <a href={project.link} target="_blank">
      <span> <MotionIconButton whileHover={{scale:1.15}} sx={{color:'#73b7b0', ml:'5px'}}>
      <GitHubIcon />
    </MotionIconButton>
    </span>  
      </a>
    </Typography>
    <Typography variant='subtitle4' color='#fcfbf7'>
      {project.description}
    </Typography>
    </CardContent>
  </MotionCard>
  )
}

export default ProjectCard
