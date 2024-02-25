import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/assets/images/Logo.png';


const handleScrollToExercises = () => {
  const exercisesSection = document.getElementById('exercises');
  if (exercisesSection) {
    exercisesSection.scrollIntoView({ behavior: 'smooth' });
  }
};
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');


  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: { sm: '123px', xs: '40px' },
        mt: { sm: '32px', xs: '20px' },
        justifyContent: 'none',
        px: '20px',
      }}
    >
     <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "48px", height: "48px", margin: "0 20px" }}
        />
      </Link>
      <Stack direction="row" gap="40px" fontSize="24px" alignItems="flex-end">
        <Link
          to="/"
          onClick={() => setActiveLink('Home')}
          style={{
            textDecoration: 'none',
            color: '3A1212',
            borderBottom: activeLink === 'Home' ? '3px solid #FF2625' : 'none',
          }}
        >
          Home
        </Link>
        {/* <a
          href="#exercises"
          onClick={() => setActiveLink('Exercises')}
          style={{
            textDecoration: 'none',
            color: '3A1212',
            borderBottom: activeLink === 'Exercises' ? '3px solid #FF2625' : 'none',
          }}
        > */}
    <Stack>
  <a href="#exercises" onClick={handleScrollToExercises} style={{ textDecoration: 'none', color: '3A1212', borderBottom: activeLink === 'Exercises' ? '3px solid #FF2625' : 'none',}}>
    Exercises
  </a>
</Stack>

          {/* Exercises */}
        {/* </a> */}
      </Stack>
    </Stack>
  );
};

export default Navbar;
