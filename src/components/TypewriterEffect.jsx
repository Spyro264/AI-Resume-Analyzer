import React from "react";
import { Typography, styled } from "@mui/material";

// Create a styled component with the typewriter effect
const TypewriterTypography = styled(Typography)`
  display: inline-block;
  font-family: "Courier New", monospace;
  font-size: 24px;
  overflow: hidden;
  border-right: 3px solid #000;
  white-space: nowrap;
  width: 0;
  color: ${(props) => props.color || "#000"};
  animation: typing 4s steps(30) 1s forwards, blink 0.75s step-end infinite;

  @keyframes typing {
    100% {
      width: 22ch; /* Adjust to match the number of characters */
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;

const TypewriterEffect = ({ color, content }) => {
  return <TypewriterTypography color={color}>{content}</TypewriterTypography>;
};

export default TypewriterEffect;
