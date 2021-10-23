import React, { useState } from "react";
import BasicLayout from "../../../components/UI/BasicCompPadding/BasicLayout";
import "./pdfviewer.css";

const PdfViewer = (props) => {
  //   const [embedURL] = useState(
  //     "https://drive.google.com/file/d/1XBZmzkURpZg92axkHhJAGGXQ9_urWLJV/preview"
  //   );
  console.log("IN PDFVIEWER");

  return (
    <BasicLayout>
      <div>
        <iframe src={props.url} className="iframe">
          your browser don't support iframes
        </iframe>
      </div>
    </BasicLayout>
  );
};

export default PdfViewer;
