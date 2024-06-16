import StylishContent from "../StylishContent";
import EventDescriptionSection from "../EventDescriptionSection";
import SvgIcon1 from "./icons/SvgIcon1";
import "./style.css";

function StylishEventLayout() {
  return (
    <div className="event-description-container4">
      <div className="event-description-container3">
        <div className="event-description-container1">
          <div className="horizontal-content-container">
            <StylishContent />
            <div className="horizontal-flex-container">
              <img
                src="/assets/img_1_2030_e8f1b6.svg"
                alt=""
                className="image-container"
              />
              <div className="dark-separator" />
              <SvgIcon1 className="svg-container3" />
              <div className="dark-separator1" />
              <img
                src="/assets/img_1_2039_f805e9.svg"
                alt=""
                className="text-block-with-image"
              />
            </div>
            <img
              src="/assets/img_1_2042_a88d32.svg"
              alt=""
              className="hierarchical-text-block1"
            />
          </div>
          <img
            src="/assets/img_1_2046_af1ac4.svg"
            alt=""
            className="hierarchical-text-block"
          />
        </div>
        <EventDescriptionSection />
      </div>
    </div>
  );
}

export default StylishEventLayout;
