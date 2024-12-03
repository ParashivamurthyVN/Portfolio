import React from 'react';
import { Stack, Box, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

function Navbar() {
  const location = useLocation();
  const MotionLink = motion(Link);

  return (
    <Stack direction='row' alignItems='center'
  px={1} py={1.5} sx={{ top:0, justifyContent:'space-between', zIndex:'1', position:'relative',
  color:'#67a49e'}}>
  <Box sx={{display:'flex', flexDirection:'row', gap:'20px', ml:'10px'}}>
  <MotionLink whileHover={{scale:1.05}} initial={{scale:0.8}} animate={{scale:1}}  transition={{duration:0.4}}
   to='/' className={location.pathname === '/' ? 'active' : ''}>
      <Typography variant='subtitle1' fontWeight='bold' color='#28397b'>
       Home
      </Typography>  
    </MotionLink>
    <MotionLink whileHover={{scale:1.05}} initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.4}}
     to='/about' className={location.pathname === '/about' ? 'active' : ''}>
      <Typography variant='subtitle1' fontWeight='bold' color='#28397b'>
      About
      </Typography>
    </MotionLink>
    
  </Box>
  { location.pathname !== '/' &&
  <Box sx={{display:'flex', flexDirection:'row', ml:'80px'}}>
 <Typography variant='h6' fontWeight='bold' >
      Parashivamurthy V N
      </Typography>
  </Box>}
  <Box sx={{display:'flex', flexDirection:'row', gap:'20px', mr:'10px'}}>
  <MotionLink whileHover={{scale:1.05}} initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.4}}
   to='/experiance' className={location.pathname === '/experiance' ? 'active' : ''}>
      <Typography variant='subtitle1' fontWeight='bold' color='#28397b' >
      Experience
      </Typography>
    </MotionLink>
    <MotionLink whileHover={{scale:1.05}} initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.4}}
     to='/projects' className={location.pathname === '/projects' ? 'active' : ''}>
      <Typography variant='subtitle1' fontWeight='bold' color='#28397b' >
      Projects
      </Typography>
    </MotionLink>
    <MotionLink whileHover={{scale:1.05}} initial={{scale:0.8}} animate={{scale:1}} transition={{duration:0.4}}
     to='/contact' className={location.pathname === '/contact' ? 'active' : ''}>
      <Typography variant='subtitle1' fontWeight='bold' color='#28397b' >
      Contact
      </Typography>
    </MotionLink>
  </Box>
  
  </Stack>
  )
}

export default Navbar

