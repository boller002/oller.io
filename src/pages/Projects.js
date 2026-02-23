import React from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button
} from "@mui/material";

const Projects = () => {
  const projects = [
    {
      title: "SimpleRatingSystem.com",
      description: "SimpleRatingSystem.com is a site that shows the simple rating system (SRS) rating for various sports leagues (e.g. NCAA Men's Basketball).",
      link: "https://simpleratingsystem.com"
    }
  ];

  return (
    <Container sx={{ mt: 5, maxWidth: "md" }}>
      <Typography variant="h2" sx={{ mb: 3 }}>
        Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              elevation={0}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                border: 1,
                borderColor: "divider",
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
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
