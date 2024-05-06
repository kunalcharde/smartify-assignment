import React from 'react';
import AutoTopup from '../../Components/AutoTopup';
import Box from "@mui/material/Box";
const Home = () => {
  return (
    <Box sx={{ height: "100vh", display: 'flex', alignItems: 'center', justifyContent: 'center' ,padding : "10px" }}>
      <AutoTopup />
    </Box>
  );
};

export default Home;
