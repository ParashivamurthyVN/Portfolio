import { Box, Typography, IconButton } from '@mui/material'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

function Footer() {
  const MotionIconButton = motion(IconButton);

  return (
    <Box sx={{display:'flex', position:'fixed', bottom:'0', justifyContent:'space-between', alignItems:'center', width:'100%', backgroundColor:'#3d4c88'}}>
     <Typography variant='body2' sx={{color:'#73b7b0' , ml:'10px'}}>Copyright @Murthy 2024</Typography>
     <Box sx={{display:'flex', justifyContent:'space-around', alignItems:'center', mr:'20px'}}>
     {/* <Typography variant='body2'>Follow me on</Typography> */}
     <a href="mailto:parashivamurthy6030@gmail.com" target="_blank">
     <MotionIconButton whileHover={{scale:1.1}} initial={{x:'200px'}} animate={{x:'0px'}} transition={{duration:0.4}}>
    <MailOutlineIcon sx={{p:'1px', color:'#73b7b0'}}/>
    </MotionIconButton>
     </a>
     <a href="https://www.example.com" target="_blank">
     <MotionIconButton whileHover={{scale:1.1}} initial={{x:'200px'}} animate={{x:'0px'}} transition={{duration:0.4}}>
        <LinkedInIcon sx={{p:'1px', color:'#73b7b0'}}/>
    </MotionIconButton>
     </a>
     <a href="https://www.instagram.com/parshivmurthy_v_n/profilecard/?igsh=b3Q2ZTJjNHJvcmZy" target="_blank">
     <MotionIconButton whileHover={{scale:1.1}} initial={{x:'200px'}} animate={{x:'0px'}} transition={{duration:0.4}}>
        <InstagramIcon sx={{p:'1px', color:'#73b7b0'}}/>
    </MotionIconButton>
     </a>
     <a href="https://github.com/ParashivamurthyVN" target="_blank">
     <MotionIconButton whileHover={{scale:1.1}} initial={{x:'200px'}} animate={{x:'0px'}} transition={{duration:0.4}}>
        <GitHubIcon sx={{p:'1px', color:'#73b7b0'}}/>
    </MotionIconButton>
     </a>
     </Box>
    </Box>
  )
}

export default Footer
