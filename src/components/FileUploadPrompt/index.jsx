import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import React, { useRef } from 'react';

function FileUploadPrompt() {
  const fileInputRef = useRef(null);

  const handleUploadClick = (e) => {
    e.preventDefault();
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log(`Selected file: ${file.name}`);
      // Process the file here
    }
  };
  return (
    <div className="file-uploader-prompt">
      <p className="file-upload-prompt">
        <span className="file-upload-instructions">{messages["drag__drop_or"]}</span>
        {/* <a onClick={handleUploadClick} className="upload-button-text-style" style={{cursor:"pointer"}}>
          {messages["click_upload"]}
        </a> */}
        <button 
  onClick={handleUploadClick} 
  className="upload-button-text-style" 
  style={{cursor: "pointer", background: "none", border: "none", padding: 0, textDecoration: "underline", color: "blue"}}
>
  {messages["click_upload"]}
</button>

        <span className="file-upload-instructions1">, </span>
        <span className="file-upload-instructions">{messages["max_size_400kb"]}</span>
      </p>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <SvgIcon1 className="svg-container1" onClick={handleUploadClick} style={{cursor:"pointer"}}/>
    </div>
  );
}

export default FileUploadPrompt;
