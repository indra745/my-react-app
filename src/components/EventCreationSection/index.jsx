import { Button } from "@mui/base";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";
import messages from "./messages.json";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";

function EventCreationSection() {
  const navigate = useNavigate();

  const handleCreateEventClick = () => {
    navigate("/create_event");
  };
  return (
    // <div className="event-creation-section2">
    <Grid container spacing={2}>
          <Grid item xs={12} sm container>
      <Grid className="event-creation-container">
        <p className="event-title-heading">{messages["create_events"]}</p>
        <Grid className="event-creation-container1">
          <p className="exciting-challenge-text">{messages["craft_annbsp_exciting_challenges_tasks_participant"]}</p>
          <Button className="prize-button" onClick={handleCreateEventClick}>
            <SvgIcon1 className="svg-container1" />
            {messages["create_event"]}
          </Button>
        </Grid>
      </Grid>
      </Grid>
        </Grid>
    // </div>
  );
}

export default EventCreationSection;
