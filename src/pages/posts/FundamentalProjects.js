// src/pages/posts/FundamentalProjects.js
import React from "react";
import { Container, Typography, Box, List, ListItem, ListItemText, Link } from "@mui/material";

const FundamentalProjects = () => {
  return (
    <Container sx={{ mt: 5 }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Fundamental Projects
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          If you're looking to build a strong foundation in web development, hands-on projects are the best way to learn. This guide outlines essential projects that cover both frontend and backend development, hosting, and deployment. While I’ll use AWS, Java, React, and Material-UI as the baseline technologies, each can be substituted with your preferred stack.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>
          1. Deploy a Static Website on AWS with a Custom Domain and HTTPS
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          A static website is the simplest way to understand web hosting, DNS configuration, and HTTPS. This project will help you learn how to serve a frontend efficiently using AWS services.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <List>
          <ListItem><ListItemText primary="Build a static website using HTML, CSS, and React." /></ListItem>
          <ListItem><ListItemText primary="Host it on AWS S3 and serve it via CloudFront (CDN)." /></ListItem>
          <ListItem><ListItemText primary="Register a custom domain (or use a free one from Freenom)." /></ListItem>
          <ListItem><ListItemText primary="Configure Route 53 for DNS management." /></ListItem>
          <ListItem><ListItemText primary="Enable HTTPS using AWS Certificate Manager." /></ListItem>
        </List>
        <Link href="/blog/todo">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          2. Deploy a Dynamic Website, API, or React Server on AWS with a Custom Domain and HTTPS
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Unlike a static website, a dynamic site can serve an API, process business logic, or host a server-side React app. This project introduces backend development and server configuration.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <List>
          <ListItem><ListItemText primary="Build a backend using Java (Spring Boot)." /></ListItem>
          <ListItem><ListItemText primary="Deploy on an AWS EC2 instance." /></ListItem>
          <ListItem><ListItemText primary="Use Nginx as a reverse proxy for better performance." /></ListItem>
          <ListItem><ListItemText primary="Register a custom domain (or use a free option like DuckDNS)." /></ListItem>
          <ListItem><ListItemText primary="Configure Route 53 for DNS and enable HTTPS with AWS ACM." /></ListItem>
        </List>
        <Link href="/blog/todo">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          3. Build a Full-Stack Web Application with Authentication
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This project combines frontend and backend development, introducing user authentication, database integration, and security best practices.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <List>
          <ListItem><ListItemText primary="Use React (Material-UI) for the frontend." /></ListItem>
          <ListItem><ListItemText primary="Set up a backend API using Java (Spring Boot)." /></ListItem>
          <ListItem><ListItemText primary="Implement authentication with OAuth or JWT." /></ListItem>
          <ListItem><ListItemText primary="Use AWS RDS (PostgreSQL or MySQL) for data storage." /></ListItem>
          <ListItem><ListItemText primary="Deploy both frontend and backend separately." /></ListItem>
        </List>
        <Link href="/blog/todo">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          4. Implement a CI/CD Pipeline for Automated Deployment
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          CI/CD pipelines automate testing, building, and deployment, ensuring reliability and efficiency.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <List>
          <ListItem><ListItemText primary="Use Git and GitHub for version control." /></ListItem>
          <ListItem><ListItemText primary="Set up a CI/CD pipeline using GitHub Actions or AWS CodePipeline." /></ListItem>
          <ListItem><ListItemText primary="Automate unit and integration tests." /></ListItem>
          <ListItem><ListItemText primary="Deploy to staging/production environments automatically." /></ListItem>
        </List>
        <Link href="/blog/todo">Read the full tutorial</Link>

        <Typography variant="body1" sx={{ mt: 4 }}>
          By completing these projects, you’ll gain real-world experience with hosting, security, API development, and CI/CD pipelines. While AWS, Java, and React are used here, you can adapt each project to your preferred stack.
        </Typography>
      </Box>
    </Container>
  );
};

export default FundamentalProjects;
