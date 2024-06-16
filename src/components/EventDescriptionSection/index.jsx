import "./style.css";
import messages from "./messages.json";

function EventDescriptionSection() {
  return (
    <div className="event-description-container5">
      <p className="event-description-label">{messages["enter_descriptions_here_event"]}</p>
      <p className="event-description-counter">{messages["0100"]}</p>
    </div>
  );
}

export default EventDescriptionSection;
