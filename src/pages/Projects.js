// src/pages/Projects.js
import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@mui/material";

import exampleImg from "../assets/logo-black.png";

const Projects = () => {
  // You can have an array of projects to map over
  const projects = [
    {
      title: "SimpleRatingSystem.com",
      description: "SimpleRatingSystem.com is a site that shows the simple rating system (SRS) rating for various sports leagues (e.g. NCAA Men's Basketball).",
      image: exampleImg,
      link: "https://simpleratingsystem.com"
    }
  ];

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card elevation={1} sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
