import FileUploadPrompt from "../FileUploadPrompt";
import "./style.css";
import messages from "./messages.json";

function BannerUploader() {
  return (
    <div className="banner-image-section">
      <p className="banner-text-wrapper">{messages["banner_image"]}</p>
      <FileUploadPrompt />
    </div>
  );
}

export default BannerUploader;
