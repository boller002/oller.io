import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const StaticWebsite = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "md" }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Static Website
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: March 10, 2025
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Creating a static website using React and AWS is an essential skill for modern web developers. This guide covers building a React-based static website, generating static assets, and deploying it using AWS S3, CloudFront, and Route 53 for a custom domain with HTTPS.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          A static website consists of fixed content that does not change unless manually updated. These are ideal for blogs, documentation, portfolios, and landing pages where content does not need to be dynamically generated for each visitor. In contrast, a dynamic website includes server-side logic to generate content dynamically based on user interactions, database queries, or real-time updates. While dynamic sites are necessary for applications requiring user authentication, dashboards, or real-time interactions, many use cases can be effectively served with a static website, offering better performance, security, and cost-efficiency.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>
          1. Build a Static Website Using React
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          If you're new to React, there are many tutorials available to help you build a simple React website. Use Vite to scaffold your project.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Initialize a React project using Vite:</li>
          <Box component="code" sx={{ display: "block", bgcolor: "background.paper", color: "text.primary", p: 1, my: 1, borderRadius: 1 }}>
            npm create vite@latest my-static-site -- --template react
          </Box>
          <li>Develop your website with React components.</li>
          <li>Run <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>npm run build</Box> to generate static assets.</li>
        </Box>

        <Typography variant="h5" sx={{ mt: 3 }}>
          2. Deploy the Site to AWS S3 and Serve It with CloudFront
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Follow AWS's official guide for setting up an S3-hosted static website behind CloudFront with a custom domain and HTTPS.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Upload the <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>build</Box> folder contents to an AWS S3 bucket.</li>
          <li>Set up CloudFront as a CDN for faster delivery.</li>
          <li>Create a certificate for HTTPS using AWS Certificate Manager.</li>
          <li>Configure Route 53 to handle DNS resolution for your custom domain. Note that it is recommended to use Route 53 as opposed to other domain registrars, as Route 53 offers full functionality and works seamlessly with other AWS services.</li>
        </Box>
        <Link href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/getting-started-cloudfront-overview.html" target="_blank" color="primary.main">Read the AWS guide</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          3. Fix CloudFront Subdirectory Access Issue
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Note that you should block all public access to your s3 bucket for added security. However, note that CloudFront does not automatically serve the correct index.html file for subdirectory paths. This leads to an AccessDenied error when visiting routes like <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/blog</Box> directly, because CloudFront looks for a corresponding file in S3 that doesn't exist.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Solution:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>In CloudFront's distribution settings, navigate to <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Error Pages</Box>.</li>
          <li>Create a new custom error response for <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>403 - Access Denied</Box>.</li>
          <li>Set the response page to <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/index.html</Box> and the HTTP response code to <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>200</Box>.</li>
        </Box>

        <Typography variant="body1" sx={{ mt: 4 }}>
          By completing this project, you will have a fully deployed static website with a custom domain, HTTPS, and a properly configured CDN. This deployment process can be adapted for any static site, making it a valuable skill in web development.
        </Typography>
      </Box>
    </Container>
  );
};

export default StaticWebsite;
