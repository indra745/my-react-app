import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState, useMemo } from "react";
import "./style.css";

// import { MdOutlineFileUpload } from "react-icons/md";
// import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Autocomplete from "@mui/material/Autocomplete";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import BannerUploader from "../components/BannerUploader";
import EventDescriptionSection1 from "../components/EventDescriptionSection1/index";
const tags = ["DID", "harmony", "nft", "defi", "cosmos"];

const About = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [editorState, setEditorState] = useState(null); // Added state for the editor
  const [editorContent, setEditorContent] = useState("");
  console.log(file, editorContent,editorState,setFile);
  const maxLength = 20;
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  // const handleInputFile = (event) => {
  //   const files = event.target.files;
  //   if (files.length === 0) {
  //     return;
  //   }
  //   const selectedFile = files[0];
  //   if (selectedFile && selectedFile.size <= 400 * 1024) {
  //     // 400 KB
  //     const reader = new FileReader();
  //     reader.readAsDataURL(selectedFile);
  //     reader.onload = () => {
  //       // reader.result contains the base64 representation of the selected file
  //       setFile(reader.result);
  //     };
  //   } else if (selectedFile) {
  //     alert("File size exceeds 400kb limit.");
  //   }
  // };

  const [selectedDateTime, setSelectedDateTime] = useState(null);

  const handleDateTimeChange = (newDateTime) => {
    setSelectedDateTime(newDateTime);
    // console.log("Selected Start Date:", newDateTime ? newDateTime.toISOString() : null);
  };

  const [selectedEndTime, setselectedEndTime] = useState(null);

  const handleDateTimeChangetwo = (newDateTime) => {
    // const formattedDateTime = dayjs(newDateTime).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
    setselectedEndTime(newDateTime);
  };

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    const contentState = editorState.getCurrentContent();
    const rawContentState = convertToRaw(contentState);
    const htmlContent = draftToHtml(rawContentState);
    const plainTextContent = htmlContent.replace(/<\/?[^>]+(>|$)/g, "");
    setEditorContent(plainTextContent);
  };
  console.log("editorContent", editorContent,onEditorStateChange);

  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagsChange = (event, newValue) => {
    setSelectedTags(newValue);
    // Output the selected tags array
  };
  console.log(selectedTags);

  const headersGetEvent = useMemo(
    () => ({
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHgzQjI2NjdjRDRiNjAxMkU2YkFGNzNhMGExYzcxRjA5MDdDY0UzNjg0IiwiZGlkIjoiZGlkOmhpZDp0ZXN0bmV0OjB4M0IyNjY3Y0Q0YjYwMTJFNmJBRjczYTBhMWM3MUYwOTA3Q2NFMzY4NCIsImlkIjoiNjYzYTg1OGE1MjQwOTcyM2I2NzllNDk1IiwiaWF0IjoxNzE1NTU3NDc1LCJleHAiOjE3MTU2NDM4NzV9.Rj_v43Aum617zer_2D44JH6Ma0lcTSHjGY0R_2mn39Q`,
      "Content-Type": "application/json",
      accept: "application/json",
    }),
    []
  );

  const CreateEventApiAx = async () => {
    const str = selectedDateTime.toISOString();
    const edr = selectedEndTime.toISOString();

    try {
      const payload = {
        communityId: "662a2311f1937f80209e5345",
        eventName: name,
        banner: file,
        startDate: str,
        endDate: edr,
        isDraft: false,
        isPublished: true,
        tags: selectedTags,
        isOpenToAll: false,
        referral: {
          refereeXp: 0,
          referralXp: 0,
          difficultyLevel: 0,
          limit: 0,
        },
        rewards: [
          {
            rewardType: "NFT",
            title: "ERC720 worth 50$",
            winnerCount: 0,
            rewardPerPerson: 0,
            distributionType: "FYRE",
          },
        ],
        description: editorContent,
      };
      axios({
        method: "post",
        url: `https://api.fyre-stage.hypersign.id/api/v1/event`,
        headers: headersGetEvent,
        data: payload,
      })
        .then(function (response) {
          console.log("response.data", response.data.message);

          if (response?.data?.success) {
            toast.success(response?.data?.message);
          }
        })
        .catch((err) => {
          const { response } = err;
          console.log("Res=>", { response, err });
          const { data } = response;
          const mess = data.message;
          toast.error(mess);

          console.log(mess);
        });
    } catch (error) {
      toast.error("error");
    }
  };

  const CreateEventApi = () => {
    CreateEventApiAx();
    navigate("/");
  };

  return (
    <Grid
      container
      spacing={4}
      sx={{
        maxHeight: "100%", // Adjusted height to accommodate footer
        height: "100vh",
        overflowY: "auto",
        "&::-webkit-scrollbar": {
          display: "none",
        },
        "-ms-overflow-style": "none", // for Internet Explorer and Edge
        "scrollbar-width": "none", // for Firefox
      }}
    >
      <Grid item xs={12}>
        <Box
          p={4}
          border={"0.6000000000000001px solid #adb9c7"}
          width={"55rem"}
          boxSizing={"border-box"}
          borderRadius={"1.25rem"}
        >
          <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
            Event Name
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              maxLength={maxLength}
              placeholder="Event Name"
              style={{
                padding: "5px",
                width: "100%",
                background: "#020610",
                color: "#ADB9C7",
                outline: "none",
                height: "2.5rem",
                border: "none",
              }}
            />
            <span
              style={{
                padding: "5px",
    fontSize: "1em",
    background: "#020610",
    color: "#ADB9C7",
    height: "2.8rem",
    display: "flex",
    alignItems: "center",
              }}
            >
              {name.length}/{maxLength}
            </span>
          </div>
        </Box>
      </Grid>

      <Grid item xs={12}>
        {/* <Box
          p={4}
          border={"0.6px solid #ADB9C7"}
          width={"40rem"}
          borderRadius={2}
        >
          <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
            Banner Image
          </Typography>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="file"
              onChange={handleInputFile}
              accept=".jpg,.jpeg,.png,.pdf,.docx"
              placeholder="Drag & Drop or Click to Upload, Max size of 400kb"
              aria-label="File upload input"
              style={{
                padding: "5px",
                width: "35.5rem",
                background: "#020610",
                color: "#ADB9C7",
                outline: "none",
                height: "2em",
                border: "none",
              }}
            />

            <span
              style={{
                padding: "5px",
                fontSize: "1em",
                background: "#020610",
                color: "#ADB9C7",
                height: "1.45em",
                paddingTop: "9px",
              }}
            >
              <MdOutlineFileUpload />
            </span>
          </div>
        </Box> */}
        <BannerUploader/>
      </Grid>

      <Grid item xs={12}>
        {/* <Box
          p={4}
          border={"0.6px solid #ADB9C7"}
          width={"40rem"}
          borderRadius={2}
        >
          <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
            Event Description
          </Typography>
          <Editor
            editorState={editorState}
            toolbarClassName="toolbarClassName"
            wrapperClassName="wrapperClassName"
            editorClassName="editorClassName"
            onEditorStateChange={onEditorStateChange} 
            editorStyle={{
              backgroundColor: "#1A1D27",
              minHeight: "150px",
              color: "#ADB9C7",
            }} 
            toolbarStyle={{
              backgroundColor: "#1A1D27",
              
              border: "none",
              color: "#ADB9C7",
            }} 
          />
        </Box> */}
        <EventDescriptionSection1/>
      </Grid>

      <Grid item xs={12}>
        <Box
          p={4}
          width={"55rem"}
          boxSizing={"border-box"}
          border={"0.6000000000000001px solid #adb9c7"}

          borderRadius={"1.25rem"}
          display={"flex"}
        >
          <Box width={"45%"}>
            <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
              Start Date
            </Typography>
            <Box style={{ background: "white", padding: "0px !important" ,width:"100%"}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["DateTimePicker"]}>
                  <DateTimePicker
                    label="e.g. 2022-02-1515:08"
                    value={selectedDateTime}
                    onChange={handleDateTimeChange}
                    renderInput={(props) => <TextField {...props} />}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Box>
          <Box ml={2} width={"45%"}>
            <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
              End Date
            </Typography>
            <Box
              style={{
                background: "white",
                padding: "0px !important",
              }}
            >
              <LocalizationProvider
                dateAdapter={AdapterDayjs}
                style={{ color: "white" }}
              >
                <DemoContainer
                  components={["DateTimePicker"]}
                  style={{ color: "white" }}
                >
                  <DateTimePicker
                    label="e.g. 2022-02-1515:08"
                    value={selectedEndTime}
                    onChange={handleDateTimeChangetwo}
                    style={{ color: "white" }}
                    renderInput={(props) => <TextField {...props} />}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          p={4}
          boxSizing={"border-box"}
          border={"0.6000000000000001px solid #adb9c7"}

          borderRadius={"1.25rem"}
                    width={"55rem"}
        >
          <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
            Tags
          </Typography>
          <Autocomplete
            multiple
            limitTags={2}
            id="multiple-limit-tags"
            options={tags}
            renderInput={(params) => (
              <TextField {...params} placeholder="Tags" />
            )}
            value={selectedTags}
            onChange={handleTagsChange}
            sx={{ width: "100%", background: "white" }}
          />
        </Box>
      </Grid>

      {/* <Grid item xs={12} style={{ position: "fixed", bottom: "0", left: "0", width: "100%", backgroundColor: "#020610", padding: "20px", zIndex: 999 }}>
  <Box display="flex" justifyContent="flex-end">
    <Button variant="contained" color="primary" onClick={CreateEventApi}>Save</Button>
  </Box>
</Grid> */}
      <Grid
        item
        xs={12}
        style={{
          position: "fixed",
          bottom: "0",
          left: "27.4%",
          right: "0",
          width: "calc(100% - 27.4%)",
          backgroundColor: "#FFFFFF14",
          padding: "20px",
          zIndex: 1,
        }}
      >
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            style={{
              height: "32px",
              width: "192px",
              padding: "6px 16px 6px 16px",
            }}
            onClick={CreateEventApi}
          >
            Save
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default About;
