import React, { useState } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import VideoCard from "../../components/UI/VideoCard/VideoCard";

const VideoLectures = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/EY30Iw5aqV0");
  return (
    <BasicLayout>
      <center>
        <div style={{ width: "100%", alignContent: "center" }}>
          <iframe
            width="100%"
            height="515"
            src={link}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </center>
      <div
        onClick={() => {
          setLink("https://www.youtube.com/embed/gQLGoDqATcA");
          console.log("hello there", link);
        }}
      >
        <VideoCard />
      </div>
    </BasicLayout>
  );
};

export default VideoLectures;
