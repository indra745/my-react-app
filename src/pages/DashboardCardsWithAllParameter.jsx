import React from "react";

import {
  
  Box,
  Typography,
  Paper,
  Grid,
  
  Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import ButtonBase from "@mui/material/ButtonBase";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });


const DashboardCardsWithAllParameter = (props) => {
    const { cardDetails } = props;

  return (
    <Paper
                      sx={{
                        p: 2,
                        margin: "auto",
                        flexGrow: 1,
                        backgroundColor: "transparent",
                        border: "0.5px solid #B6B6B6",
                        borderRadius: "20px",
                        background: "#FFFFFF14",
                        width: "98%",
                      }}
                    >
                      <Grid container spacing={2}>
                        <Grid item>
                          <ButtonBase
                            sx={{
                              width: 230,
                              height: 140,
                              border: "1px",
                              borderRadius: "20px",
                            }}
                          >
                            <Img alt="complex" src={cardDetails?.banner} />
                          </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                          <Grid
                            item
                            xs
                            container
                            direction="column"
                            spacing={2}
                          >
                            <Grid item xs>
                              <Typography
                                gutterBottom
                                variant="subtitle1"
                                component="div"
                                color={"#F6F6F7"}
                              >
                                {cardDetails?.eventName}
                              </Typography>
                              <Typography
                                variant="body2"
                                color={"#ADB9C7"}
                                gutterBottom
                              >
                                December 01, 2021, 4:20AM to 4:20PM EST{" "}
                                <span
                                  style={{
                                    color: cardDetails?.isPublished
                                      ? "#00FFA8"
                                      : "#FF0000",
                                    marginLeft: "1rem",
                                    boxShadow: cardDetails?.isPublished
                                      ? "5px 1px 8px 0px #3EF9B9A1"
                                      : "5px 1px 8px 0px #EB5757A1",
                                  }}
                                >
                                  {cardDetails?.isPublished
                                    ? "Active"
                                    : "Inactive"}
                                </span>
                              </Typography>
                              <Typography variant="body2" color={"#F6F6F7"}>
                                {cardDetails?.participantCount} Participants
                              </Typography>
                              <Grid
                                item
                                xs={6}
                                style={{
                                  display: "flex",
                                  gap: "8px",
                                  marginTop: "0.2rem",
                                  height:"1.3rem"
                                }}
                              >
                                <Box
                                  sx={{
                                    width: "4rem",
                                    height: "21px",
                                    padding: "5px",
                                    gap: "10px",
                                    borderRadius: "5px",
                                    backgroundColor: "#EB7D13",
                                    color: "white",
                                    fontWeight:"600"
                                  }}
                                >
                                  {cardDetails?.referral?.refereeXp ?? 0} EXP
                                </Box>
                                <Box
                                  sx={{
                                    width: "4rem",
                                    height: "21px",
                                    padding: "5px",
                                    gap: "10px",
                                    borderRadius: "5px",
                                    backgroundColor: "#2AD798",
                                    color: "white",
                                    fontWeight:"600"
                                  }}
                                >
                                  {cardDetails?.rewards?.rewardPerPerson ?? 0}{" "}
                                  USTD
                                </Box>
                                {cardDetails?.communityDetail
                                  ?.hasDomainVerified && (
                                  <Avatar
                                    alt="Remy Sharp"
                                    src="/download-removebg-preview.png"
                                    sx={{
                                      width: 28,
                                      height: 28,
                                      background: "#FFF2AF",
                                    }}
                                  />
                                )}
                                
                              </Grid>
                              <Grid container spacing={2} p={2} pb={0} pl={0}>
                            {cardDetails?.tags?.map((tag, index) => (
                              <Grid item xs={1.5} >
                              <Typography
                                sx={{ cursor: "pointer" , color:"black", background:"#ECE1CB", border:"1px", borderRadius:"20px", fontWeight:"600", textAlign:"center"}}
                                variant="body2"
                              >
                                {tag}
                              </Typography>
                              </Grid>
                            ))}
                            </Grid>
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
                    </Paper>
  );
};

export default DashboardCardsWithAllParameter;
