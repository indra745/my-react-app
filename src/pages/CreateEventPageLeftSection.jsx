import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
const CreateEventPageLeftSection = () => {
    return (
        <Grid p={9} >
     <Typography color={'#F6F6F7'} fontWeight={700} fontSize={20}>Create Events</Typography>
     <Grid p={1} display={'flex'} gap={2}>
     <Grid 
      sx={{
        background: "#2656D6",
        width: "1.2rem",
        height:"1.2rem",
        color: "#2656D6",
        border: "1px solid", 
        borderRadius: "30px", 
        boxShadow: "0px 0px 5px 4px #FFFFFF57" 
      }}
      mt={1}
    >
      .
    </Grid>
        <Typography color={'#F6F6F7'} fontWeight={700} fontSize={15} mt={1}>Basic Info</Typography>
     </Grid>
    </Grid>
    );
};

export default CreateEventPageLeftSection;