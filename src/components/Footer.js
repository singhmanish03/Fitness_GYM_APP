import React from 'react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';

const Footer = () => {
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
    <Box mt="80px"
      sx={{
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
        padding: '40px',
        borderRadius: '10px',
        animation: `${fadeIn} 1s ease-in-out`,
      }}
    >
      <Stack gap="4px" sx={{ alignItems: 'center' }} flexWrap="wrap">
        <Typography variant="h5" sx={{ color: '#FFFFFF' }}>
          © 2024 Fitness Club. All rights reserved.
        </Typography>
        <Typography variant="h6" sx={{ color: '#FFFFFF' }}>
          Made Wth ❤️ Manish Singh
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
