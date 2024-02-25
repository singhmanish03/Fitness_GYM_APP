import React from "react";
import { Box,Stack, Typography, Button, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";

const HeroBanner = () => {
  const theme = useTheme();

  const fadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `;

  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "50px" },
        ml: { lg: "-1px", sm: "20px" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        padding: "40px",
        borderRadius: "10px",
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: "bold", color: "#FFFFFF", mb: 2 }}
      >
        Get Fit, Stay Strong, Live Happy
      </Typography>
      <Typography
        variant="h4"
        component="p"
        sx={{ color: "#FFFFFF", mb: 2 }}
      >
        Your journey to a healthier lifestyle starts here.
      </Typography>
      <Typography variant="body1" sx={{ color: "#FFFFFF", mb: 4 }}>
        Discover personalized fitness plans tailored just for you by Manish.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{ borderRadius: "50px" }}
      >
        <Stack>
      <a href="#exercises" style={{  textDecoration: 'none',   textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
      </Button>
    </Box>
  );
};

export default HeroBanner;
