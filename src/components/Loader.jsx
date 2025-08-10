import { Dialog, Box, DialogContent, Typography } from "@mui/material";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TypewriterEffect from "./TypewriterEffect";

const Loader = ({ open }) => {
  return (
    <Dialog
      open={open}
      fullScreen
      PaperProps={{
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 40,
          backgroundColor: "black",
        },
      }}
    >
      <DialogContent
        sx={{
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <DotLottieReact
          src="https://lottie.host/ace7b6bb-620f-4bf2-aa1f-3e9cde2ff385/7p4H8e0wcc.lottie"
          loop
          autoplay
          style={{ width: "70%", height: "auto" }}
        />
        <TypewriterEffect color={"white"} content={"Analyzing your resume"} />
      </DialogContent>
    </Dialog>
  );
};

export default Loader;
