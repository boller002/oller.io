// src/pages/Post.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Post = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Sample Blog Post
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
          bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
          justo commodo. Proin sodales pulvinar tempor.
        </Typography>
      </Box>
    </Container>
  );
};

export default Post;
