import React from 'react'
import {  Card, Typography, CardMedia, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';


function IntroCards({project}) {
  return (
    <Card sx={{width:'90px', boxShadow:'none', borderRadius:'0px', my:'5px'} }  >
       <CardMedia 
          image={project.url}
          alt={project.title}
          sx={{width:'90px' , height:'60px'}}
       />
    <CardContent sx={{backgroundColor:'#28397b', p:'5px !important'}}>
    <Typography variant='caption' color='#fcfbf7'>
      {project.title} 
    </Typography>
    </CardContent>
  </Card>
  )
}

export default IntroCards
