// src/pages/Blog.js
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Link } from "@mui/material";

const Blog = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Blog
      </Typography>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h5" gutterBottom>
          <Link component={RouterLink} to="/blog/sample-post" underline="hover">
            Sample Blog Post
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 1 }}>
          A short excerpt for the sample post. Click the title to read more.
        </Typography>
      </Box>
      {/* Add more blog posts here as you create them */}
    </Container>
  );
};

export default Blog;
