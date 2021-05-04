import React from "react";
import "./events.css";

// Dislay all fetched data in a user readable form
const fetchevent = (props) => {
  return (
    <div class="timeline">
      <div class="timeline-event">
        <label class="timeline-event-icon"></label>
        <div class="timeline-event-copy">
          <p class="timeline-event-thumbnail">{props.date}</p>
          <h3 className="title">{props.title}</h3>
          <h4 className="by">
            <strong>By : </strong>
            {props.author}
          </h4>
          <div>
            <strong>About : </strong>
            {props.desc}
          </div>
          <div className="timing">
            <strong>Timings : </strong>
            {props.time}
          </div>
          <div className="apply">
            <strong>Apply Link : </strong>
            <a class="link" href={props.link} target="_blank">
              Click Here
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default fetchevent;
