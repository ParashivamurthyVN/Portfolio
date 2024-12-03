import { Box, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';

function ExperianceCard({item}) {
  const MotionBox = motion(Box);

  return (
    <Box sx={{mb:'-4px', zIndex:'-1'}}>
   <Box sx={{display:'flex',zIndex:'1', flexDirection:'column', position:'relative', justifyContent:'center', alignItems:'center', height:'350px', ml:'-30%'}}>
   <MotionBox initial={{scale:0.5}} animate={{scale:1}} transition={{duration:0.4}}
   sx={{position:'absolute',top:'30px',  width:'60px', height:'60px', borderRadius:'50%', backgroundColor:'black'}}>
    <CardMedia 
          image={item.logo}
          alt={item.title}
          sx={{width:'60px' , height:'60px', borderRadius:'50%', zIndex:'1'}}
       />
   </MotionBox>
   <MotionBox initial={{width:0.2}} animate={{width:7}} transition={{duration:0.4}}
   sx={{position:'absolute', top:'0',  width:'7px', height:'350px', backgroundColor:'#73b7b0', borderRadius:'10px', zIndex:'-1'}}>
   </MotionBox>
   <MotionBox initial={{x:'-200px'}} animate={{x:'0px'}} transition={{duration:0.8}}
   sx={{position:'absolute', top:'30px', display:'flex', justifyContent:'flex-end', alignItems:'center', width:'48%', height:'60px', alignSelf:'flex-start'}}>
   <Typography variant='subtitle2'sx={{ mr:'15px'}} color='#73b7b0'>
    {item.date}
    </Typography>
    <Typography variant='subtitle1' fontWeight='bold' sx={{ mr:'15px'}}>
    {item.designation}
    </Typography>
   </MotionBox>
   <MotionBox initial={{x:'200px'}} animate={{x:'0px'}} transition={{duration:0.8}}
   sx={{position:'absolute', top:'60px', display:'flex', justifyContent:'center', alignItems:'center', width:'48%', height:'280px', alignSelf:'flex-end', mb:'2px'}}>
    <Typography variant='subtitle2' fontWeight='bold'>
    <ul>
  {item.points.map((point, idx) => (
    <li key={idx}>{point}</li>
  ))}
</ul>
    </Typography>
   </MotionBox>
   </Box></Box>
  )
}

export default ExperianceCard
