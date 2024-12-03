import React from 'react'
import { projectsArray } from '../utils/constants' 
import { Stack, Box, Typography} from '@mui/material';
import ProjectCard from './projectCard';


function Projects() {
  return (
    <Box sx={{overflowY:"auto", height:'85vh', m:0.5}}>
    <Typography variant='h5' fontWeight='bold' sx={{position:'sticky', top:'0', zIndex:'1', backgroundColor:'#fcfbf7', ml:'4px'}}>
      Projects
      </Typography>
    <Stack flexDirection='row' flexWrap='wrap' justifyContent='space-evenly' gap={2} sx={{ mt:'5px',mb:'20px', zIndex:'-1', p:1 }}>
    {projectsArray.map((item, idx)=>(
        <Box key={idx}>
        <ProjectCard project={item}/>
        </Box>
    ))}
   </Stack>
   </Box>
  )
}

export default Projects
