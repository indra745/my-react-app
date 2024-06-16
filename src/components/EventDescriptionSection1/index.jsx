import StylishEventLayout from "../StylishEventLayout";
import "./style.css";
import messages from "./messages.json";

function EventDescriptionSection1() {
  return (
    <div className="event-description-container">
      <p className="event-description-heading">{messages["event_description"]}</p>
      <StylishEventLayout />
    </div>
  );
}

export default EventDescriptionSection1;
