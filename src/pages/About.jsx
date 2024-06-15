import { Grid } from "@mui/material";
import React from "react";
import CreateEventPageLeftSection from "./CreateEventPageLeftSection.jsx";
import CreateEventPageRightSection from "./CreateEventPageRightSection.jsx";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "@mui/material";

const About = () => {
  const isSmallScreen = useMediaQuery("(max-width:645px)");

  return (
    <Grid
      container
      style={{ height: "100vh" }}
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
    >
      <Grid
        item
        xs={3}
        sx={{
          borderRight: "2px solid #1A1D27",
          height: "100%",
          display: isSmallScreen ? "none" : "grid",
        }}
      >
        <CreateEventPageLeftSection />
      </Grid>
      <Grid
        item
        xs={isSmallScreen ? 12 : 9}
        style={
          {
            // overflowY: "auto",
            // position: "relative",
            // scrollbarWidth:"none"
          }
        }
      >
        <CreateEventPageRightSection />
      </Grid>
    </Grid>
  );
};

export default About;
