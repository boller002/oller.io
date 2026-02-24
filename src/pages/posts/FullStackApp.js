import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const FullStackApp = () => {
  return (
    <Container sx={{ mt: 5, maxWidth: "md" }}>
      <Box>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Full-Stack Web Application
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Date: February 23, 2026
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          This tutorial walks through building a full-stack web application with a backend API, a relational database, user authentication, and a React frontend — then deploying all of it on AWS. This is the natural next step after deploying a static website. Where Project 1 taught you hosting and CDN configuration, this project introduces server-side logic, persistent data, and protected resources.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          We'll use Spring Boot for the backend, AWS RDS for the database, JWT for authentication, and React with Material-UI for the frontend. Each section gives you enough guidance to get moving, with links to official documentation for the details. Substitute your own preferred technologies wherever it makes sense.
        </Typography>

        <Typography variant="h5" sx={{ mt: 3 }}>
          1. Set Up the Backend with Spring Boot
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Spring Boot gives you a production-ready Java backend with minimal configuration. Start by generating a project with the dependencies you'll need for a REST API, database access, and security.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Go to <Link href="https://start.spring.io" target="_blank" color="primary.main">Spring Initializr</Link> and generate a project with the following dependencies: <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Spring Web</Box>, <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Spring Data JPA</Box>, <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Spring Security</Box>, and the JDBC driver for your chosen database (e.g., <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>PostgreSQL Driver</Box>).</li>
          <li>Create a simple entity (e.g., a <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Task</Box> or <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Note</Box>) with a JPA repository.</li>
          <li>Build a REST controller with CRUD endpoints: <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>GET</Box>, <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>POST</Box>, <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>PUT</Box>, <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>DELETE</Box>.</li>
          <li>Test your endpoints locally using a tool like Postman or <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>curl</Box>. Use an in-memory H2 database for now — you'll switch to RDS later.</li>
        </Box>
        <Link href="https://spring.io/guides/gs/rest-service" target="_blank" color="primary.main">Spring REST service guide</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          2. Set Up the Database with AWS RDS
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          AWS RDS gives you a managed relational database without the overhead of administering the server yourself. You'll create a PostgreSQL (or MySQL) instance and connect your Spring Boot app to it.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Create an RDS instance in the AWS console. Choose PostgreSQL or MySQL, and select the free-tier eligible instance class.</li>
          <li>Place the RDS instance in a private subnet. It should not be publicly accessible — your EC2 instance will connect to it within the same VPC.</li>
          <li>Configure the security group to allow inbound traffic on your database port (5432 for PostgreSQL, 3306 for MySQL) from your EC2 instance's security group.</li>
          <li>Update your Spring Boot <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>application.properties</Box> to point to the RDS endpoint:</li>
          <Box component="code" sx={{ display: "block", bgcolor: "background.paper", color: "text.primary", p: 1, my: 1, borderRadius: 1, whiteSpace: "pre" }}>
{`spring.datasource.url=jdbc:postgresql://<rds-endpoint>:5432/mydb
spring.datasource.username=<username>
spring.datasource.password=<password>
spring.jpa.hibernate.ddl-auto=update`}
          </Box>
          <li>Run your app and verify that it reads from and writes to RDS.</li>
        </Box>
        <Link href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_GettingStarted.CreatingConnecting.PostgreSQL.html" target="_blank" color="primary.main">AWS RDS getting started guide</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          3. Add Authentication
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Authentication controls who can access your API. The two most common approaches are JWT (JSON Web Tokens) and OAuth 2.0. JWT is simpler to implement from scratch: the server issues a signed token on login, and the client includes it in subsequent requests. OAuth is better when you want to support third-party login providers (Google, GitHub, etc.). For this project, we'll use JWT.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Create a <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>User</Box> entity with fields for email/username and a hashed password. Use <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>BCryptPasswordEncoder</Box> for password hashing.</li>
          <li>Add <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/auth/register</Box> and <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/auth/login</Box> endpoints. Registration creates the user; login validates credentials and returns a JWT.</li>
          <li>Implement a JWT utility class to generate and validate tokens. Add the <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>jjwt</Box> library to your dependencies.</li>
          <li>Create a Spring Security filter that intercepts requests, extracts the JWT from the <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>Authorization</Box> header, validates it, and sets the authentication context.</li>
          <li>Configure Spring Security to permit access to <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/auth/**</Box> and require authentication for everything else.</li>
        </Box>
        <Link href="https://docs.spring.io/spring-security/reference/servlet/authentication/index.html" target="_blank" color="primary.main">Spring Security authentication reference</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          4. Build the Frontend
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The frontend is a React application with Material-UI that handles login, registration, and a protected dashboard. It communicates with your backend API using JWT for authentication.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Scaffold a React project with Vite and install Material-UI and React Router.</li>
          <li>Build login and registration forms that call your <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/auth/login</Box> and <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>/auth/register</Box> endpoints.</li>
          <li>On successful login, store the JWT in <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>localStorage</Box>.</li>
          <li>Set up an axios interceptor to attach the token to every outgoing request:</li>
          <Box component="code" sx={{ display: "block", bgcolor: "background.paper", color: "text.primary", p: 1, my: 1, borderRadius: 1, whiteSpace: "pre" }}>
{`axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});`}
          </Box>
          <li>Create a protected route wrapper that redirects to the login page if no token is present.</li>
          <li>Build a dashboard that fetches and displays data from your CRUD endpoints.</li>
        </Box>
        <Link href="https://mui.com/material-ui/getting-started/" target="_blank" color="primary.main">Material-UI getting started</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          5. Deploy the Backend to EC2
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your backend needs a server to run on. EC2 gives you a virtual machine where you can install Java, run your Spring Boot JAR, and expose it to the internet through a reverse proxy.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Launch an EC2 instance (Amazon Linux 2 or Ubuntu). Make sure it's in the same VPC as your RDS instance.</li>
          <li>Configure the security group to allow inbound traffic on ports 22 (SSH), 80 (HTTP), and 443 (HTTPS).</li>
          <li>SSH into the instance and install Java:</li>
          <Box component="code" sx={{ display: "block", bgcolor: "background.paper", color: "text.primary", p: 1, my: 1, borderRadius: 1, whiteSpace: "pre" }}>
{`sudo yum install java-17-amazon-corretto  # Amazon Linux
sudo apt install openjdk-17-jdk            # Ubuntu`}
          </Box>
          <li>Build your Spring Boot app locally with <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>./mvnw package</Box> (or <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>./gradlew build</Box>) and transfer the JAR to EC2 using <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>scp</Box>.</li>
          <li>Create a systemd service file so your app starts automatically and restarts on failure.</li>
          <li>Install Nginx and configure it as a reverse proxy that forwards traffic from port 80 to your app's port (typically 8080).</li>
        </Box>
        <Link href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html" target="_blank" color="primary.main">AWS EC2 getting started guide</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          6. Deploy the Frontend to S3/CloudFront
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          The frontend deployment follows the same process as Project 1. Build your React app, upload the output to S3, and serve it through CloudFront.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>Follow the steps from the <Link href="/blog/static-website" color="primary.main">static website tutorial</Link> to deploy your frontend to S3 and CloudFront.</li>
          <li>Before building, set your API base URL as an environment variable so the frontend knows where to send requests:</li>
          <Box component="code" sx={{ display: "block", bgcolor: "background.paper", color: "text.primary", p: 1, my: 1, borderRadius: 1 }}>
            VITE_API_URL=https://api.yourdomain.com
          </Box>
          <li>Reference this in your code with <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>import.meta.env.VITE_API_URL</Box> so it's baked into the build at compile time.</li>
        </Box>

        <Typography variant="h5" sx={{ mt: 3 }}>
          7. Configure a Custom Domain and HTTPS for the API
        </Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          Your frontend is served at <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>yourdomain.com</Box>, so your API should be reachable at something like <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>api.yourdomain.com</Box>. You'll create a DNS record for this subdomain and set up HTTPS.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Steps to Complete:</Typography>
        <Box component="ul" sx={{ color: "text.primary" }}>
          <li>In Route 53, create an A record for <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>api.yourdomain.com</Box> pointing to your EC2 instance's Elastic IP.</li>
          <li>Request an SSL certificate from AWS Certificate Manager for <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>api.yourdomain.com</Box>. If you're terminating HTTPS at Nginx, use Let's Encrypt (Certbot) instead — ACM certificates can only be used with AWS services like CloudFront and ALB.</li>
          <li>Configure Nginx to serve HTTPS on port 443 and redirect HTTP to HTTPS.</li>
          <li>Alternatively, place an Application Load Balancer (ALB) in front of your EC2 instance. Attach the ACM certificate to the ALB listener, and let Nginx handle plain HTTP behind it. This is the more "AWS-native" approach.</li>
        </Box>
        <Link href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-ec2-instance.html" target="_blank" color="primary.main">Route 53 routing to EC2</Link>

        <Typography variant="h5" sx={{ mt: 3 }}>
          8. Common Gotchas
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>CORS Configuration</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          Your frontend and API are on different origins (<Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>yourdomain.com</Box> vs. <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>api.yourdomain.com</Box>), so the browser will block cross-origin requests unless your backend explicitly allows them. In Spring Boot, add a <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>@CrossOrigin</Box> annotation to your controllers or configure a global CORS mapping in your security configuration. Make sure to allow the specific origin of your frontend, not <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>*</Box>, especially when sending credentials.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Security Group Rules</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          A common source of "connection refused" or timeout errors is misconfigured security groups. Remember: your EC2 instance needs to allow inbound traffic on ports 80 and 443 from the internet, and your RDS instance needs to allow inbound traffic on the database port from your EC2 security group only. Use security group references instead of IP addresses where possible.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>RDS Not Publicly Accessible</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          By design, your RDS instance should not be publicly accessible. If you need to connect to it from your local machine for development, use SSH tunneling through your EC2 instance rather than opening the database to the internet.
        </Typography>

        <Typography variant="h6" sx={{ mt: 3 }}>Environment-Specific API URLs</Typography>
        <Typography variant="body1" sx={{ mt: 1 }}>
          During development, your API runs on <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>localhost:8080</Box>. In production, it's at <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>https://api.yourdomain.com</Box>. Use environment variables (<Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>VITE_API_URL</Box>) and separate <Box component="code" sx={{ bgcolor: "background.paper", px: 0.5, borderRadius: 0.5 }}>.env</Box> files for development and production so you don't accidentally point your deployed frontend at localhost.
        </Typography>

        <Typography variant="body1" sx={{ mt: 4 }}>
          By completing this project, you'll have built and deployed a real web application with a backend, database, authentication, and a frontend — the same fundamental architecture behind most production web apps. The specific technologies can vary, but the patterns you've learned here apply everywhere.
        </Typography>
      </Box>
    </Container>
  );
};

export default FullStackApp;
