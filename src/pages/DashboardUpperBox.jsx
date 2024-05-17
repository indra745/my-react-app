

import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import AddIcon from "@mui/icons-material/Add";
import Pagination from '@mui/material/Pagination';

const DashboardUpperBox = () => {

  return (
    <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid
              item
              xs
              container
              direction="column"
              spacing={3}
              mr={3}
              mb={2}
            >
              <Grid item xs>
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  component="div"
                  style={{
                    fontFamily: "Poppins",
                    fontSize: "30px",
                    fontWeight: 700,
                    lineHeight: "45px",
                    textAlign: "left",
                    width: "215px",
                    height: "45px",
                    gap: "0px",
                    opacity: "0px",
                    color: "#F6F6F7",
                    font: "Poppins",
                  }}
                >
                  Create Events
                </Typography>

                <Typography
                  variant="body2"
                  color="white"
                  maxWidth={800}
                  textAlign={"left"}
                  style={{color:"#ADB9C7"}}
                >
                  Craft an exciting challenges and tasks for participants to win
                  amazing prizes effortlessly. Our user-friendly interface and
                  powerful tool makes the event creation a breeze. Let's get
                  started!"
                </Typography>
              </Grid>
            </Grid>
            <Grid item style={{ display: "flex", alignItems: "center" }}>
              <button
                variant="contained"
                style={{
                  background: "#2656D6",
                  borderRadius: "5px",
                  color: "#fff",
                  border: "1px solid #2656D6",
                  height: "45px",
                  width: "165px",
                  display: "flex",
                  padding: "1rem",
                }}
              >
                <AddIcon fontSize="small" style={{marginTop:"-0.2rem"}}/> {" "}
                Create Event
              </button>
            </Grid>
          </Grid>
        </Grid>
  );
};

export default DashboardUpperBox;
