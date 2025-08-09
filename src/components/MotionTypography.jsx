// src/components/MotionTypography.jsx
import { Typography } from '@mui/material';
import { motion } from 'framer-motion';

const MotionTypography = ({ children, ...props }) => {
  return (
    <Typography
      component={motion.p}
      initial={{ scale: 0.9 }}
      animate={{ scale: 1 }}
      transition={{ repeat: Infinity, duration: 2, repeatType: 'reverse' }}
      {...props}
    >
      {children}
    </Typography>
  );
};

export default MotionTypography;
