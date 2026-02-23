import React from "react";
import { Box, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: 12,
        px: 2,
        maxWidth: 800,
        mx: "auto",
      }}
    >
      <Box
        component="img"
        src={logo}
        alt="oller.io"
        sx={{ width: 220, mb: 4 }}
      />
      <Typography variant="h4" color="text.secondary">
        Full stack software engineer in Seattle, WA
      </Typography>
    </Box>
  );
};

export default Home;
