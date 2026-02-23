import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Container, Box, Typography, Link } from "@mui/material";

const Blog = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "md" }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Blog
      </Typography>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <Link component={RouterLink} to="/blog/fundamental-projects" underline="hover" color="primary.main">
            Fundamental Projects
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 1 }}>
          In this post, I recommend projects that new software engineers should complete to more strongly grasp a number of web development technologies.
        </Typography>
      </Box>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          <Link component={RouterLink} to="/blog/static-website" underline="hover" color="primary.main">
            Static Website
          </Link>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: March 10, 2025
        </Typography>
        <Typography variant="body1" paragraph sx={{ mt: 1 }}>
          In this post, I provide a high-level tutorial for building and hosting a static website in s3 served by a cloud distribution network (CDN).
        </Typography>
      </Box>
    </Container>
  );
};

export default Blog;
