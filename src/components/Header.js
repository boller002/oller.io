// src/components/Header.js
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Link
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import logo from "../assets/logo-white.png";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Blog", path: "/blog" },
    { title: "Projects", path: "/projects" }
  ];

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const renderDrawer = () => (
    <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {navLinks.map((item) => (
            <ListItem button key={item.title} component={RouterLink} to={item.path}>
              <ListItemText primary={item.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <RouterLink to="/">
            <img src={logo} width="80" style={{ cursor: 'pointer' }}/>
          </RouterLink>

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                onClick={toggleDrawer(true)}
                sx={{ color: "black" }}
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              {renderDrawer()}
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 2 }}>
              {navLinks.map((item) => (
                <Link
                  key={item.title}
                  component={RouterLink}
                  to={item.path}
                  underline="none"
                  sx={{ color: "black", fontSize: "1rem" }}
                >
                  {item.title}
                </Link>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
