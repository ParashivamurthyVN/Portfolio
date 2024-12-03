import { Box, Typography } from '@mui/material'
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';


function Home() {
  

  const [tagline] = useTypewriter({
    words: ['Welcome to my portfolio.', `Building Tomorrow's Web, Today.`,'Wander Often, Code Always',
       'Coding Without Borders: A Digital Nomad.', 'Turning ideas into code, one line at a time.', 
       "Let's build something amazing together!"],
    loop: true, 
    delaySpeed: 2000,
    typeSpeed: 50
  });

  return (
    <Box 
     sx={{display:'flex', flexDirection:'column', justifyContent:'center', position:'relative', alignItems:'center', fontSize:'20px', height:'83vh', width:'100%', zIndex:1, background:'transparent'}}>
    <Box sx={{display:'flex', flexDirection:'column',
    position: 'absolute', 
    top: '40%',
    left: '50%',
   transform: 'translate(-50%, -50%)',
    zIndex: 2}}>
   <Typography variant='h4' fontWeight={600}>I am <span style={{color:'#73b7b0'}}>Parashivamurthy V N </span></Typography>
   </Box>
   <Box sx={{display:'flex', flexDirection:'column',
    position: 'absolute', 
     top: '50%',
     transform: 'translateY(-60%)', 
     left: '68%',
      transform: 'translateX(-69%)', 
     zIndex: 2, width:'50%'}}>
   <Typography variant='h6' fontWeight={600}>{tagline}</Typography>
   </Box>
    </Box>
  )
}

export default Home