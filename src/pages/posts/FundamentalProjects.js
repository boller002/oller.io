import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const FundamentalProjects = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "md" }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Fundamental Projects
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: March 08, 2025
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          If you're looking to build a strong foundation in web development, hands-on projects are the best way to learn. This guide outlines four projects that cover hosting, backend development, real-time communication, and deployment automation. Each project introduces a fundamentally different set of concepts, so by the end you'll have broad, practical experience across the stack. While I'll use AWS, Java, and React as the baseline technologies, each can be substituted with your preferred stack.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>
          1. Deploy a Static Website on AWS with a Custom Domain and HTTPS
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          A static website is the simplest way to understand web hosting, DNS configuration, and HTTPS. This project will teach you how to serve a frontend efficiently using AWS services.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>What you'll learn:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>How CDNs deliver content and why they matter.</li>
          <li>DNS configuration and domain management with Route 53.</li>
          <li>HTTPS certificates with AWS Certificate Manager.</li>
          <li>S3 bucket hosting and CloudFront distribution setup.</li>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Build a static website using React (Vite).</li>
          <li>Host it on AWS S3 and serve it via CloudFront (CDN).</li>
          <li>Register a custom domain through Route 53 or another registrar.</li>
          <li>Configure Route 53 for DNS management.</li>
          <li>Enable HTTPS using AWS Certificate Manager.</li>
        </Box>
        <Link href="/blog/static-website" color="primary.main">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          2. Build a Full-Stack Web Application with Authentication and a Database
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This project is a big step up from a static site. You'll build a backend API, connect it to a database, add user authentication, and deploy the whole thing. This is the core of most web applications, and the project where you'll spend the most time learning.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>What you'll learn:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Backend API design and REST conventions.</li>
          <li>User authentication with OAuth or JWT.</li>
          <li>Relational database design and integration.</li>
          <li>Server deployment, reverse proxies, and HTTPS on EC2.</li>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Build a React (Material-UI) frontend with login, registration, and a protected dashboard.</li>
          <li>Create a backend API using Java (Spring Boot) with CRUD endpoints.</li>
          <li>Set up AWS RDS (PostgreSQL or MySQL) and connect it to your backend.</li>
          <li>Implement authentication using OAuth or JWT.</li>
          <li>Deploy the backend on an AWS EC2 instance with Nginx as a reverse proxy.</li>
          <li>Deploy the frontend to S3/CloudFront (reusing what you learned in Project 1).</li>
          <li>Configure a custom domain and HTTPS for the API using Route 53 and ACM.</li>
        </Box>
        <Link href="/blog/full-stack-app" color="primary.main">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          3. Add a Real-Time Feature with WebSockets
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The first two projects use the standard request/response model: the client asks, the server answers. Real-time features flip that — the server pushes updates to clients as they happen. This is a fundamentally different communication pattern, and building it yourself is the best way to understand it.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>What you'll learn:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>WebSocket protocol vs. HTTP request/response.</li>
          <li>Managing persistent connections and broadcasting events.</li>
          <li>Client-side state synchronization.</li>
          <li>Handling disconnections and reconnections gracefully.</li>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Add a real-time feature to your Project 2 app (e.g., live notifications, a chat room, or a collaborative editing feature).</li>
          <li>Set up a WebSocket server using Spring Boot (spring-websocket) or a standalone Node.js server (Socket.IO).</li>
          <li>Build the client-side connection with automatic reconnection logic.</li>
          <li>Broadcast events to multiple connected clients.</li>
          <li>Deploy and verify that WebSocket connections work through your Nginx reverse proxy.</li>
        </Box>
        <Link href="/blog/todo" color="primary.main">Read the full tutorial</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          4. Automate Deployment with CI/CD and Infrastructure as Code
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          By now you've deployed things manually several times — and you've probably felt the pain of doing it. This project replaces those manual steps with automation. You'll set up a pipeline that tests, builds, and deploys your code on every push, and define your infrastructure in code so it's reproducible and version-controlled.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>What you'll learn:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Continuous integration and continuous deployment concepts.</li>
          <li>Infrastructure as Code with AWS CloudFormation or Terraform.</li>
          <li>Automated testing as a deployment gate.</li>
          <li>Environment management (staging vs. production).</li>
        </Box>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Set up Git and GitHub for version control (if you haven't already).</li>
          <li>Create a CI/CD pipeline using GitHub Actions that runs tests and deploys on merge to main.</li>
          <li>Define your AWS infrastructure (S3 bucket, CloudFront distribution, EC2 instance, RDS) using CloudFormation or Terraform.</li>
          <li>Set up separate staging and production environments.</li>
          <li>Add automated unit and integration tests as a required check before deployment.</li>
        </Box>
        <Link href="/blog/todo" color="primary.main">Read the full tutorial</Link>

        <Typography variant="body1" sx={{ mt: 4 }}>
          Each of these projects introduces a genuinely different set of skills — static hosting, full-stack development, real-time communication, and deployment automation. By the time you've completed all four, you'll have built and shipped something real at every layer of the stack. While AWS, Java, and React are used here, you can adapt each project to your preferred technologies.
        </Typography>
      </Box>
    </Container>
  );
};

export default FundamentalProjects;
