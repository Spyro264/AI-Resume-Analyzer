import { Button, Grid, IconButton, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Upload from "../components/Upload";

import Lottie from "../components/Lottie";
import Loader from "../components/Loader";

const Home = () => {
  return (
    <Grid container minHeight={"100vh"} flexDirection="column">
      {/* {Navbar 1} */}
      <Grid item size={12}>
        <Navbar />
      </Grid>

      <Grid
        container
        minHeight={"91vh"}
        padding={{ lg: 10, md: 10, sm: 0, xs: 0 }}
      >
        {/* {Text} */}
        <Grid
          item
          size={{ lg: 6, md: 12, sm: 12, xs: 12 }}
          padding={{ xs: 3, sm: 5, md: 5, lg: 5 }}
          sx={{
            "@keyframes fadeSlideLeft": {
              from: { opacity: 0, transform: "translateX(-40px)" },
              to: { opacity: 1, transform: "translateX(0)" },
            },
            animation: "fadeSlideLeft 1.9s ease-out",
          }}
        >
          <Typography
            fontFamily={"Rubik, sans-serif"}
            fontWeight={700}
            fontSize={"16px"}
            color="#5F4DC7"
          >
            Resume Checker
          </Typography>

          <Typography
            fontFamily={"Rubik, sans-serif"}
            color="#2D3639"
            mt={1}
            fontSize={{ lg: "58px", md: "58px", sm: "2rem", xs: "2rem" }}
            fontWeight={600}
          >
            Is your resume good enough?
          </Typography>

          <Typography
            mt={1}
            fontSize={{ xs: "0.8rem", sm: "1rem", md: "1.5rem", lg: "1.5rem" }}
            color="grey"
          >
            A free and fast AI resume checker doing 16 crucial checks to ensure
            your resume is ready to perform and get you interview callbacks.
          </Typography>

          {/* {upload component} */}
          <Upload />
        </Grid>

        {/* {Upload resume} */}
        <Grid
          item
          size={{ lg: 6, md: 12, sm: 12, xs: 12 }}
          sx={{
            "@keyframes zoomIn": {
              from: { opacity: 0, transform: "scale(0.8)" },
              to: { opacity: 1, transform: "scale(1)" },
            },
            animation: "zoomIn 0.8s ease-out",
          }}
        >
          <Lottie />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
