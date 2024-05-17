import React from "react";

// import Box from "@mui/material/Box";
import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
import { Tabs, Tab, Box, Typography, Paper, Grid, Button, Pagination, InputAdornment, Input } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// import Pagination from "@mui/material/Pagination";
import DashboardUpperBox from "./DashboardUpperBox.jsx";

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
              <Box style={{ display: "flex", flexDirection: "row", justifyContent:"space-between" }}>
                <Box
                  sx={{
                    maxWidth: { xs: 500, sm: 700 },
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
                      width: "23rem",
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
                Item One
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
            count={9}
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
