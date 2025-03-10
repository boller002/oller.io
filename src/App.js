// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Blog from "./pages/Blog";
import FundamentalProjects from "./pages/posts/FundamentalProjects";
import StaticWebsite from "./pages/posts/StaticWebsite";
import Todo from "./pages/posts/Todo";
import Projects from "./pages/Projects";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/fundamental-projects" element={<FundamentalProjects />} />
        <Route path="blog/static-website" element={<StaticWebsite />} />
        <Route path="projects" element={<Projects />} />
        <Route path="/blog/todo" element={<Todo />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
