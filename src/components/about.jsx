import React from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { introduction } from '../utils/constants'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// 
import { motion } from 'framer-motion';

function About() {
  const MotionIconButton = motion(IconButton);

  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'center'}}>
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', height:'70vh', zIndex:1, width:'60%', mt:'35px'}}>
    <Typography variant='h4' fontWeight='bold' sx={{alignSelf:'flex-start', mb:'2px', color:'#73b7b0' }}>
     Introduction
    </Typography>
    <Typography variant='subtitle1' fontWeight='500' sx={{ p:'5px' }}>
    {introduction}
    </Typography>
    <Box sx={{display:'flex', alignItems:'center', alignSelf:'flex-start', p:'5px'}}>
    <Typography variant='subtitle2' fontWeight='bold'>
    Download Resume
    </Typography>
    <MotionIconButton whileHover={{scale:1.1}}>
        <InsertDriveFileIcon sx={{color:'#73b7b0'}} />
    </MotionIconButton>
    </Box>
     {/* <Box sx={{display:'flex', alignItems:'center', flexWrap:'wrap', justifyContent:'space-between', p:'4px', width:'100%'}}>
     {projectsArray.map((item, idx)=>(
        <MotionBox initial={{y:'100px'}} animate={{y:'0px'}} transition={{duration:0.2, type: "spring", stiffness: 90, damping: 9}}
         key={idx} >
        <IntroCards project={item}/>
        </MotionBox>))}
     </Box> */}
    </Box>
    </Box>
  )
}

export default About
