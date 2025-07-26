import {Grid , Typography} from '@mui/material';
import UploadResume from '../components/UploadResume';
import { motion } from 'framer-motion';
import MotionTypography from '../components/MotionTypography';

const Home = () => {
  return (
   <Grid container minHeight={{md:'90vh', sm:"auto"}}    mt={{md:0 , sm:5}}  justifyContent={{md:"center", xs:"center" , sm:'center'}} alignItems={{md:"center" , sm:"center"}} flexDirection={"column"} >
    
    {/* {HEADING} */}
    <Grid size={{md:6 , sm:10}} sx={{paddingX:2}}   display={"flex"} justifyContent={"flex-start"} alignItems={"top"} flexDirection={"column"} gap={2}
     component={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
    >
      <MotionTypography
          fontSize={'13px'}
          fontWeight={550}
          sx={{ fontFamily: 'Rubik', color: '#000080', ml: 0.5 }}
        >
          RESUME ANALYZER
        </MotionTypography>
         <MotionTypography
          variant="h2"
          fontWeight={600}
          sx={{ fontFamily: 'Rubik' }}
        >
          Is your resume good enough ?
        </MotionTypography>

        <MotionTypography
          variant="h6"
          fontWeight={400}
          sx={{ fontFamily: 'Rubik', color: '#333333' }}
        >
          A free and fast AI resume checker doing 16 crucial checks to ensure your
          resume is ready to perform and get you interview callbacks.
        </MotionTypography>
    </Grid>

    {/* {Upload resume section} */}
    <Grid 
            component={motion.div}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.03, rotate: [0, 1, -1, 0] }}
        transition={{ duration: 0.6 }}

    size={{md:6 , sm:10}}  p={2} mt={2} >
     <UploadResume />
    </Grid>
     
   </Grid>
  )  
}

export default Home
