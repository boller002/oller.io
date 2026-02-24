import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Header, Footer } from "@boller002/ui";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FundamentalProjects from "./pages/posts/FundamentalProjects";
import StaticWebsite from "./pages/posts/StaticWebsite";
import FullStackApp from "./pages/posts/FullStackApp";
import Todo from "./pages/posts/Todo";
import Projects from "./pages/Projects";

import logo from "./assets/logo.png";

const navLinks = [
  { title: "Blog", path: "/blog" },
  { title: "Projects", path: "/projects" },
];

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header logo={logo} navLinks={navLinks} />
        <Box component="main" sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/fundamental-projects" element={<FundamentalProjects />} />
            <Route path="blog/static-website" element={<StaticWebsite />} />
            <Route path="blog/full-stack-app" element={<FullStackApp />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/blog/todo" element={<Todo />} />
          </Routes>
        </Box>
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
