import Grid from '@mui/material/Grid';
import navItems from '../constants/navitems';
import { Button , Typography } from '@mui/material';

const Navbar = () => {

  return (
    <Grid container minHeight={"13vh"} mt={2} display={"flex"} justifyContent={"center"} alignItems={"center"} padding={2}>
       <Grid item size={{md:6, xs:12 , sm:6 , }} sx={{backgroundColor:"white"}} display={"flex"} justifyContent={"space-between"} alignContent={"center"}  border={"1px dashed #57CDA4"} backgroundColor={"white"} boxShadow={3} padding={1} borderRadius={10} >
       {navItems.map((item , index)=>(
<Button
  key={index}
  variant="contained"
  sx={{
    height: '5vh',
    borderRadius: 5,
    px: 6,
    background: "white",
    color: "black",
    border: 'transparent',
    boxShadow: "none",
   
      '&:hover': {
      backgroundImage: `url('https://enhancv.com/_next/static/images/background-new-356c805786f29eb394b6aca8abadb225.svg')`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
  }}
>
  <Typography  sx={{ fontFamily: 'Rubik' , fontWeight: 500  }}>{item}</Typography>
</Button>


       ))}
      

       </Grid>  
    </Grid>
  )
}

export default Navbar
