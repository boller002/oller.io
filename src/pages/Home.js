// src/pages/Home.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Welcome to boller.tech
        </Typography>
        <Typography variant="h3">
          My name is Brian. I'm a full stack software engineer from Seattle, WA. 
        </Typography>
      </Box>
      {/* <Box sx={{ textAlign: "left" }}>
        <Typography variant="body1" paragraph>
          I'm using this site to showcase my blog and my projects.
        </Typography>
      </Box> */}
    </Container>
  );
};

export default Home;
