import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";

function StylishContent() {
  return (
    <div className="flex-container-with-border">
      <p className="standout-text">{messages["no_style"]}</p>
      <SvgIcon1 className="svg-container2" />
    </div>
  );
}

export default StylishContent;
