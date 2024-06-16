import "./style.css";
import messages from "./messages.json";

function EventDetailsComponent() {
  return (
    <div className="event-info-widget">
      <p className="event-title-counter">{messages["event_name"]}</p>
      <p className="event-progress-counter">{messages["020"]}</p>
    </div>
  );
}

export default EventDetailsComponent;
