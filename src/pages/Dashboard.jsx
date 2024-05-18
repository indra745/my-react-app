import React, { useEffect } from "react";

import PropTypes from "prop-types";
import axios from "axios";

import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  Pagination,
  InputAdornment,
  Input,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonBase from "@mui/material/ButtonBase";
import { styled } from "@mui/material/styles";

import DashboardUpperBox from "./DashboardUpperBox.jsx";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Dashboard = () => {
  const [value, setValue] = React.useState(0);
  const [pageNo, setpageNo] = React.useState(1);
  const [pSize, setpSize] = React.useState(4);
  const [paginationSize, setpaginationSize] = React.useState(0);


  const headersGetEvent = {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHgzQjI2NjdjRDRiNjAxMkU2YkFGNzNhMGExYzcxRjA5MDdDY0UzNjg0IiwiZGlkIjoiZGlkOmhpZDp0ZXN0bmV0OjB4M0IyNjY3Y0Q0YjYwMTJFNmJBRjczYTBhMWM3MUYwOTA3Q2NFMzY4NCIsImlkIjoiNjYzYTg1OGE1MjQwOTcyM2I2NzllNDk1IiwiaWF0IjoxNzE1NTU3NDc1LCJleHAiOjE3MTU2NDM4NzV9.Rj_v43Aum617zer_2D44JH6Ma0lcTSHjGY0R_2mn39Q`,
    "Content-Type": "application/json",
  };

  const getEventDetails = () => {
    axios({
      method: "get",
      url: `https://api.fyre-stage.hypersign.id/api/v1/event?page=${pageNo}&limit=${pSize}`,
      headers: headersGetEvent,
    })
      .then(function (response) {
        if (
          response?.data?.success === true &&
          response?.data?.message === "Success"
        ) {
          const totalresponse_length=response?.data?.total;
          const countPages = Math.ceil(totalresponse_length / pSize);
          setpaginationSize(countPages);

          
        }
      })
      .catch((e) => {});
  };

  useEffect(() => {
    getEventDetails();
  }, [pageNo,pSize]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handlePageChange = (event, value) => {
    setpageNo(value);
  };
  return (
    <Grid>
      <Paper
        sx={{
          p: 2,
          flexGrow: 1,
          background: "#FFFFFF14",
        }}
      >
        <DashboardUpperBox />
      </Paper>

      <Paper
        sx={{
          p: 2,
          flexGrow: 1,
          background: "transparent",
          mt: 3,
        }}
      >
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
                  Your Events
                </Typography>
              </Grid>
            </Grid>
            <Box sx={{ width: "100%" }}>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    maxWidth: { xs: 400, sm: 700 },
                    bgcolor: "transparent",
                  }}
                >
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                    sx={{
                      "& .MuiTabs-indicator": {
                        backgroundColor: "white",
                      },
                      "& .Mui-selected": {
                        color: "white",
                      },
                    }}
                  >
                    <Tab
                      label="All"
                      {...a11yProps(0)}
                      sx={{ color: value === 0 ? "white" : "#ADB9C7" }}
                    />
                    <Tab
                      label="Ongoing"
                      {...a11yProps(1)}
                      sx={{ color: value === 1 ? "white" : "#ADB9C7" }}
                    />
                    <Tab
                      label="Completed"
                      {...a11yProps(2)}
                      sx={{ color: value === 2 ? "white" : "#ADB9C7" }}
                    />
                    <Tab
                      label="Drafts"
                      {...a11yProps(3)}
                      sx={{ color: value === 3 ? "white" : "#ADB9C7" }}
                    />
                    <Tab
                      label="Pending Rewards"
                      {...a11yProps(4)}
                      sx={{ color: value === 4 ? "white" : "#ADB9C7" }}
                    />
                  </Tabs>
                </Box>
                <Box>
                  <input
                    style={{
                      height: "38px",
                      width: "20rem",
                      borderRadius: "25px",
                      color: "white",
                      outline: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      border: "1px solid rgba(196, 196, 196, 1)",
                      backgroundColor: "transparent",
                    }}
                    type="text"
                    name=""
                    id=""
                    placeholder="🔍  Search events by name or tags"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    // value={partnersearch}
                    // onChange={(e) => setpartnersearch(e.target.value)}
                    // onKeyPress={handleKeyPress}
                    // ref={searchInputRef}
                    // onInput={handleInputChange}
                  />
                </Box>
              </Box>
              <CustomTabPanel value={value} index={0}>
                <Box
                  style={{
                    background: "#FFFFFF14",
                    border: "1px solid white",
                    height: "162px",
                    padding: "0px",
                    gap: "33px",
                    borderRadius: "20px",
                    opacity: 1,
                  }}
                >
                  <Paper
                    sx={{
                      p: 2,
                      margin: "auto",
                      // maxWidth: 500,
                      flexGrow: 1,
                      backgroundColor: "transparent",
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item>
                        <ButtonBase
                          sx={{
                            width: 230,
                            height: 128,
                            border: "1px",
                            borderRadius: "20px",
                          }}
                        >
                          <Img
                            alt="complex"
                            src="https://qph.cf2.quoracdn.net/main-qimg-c6bb3257e87d07f96732bfd3e113e712"
                          />
                        </ButtonBase>
                      </Grid>
                      <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                          <Grid item xs>
                            <Typography
                              gutterBottom
                              variant="subtitle1"
                              component="div"
                              color={"#F6F6F7"}
                            >
                              NFT AIRPOD
                            </Typography>
                            <Typography
                              variant="body2"
                              color={"#ADB9C7"}
                              gutterBottom
                            >
                              December 01, 2021, 4:20AM to 4:20PM EST{" "}
                              <span
                                style={{ color: "red", marginLeft: "1rem" }}
                              >
                                Inactive
                              </span>{" "}
                            </Typography>
                            <Typography variant="body2" color={"#F6F6F7"}>
                              10 Participants{" "}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                            ></Typography>
                          </Grid>
                          <Grid item>
                            <Typography
                              sx={{ cursor: "pointer" }}
                              variant="body2"
                            >
                              Remove
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item>
                          <Typography
                            variant="subtitle1"
                            component="div"
                            color={"#F6F6F7"}
                          >
                            <MoreVertIcon />
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Paper>{" "}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                Item Three
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                Item Three
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                Item Three
              </CustomTabPanel>
            </Box>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Pagination
            count={paginationSize}
            page={pageNo}
            onChange={handlePageChange}

            size="small"
            sx={{
              "& .MuiPaginationItem-root": {
                color: "white", // Change the color of pagination items
              },
            }}
          />
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Dashboard;
