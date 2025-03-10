// src/pages/posts/Todo.js
import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Todo = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Todo...
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Check back later for this blog post.
        </Typography>
      </Box>
    </Container>
  );
};

export default Todo;
