import { Button, Grid, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Grid
      container
      minHeight={"8vh"}
      sx={{ backgroundColor: "white" }}
      boxShadow={1}
      borderRadius={1}
    >
      <Grid
        size={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        display={"flex"}
        justifyContent={"flex-start"}
        // border={"2px solid red"}
        p={{ xs: 0.5, sm: 0.5, md: 2, lg: 2 }}
        alignItems={"center"}
      >
        <Typography
          fontSize={{ lg: "1.5rem", md: "1.5rem", sm: "1rem", xs: "1rem" }}
          fontFamily={"Rubik, sans-serif"}
          color="#2DC08D"
        >
          AI RESUME ANALYZER
        </Typography>
      </Grid>
      <Grid
        size={{ xs: 6, sm: 6, md: 6, lg: 6 }}
        display={"flex"}
        justifyContent={"flex-end"}
        // border={"2px solid red"}
        alignItems={"center"}
        p={{ xs: 0.5, sm: 0.5, md: 2, lg: 2 }}
      >
        <Button variant="contained" sx={{ backgroundColor: "#2DC08D" }}>
          <Typography
            fontFamily={"Rubik, sans-serif"}
            fontSize={{ lg: "1rem", md: "1rem", sm: "1rem", xs: "0.8rem" }}
          >
            TEMPLATES
          </Typography>
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
