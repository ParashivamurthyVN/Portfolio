import React from 'react'
import ExperianceCard from './experianceCard'
import {  Stack, Box } from '@mui/material'
import { experience } from '../utils/constants'

function Experiance() {
  return (
    <Stack sx={{overflowY:"auto", height:'79vh', p:1, mb:'10px'}}>
     {experience.map((item, idx)=>(
        <Box key={idx}>
        <ExperianceCard item={item}/>
        </Box>
      ))}
   </Stack>)
}

export default Experiance
