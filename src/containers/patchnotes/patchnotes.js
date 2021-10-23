import React from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import "./patchnotes.css";
const Patchnotes = () => {
  return (
    <div>
      <div className="timeline-item" date-is="v 1.2">
        <h1>October 2021</h1>
        <p>
          <ul>
            <li>Added Darkmode</li>
            <li>Year wise filter added</li>
            <li>Searching implemented</li>
            <li>Patch section added</li>
            <li>Video Lecture section added </li>
            <li>Sem 3 and 4's resources added</li>
            <li>You can also add HTML included text into the post section</li>
          </ul>
        </p>
      </div>

      <div className="timeline-item" date-is="v 1.0">
        <h1>May 2021</h1>
        <p>
          <li>Created department wise resources section</li>
          <li>Added functionality to choose department</li>
          <li>Local storeage for department</li>
          <li>Category wise filters for notes</li>
          <li>Post section and Academic post section</li>
          <li>FAQ and Club section</li>
          <li>You can now add notes and posts also</li>
        </p>
      </div>
    </div>
  );
};

export default Patchnotes;
