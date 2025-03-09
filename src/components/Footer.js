// src/components/Footer.js
import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 4,
        py: 2,
        borderTop: "1px solid #e0e0e0",
        textAlign: "center"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Your Name Here
      </Typography>
    </Box>
  );
};

export default Footer;
