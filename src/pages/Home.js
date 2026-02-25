import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useColorMode } from "@boller002/ui";
import logoLight from "../assets/logo-black.png";
import logoDark from "../assets/logo.png";

const Home = () => {
  const { mode } = useColorMode();
  const logo = mode === "dark" ? logoDark : logoLight;
  const inactiveLogo = mode === "dark" ? logoLight : logoDark;

  useEffect(() => {
    const img = new Image();
    img.src = inactiveLogo;
  }, [inactiveLogo]);

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
