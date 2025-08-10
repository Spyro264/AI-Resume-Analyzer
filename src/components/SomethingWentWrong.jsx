import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Box } from "@mui/material";
import TypewriterEffect from "./TypewriterEffect";

const SomethingWentWrong = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      height={"100vh"}
    >
      <DotLottieReact
        src="https://lottie.host/19830297-aa20-4151-be2f-5980e339bbbe/WmFqqfIUjW.lottie"
        loop
        autoplay
        style={{ width: "50%%", height: "50%" }}
      />
      <TypewriterEffect color={"black"} content={"Something Went Wrong "} />
    </Box>
  );
};

export default SomethingWentWrong;
