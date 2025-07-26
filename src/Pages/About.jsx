import {Grid, Typography , Box} from "@mui/material";
import { motion } from 'framer-motion';


const MotionBox = motion(Box);

const About = () => {
  return (
    <Grid container  display={"flex"}  justifyContent={"space-between"} alignItems={"flex-start"} padding={{md:2 , xs:0 , sm:8}} mt={{xs:6 , sm:4}} p={{xs:2}} flexDirection={"row"}  >
      
         {/* {content} */}
      <Grid size={{md:6 , sm:12 , xs:12}}   sx={{height:{md:"100vh", xs:'auto '}}} padding={{md:5 , sm:0}} 
      >
        <MotionBox height={"100%"}
        initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}
        > 
          <Typography variant="h3" sx={{ fontFamily: 'Rubik', fontWeight: 600}}>
            Enhancv’s Resume Checker forms its ATS score with a two-tier system
          </Typography>
          <Typography variant="body1" sx={{ fontFamily: 'Rubik', fontWeight: 300, mt: 2 , color: '#333333'}}>
           When you’re applying for a job, there’s a high chance your resume will be screened through an applicant tracking system way before it finds its way on a recruiter’s screen. ATS helps hiring managers find the right candidates by searching for keywords and adding the resume to a database.
           That’s why the success of your resume is highly dependent on how optimized your resume is for the job you’re applying for, the resume template you’re using, and what skills and keywords you have included..       
            </Typography>
            <Typography  variant="h5" sx={{ fontFamily: 'Rubik', fontWeight: 600 , ml:2 , mt:3}}>
              The proportion of content we can interpret
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Rubik', fontWeight: 300, ml:2, mt:2 , color: '#333333'}}>
              Similar to an ATS, we analyze and attempt to comprehend your resume. The greater our understanding of your resume, the more effectively it aligns with a company’s ATS.
            </Typography>
               <Typography  variant="h5" sx={{ fontFamily: 'Rubik', fontWeight: 600 , ml:2 , mt:3}}>
              What our checker identifies
            </Typography>
            <Typography variant="body1" sx={{ fontFamily: 'Rubik', fontWeight: 300, ml:2, mt:2 , color: '#333333'}}>
              Although an ATS doesn’t look for spelling mistakes and poorly crafted content, recruitment managers certainly do. The second part of our score is based on the quantifiable achievements you have in your resume and the quality of the written content.
            </Typography>
        </MotionBox>
      </Grid>


      {/* {svg image} */}
      <Grid  size={{md:6 , sm:12 , xs:12}}    sx={{height:{md:"100vh" , xs:"50vh"}}}  padding={{md:5 , sm:0}} >
         <MotionBox  
           height={{md:"100%" , xs:"100%"}}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.2 }}

         > 
        <iframe
        src="/public/resume.svg"
       
        title="Animated SVG"
          style={{
              width: '100%',
              height: '100%',
              border: 'none',
              pointerEvents: 'none', 
              transform: 'translateZ(0)', 
         
            }}
      ></iframe>
         </MotionBox>
      </Grid>        

   

    
    </Grid>
  )
}

export default About

