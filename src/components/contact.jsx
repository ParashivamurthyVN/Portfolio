import{ React, useRef} from 'react'
import { Box, Typography, Paper, IconButton } from '@mui/material'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const MotionPaper = motion(Paper);

    const form = useRef();
  
    const sendEmail = async (e) => {
       e.preventDefault();
      const formData = new FormData(form.current);  

      try {
         const response = await axios.post('https://api.web3forms.com/submit', formData);
         
         if (response.status === 200) {
            alert('Message sent successfully!');
            form.current.reset();
         }
      } catch (error) {
         console.log(error);
         alert('Failed to send message, please try again.');
      }
    };


  return (
    <Box sx={{display:'flex', justifyContent:'center', alignItems:'flex-start', height:'100vh', zIndex:1, background:'transparent', mt:2}}>
     <MotionPaper initial={{y:'200px'}} animate={{y:'0px'}} transition={{duration:0.2, type: "spring", stiffness: 90, damping: 9}}
     component='form' ref={form} onSubmit={sendEmail} sx={{display:'flex', flexDirection:'column', alignItems:'flex-start', borderRadius:'2%',
     width:'40%', boxShadow:'none', p:'20px', color:'#fcfbf7', backgroundColor:'#28397b'}}>
     <input type="hidden" name="access_key" value="5505ccec-cf19-48b3-a758-310bd8704593" />
    <Typography variant='h5' fontWeight='bold' sx={{color:'#73b7b0'}}>
     Contact
    </Typography>
    <Typography variant='subtitle1' fontWeight='bold' sx={{mt:'5px'}}>
     Your Name
    </Typography>
    <input className='contactInput' name="user_name" placeholder='Your Name' style={{width:'98%'}}/>
    <Typography variant='subtitle1' fontWeight='bold' sx={{mt:'10px'}}>
     Email
    </Typography>
    <input className='contactInput' name="user_email" placeholder='example@gmail.com'  style={{width:'98%'}}/>
    <Typography variant='subtitle1' fontWeight='bold' sx={{mt:'5px'}}>
     Message
    </Typography>
    <textarea rows="8" className='contactInput' name="message" placeholder='Type message' style={{width:'98%', marginBottom:'10px' }}/>
    <motion.span whileHover={{scale:1.05}}
    style={{padding:'0px 10px', backgroundColor:'#73b7b0', borderRadius:'4px'}}>
    <IconButton type='submit'  >
        <SendRoundedIcon sx={{color:'#fcfbf7'}}/>
    </IconButton>
    </motion.span>
    </MotionPaper>
    </Box>
  )
}

export default Contact