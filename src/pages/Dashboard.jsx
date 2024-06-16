import React, { useEffect, useState, useRef, useCallback,useMemo } from "react";
import { useMediaQuery } from "@mui/material";
// import SearchIcon from '@mui/icons-material/Search';
import PropTypes from "prop-types";
import axios from "axios";

import {
  Tabs,
  Tab,
  Box,
  Typography,
  Paper,
  Grid,
  Pagination,
  InputAdornment,
  
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GET_EVENT_LIST } from "../utils/urls.js";
import DashboardUpperBox from "../components/EventCreationSection/index.jsx";
// import DashboardUpperBox from "./DashboardUpperBox.jsx";

import DashboardCardsWithAllParameter from "./DashboardCardsWithAllParameter.jsx";
// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });
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
        <Box sx={{ p: 3, pl: 0, pr: 0 }}>
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
  const isSmallScreen = useMediaQuery("(max-width:542px)");

  const [value, setValue] = React.useState(0);
  const [pageNo, setpageNo] = React.useState(1);
  const [pSize, setpSize] = React.useState(3);
  const [paginationSize, setpaginationSize] = React.useState(0);
  const [cards, setCards] = useState([]);
  const [partnersearch, setpartnersearch] = useState(""); // Initialize with an empty string
console.log(setpSize);
  // const headersGetEvent = {
  //   Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHgzQjI2NjdjRDRiNjAxMkU2YkFGNzNhMGExYzcxRjA5MDdDY0UzNjg0IiwiZGlkIjoiZGlkOmhpZDp0ZXN0bmV0OjB4M0IyNjY3Y0Q0YjYwMTJFNmJBRjczYTBhMWM3MUYwOTA3Q2NFMzY4NCIsImlkIjoiNjYzYTg1OGE1MjQwOTcyM2I2NzllNDk1IiwiaWF0IjoxNzE1NTU3NDc1LCJleHAiOjE3MTU2NDM4NzV9.Rj_v43Aum617zer_2D44JH6Ma0lcTSHjGY0R_2mn39Q`,
  //   "Content-Type": "application/json",
  // };

  const headersGetEvent = useMemo(() => ({
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHgzQjI2NjdjRDRiNjAxMkU2YkFGNzNhMGExYzcxRjA5MDdDY0UzNjg0IiwiZGlkIjoiZGlkOmhpZDp0ZXN0bmV0OjB4M0IyNjY3Y0Q0YjYwMTJFNmJBRjczYTBhMWM3MUYwOTA3Q2NFMzY4NCIsImlkIjoiNjYzYTg1OGE1MjQwOTcyM2I2NzllNDk1IiwiaWF0IjoxNzE1NTU3NDc1LCJleHAiOjE3MTU2NDM4NzV9.Rj_v43Aum617zer_2D44JH6Ma0lcTSHjGY0R_2mn39Q`,
    "Content-Type": "application/json",
  }), []);
  

  const getEventDetails = useCallback(() => {
    let url;
    switch (value) {
      case 1:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=ends_in_24h`;
        break;
      case 2:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=completed`;
        break;
      case 3:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=nft`;
        break;
      case 4:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=pending_reward`;
        break;
      default:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}`;
        break;
    }

    axios({
      method: "get",
      url: url,
      headers: headersGetEvent,
    })
      .then((response) => {
        if (response?.data?.success && response?.data?.message === "Success") {
          const totalresponse_length = response?.data?.total;
          const countPages = Math.ceil(totalresponse_length / pSize);
          setpaginationSize(countPages);
          setCards(response?.data?.data);
        }
      })
      .catch((e) => {
        console.error(e);
      });
  }, [value, pageNo, pSize,headersGetEvent]);

  const handleSearch = useCallback(() => {
    let url;
    switch (value) {
      case 1:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=ends_in_24h&searchString=${partnersearch}`;
        break;
      case 2:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=completed&searchString=${partnersearch}`;
        break;
      case 3:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=nft&searchString=${partnersearch}`;
        break;
      case 4:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&filter=pending_reward&searchString=${partnersearch}`;
        break;
      default:
        url = `https://api.fyre-stage.hypersign.id/${GET_EVENT_LIST}?page=${pageNo}&limit=${pSize}&searchString=${partnersearch}`;
        break;
    }

    if (partnersearch) {
      axios({
        method: "get",
        url: url,
        headers: headersGetEvent,
      })
        .then((response) => {
          if (
            response?.data?.success &&
            response?.data?.message === "Success"
          ) {
            const totalresponse_length = response?.data?.total;
            const countPages = Math.ceil(totalresponse_length / pSize);
            setpaginationSize(countPages);
            setCards(response?.data?.data);
          }
        })
        .catch((error) => {
          console.error(error);
          getEventDetails();
        });
    } else {
      getEventDetails();
    }
  }, [partnersearch, value, pageNo, pSize, getEventDetails,headersGetEvent]);

  useEffect(() => {
    getEventDetails();
  }, [pageNo, pSize, getEventDetails]);

  const handleChange = (event, newValue) => {
    setpartnersearch("");

    setValue(newValue);
  };
  const handlePageChange = (event, value) => {
    setpageNo(value);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  const searchInputRef = useRef(null); // Create a ref for the search input
  const handleInputChange = (event) => {
    if (event.target.value === "") {
      getEventDetails();
    }
  };

  return (
    <Grid>
      <Paper
        sx={{
          p: 2,
          flexGrow: 1,
          background: "transparent",
          // background: "#FFFFFF14",

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
                  // style={{
                  //   fontFamily: "Poppins",
                  //   fontSize: "30px",
                  //   fontWeight: 700,
                  //   lineHeight: "45px",
                  //   textAlign: "left",
                  //   width: "215px",
                  //   height: "45px",
                  //   gap: "0px",
                  //   opacity: "0px",
                  //   color: "#F6F6F7",
                  //   font: "Poppins",
                  // }}
                  style={{
  flex: '0 0 auto',
  padding: '0',
  paddingRight: '3rem',
  // paddingLeft: '17.25rem',
  margin: '0',
  marginTop: '3.75rem',
  font: '700 25.5px Poppins, sans-serif',
  color: '#f6f6f7',
  whiteSpace: 'pre-wrap'
}}
                >
                  Your Events
                </Typography>
              </Grid>
            </Grid>
            <Grid sx={{ width: "100%" }}>
              <Grid
                // style={{
                //   display: "flex",
                //   flexDirection: "row",
                //   justifyContent: "space-between",
                // }}
                style={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  justifyContent: isSmallScreen ? "center" : "space-between",
                  alignItems: isSmallScreen ? "flex-start" : "center",
                }}
              >
                <Grid
                  sx={{
                    maxWidth: { xs: 300, sm:  700 },
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
                  
                </Grid>
                <Grid>
                  <input
                    style={{
                      height: "38px",
                      width: isSmallScreen ? "15rem" : "20rem",
                      borderRadius: "25px",
                      color: "white",
                      outline: "none",
                      paddingLeft: "10px",
                      paddingRight: "10px",
                      border: "1px solid rgba(196, 196, 196, 1)",
                      backgroundColor: "#FFFFFF14",
                      marginTop: isSmallScreen ? "10px" : "0",

                    }}
                    type="text"
                    name=""
                    id=""
                    placeholder="🔍 Search events by name or tags"
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                    value={partnersearch}
                    onChange={(e) => setpartnersearch(e.target.value)}
                    onKeyPress={handleKeyPress}
                    ref={searchInputRef}
                    onInput={handleInputChange}
                  />
                </Grid>
              </Grid>
              
              <CustomTabPanel value={value} index={0}>
                <Box
                  style={{
                    gap: "15px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cards?.map((cardDetails, index) => (
                    <DashboardCardsWithAllParameter cardDetails={cardDetails} />
                  ))}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={1}>
                <Box
                  style={{
                    gap: "15px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cards?.map((cardDetails, index) => (
                    <DashboardCardsWithAllParameter cardDetails={cardDetails} />
                  ))}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={2}>
                <Box
                  style={{
                    gap: "15px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cards?.map((cardDetails, index) => (
                    <DashboardCardsWithAllParameter cardDetails={cardDetails} />
                  ))}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={3}>
                <Box
                  style={{
                    gap: "15px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cards?.map((cardDetails, index) => (
                    <DashboardCardsWithAllParameter cardDetails={cardDetails} />
                  ))}
                </Box>
              </CustomTabPanel>
              <CustomTabPanel value={value} index={4}>
                <Box
                  style={{
                    gap: "15px",
                    opacity: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {cards?.map((cardDetails, index) => (
                    <DashboardCardsWithAllParameter cardDetails={cardDetails} />
                  ))}
                </Box>{" "}
              </CustomTabPanel>
            </Grid>
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
          {paginationSize > 0 && (
            <Pagination
              count={paginationSize}
              page={pageNo}
              onChange={handlePageChange}
              size="small"
              sx={{
                background:'none !important',
                "& .MuiPaginationItem-root": {
                  color: "white",
                },
              }}
            />
          )}
        </Grid>
      </Paper>
    </Grid>
  );
};

export default Dashboard;
