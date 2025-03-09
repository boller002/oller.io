// src/pages/Home.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h1" sx={{ mb: 2 }}>
          Hello, I'm [Your Name]
        </Typography>
        <Typography variant="h3">
          A placeholder for your short tagline or personal brand statement.
        </Typography>
      </Box>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="body1" paragraph>
          This is where you'll add more comprehensive “About Me” text, 
          your background, and anything else you want visitors to know.
        </Typography>
        <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Praesent vel tortor facilisis, gravida libero non, rutrum ligula.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
