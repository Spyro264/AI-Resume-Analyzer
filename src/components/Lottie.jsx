import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import { Grid } from "@mui/material";

const Lottie = () => {
  return (
    <Grid
      minHeight={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <DotLottieReact
        src="https://lottie.host/23489064-3bef-4965-8e0f-d051a1510247/dsSJXPq4W9.lottie"
        loop
        autoplay
      />
      ;
    </Grid>
  );
};

export default Lottie;
