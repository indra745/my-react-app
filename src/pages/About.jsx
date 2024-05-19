import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import CreateEventPageLeftSection from "./CreateEventPageLeftSection.jsx";
import { MdOutlineFileUpload } from "react-icons/md";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Autocomplete from '@mui/material/Autocomplete';
import { convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
const tags = [
    { title: 'play2earn' },
    { title: 'cosmos'},
    { title: 'defi'},
    { title: 'nft' },
    { title: 'harmony' },
    { title: 'DID' },



  ];

const About = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [editorState, setEditorState] = useState(null); // Added state for the editor
  const [editorContent, setEditorContent] = useState("");
console.log(file,editorContent);
  const maxLength = 20;
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

//   const fileInputRef = useRef(null);

//   const handleInputFile = (event) => {
//     const files = event.target.files;
//     if (files.length === 0) {
//       return;
//     }
//     const selectedFile = files[0];
//     if (selectedFile && selectedFile.size <= 400 * 1024) {
//       // 400 KB
//       setFile(selectedFile);
//     } else if (selectedFile) {
//       alert("File size exceeds 400kb limit.");
//     }
//   };

const handleInputFile = (event) => {
    const files = event.target.files;
    if (files.length === 0) {
      return;
    }
    const selectedFile = files[0];
    if (selectedFile && selectedFile.size <= 400 * 1024) {
      // 400 KB
      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = () => {
        // reader.result contains the base64 representation of the selected file
        setFile(reader.result);
      };
    } else if (selectedFile) {
      alert("File size exceeds 400kb limit.");
    }
  };
  

 

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
    // Retrieve the content of the editor as HTML
  const contentState = editorState.getCurrentContent();
  const rawContentState = convertToRaw(contentState);
  const htmlContent = draftToHtml(rawContentState);
  // Store the HTML content in your state or wherever you need it
  setEditorContent(htmlContent);
  }; // Added function to handle editor state change
console.log();

  return (
    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={3}>
        <CreateEventPageLeftSection />
      </Grid>
      <Grid item xs={9} style={{ overflowY: "auto", position: "relative", scrollbarWidth:"none" }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Box
              p={4}
              border={"0.6px solid #ADB9C7"}
              width={"40rem"}
              borderRadius={2}
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
                    width: "35rem",
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
                    height: "1.4em",
                    paddingTop: "9px",
                  }}
                >
                  {name.length}/{maxLength}
                </span>
              </div>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
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
                  accept=".jpg,.jpeg,.png,.pdf,.docx" // Example file types
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
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
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
                onEditorStateChange={onEditorStateChange} // Changed to use the local
                editorStyle={{
                  backgroundColor: "white",
                  minHeight: "150px",
                  color: "black",
                }} // Set background color to white
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              p={4}
              border={"0.6px solid #ADB9C7"}
              width={"40rem"}
              borderRadius={2}
              display={"flex"}
            >
              <Box>
                <Typography
                  style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}
                >
                  Start Date
                </Typography>
                <Box style={{background:"white", padding:"0px !important"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="e.g 2022-02-12 15:05"                />
                  </DemoContainer>
                </LocalizationProvider>
                </Box>
              </Box>
              <Box ml={2}>
                <Typography
                  style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}
                >
                  End Date
                </Typography>
                <Box style={{background:"white", padding:"0px !important"}}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer components={["DateTimePicker"]}>
                    <DateTimePicker
                      label="e.g 2022-02-12 15:05"                />
                  </DemoContainer>
                </LocalizationProvider>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box
              p={4}
              border={"0.6px solid #ADB9C7"}
              width={"40rem"}
              borderRadius={2}
            >
              <Typography style={{ color: "#F6F6F7", marginBottom: "0.5rem" }}>
                Tags
              </Typography>
              <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={tags}
      getOptionLabel={(option) => option.title}
      defaultValue={[tags[0]]}
      renderInput={(params) => (
        <TextField {...params}  placeholder="Favorites" />
      )}
      sx={{ width: '550px', background:"white" }}
    />
            </Box>
          </Grid>


          <Grid item xs={12} style={{ position: "fixed", bottom: "20px", left: "85%", width: "100%", zIndex: 999, }}>
    <Button variant="contained" color="primary">Save</Button>
  </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default About;
