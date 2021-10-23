import React, { useState } from "react";
import BasicLayout from "../../components/UI/BasicCompPadding/BasicLayout";
import VideoCard from "../../components/UI/VideoCard/VideoCard";
import classes from "./videolectures.module.css";

const VideoLectures = () => {
  const [link, setLink] = useState("https://www.youtube.com/embed/9d5QERN_gkk");
  return (
    <BasicLayout>
      <div className={classes.titleHeader}>Videos</div>
      <div className={classes.iFrameDiv}>
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
      <div className={classes.GeneralRow}>
        <div
          onClick={() => {
            setLink("https://www.youtube.com/embed/Goe1Xi0TMYo");
            // console.log("hello there", link);
          }}
        >
          <VideoCard
            title="Macro Processors: Part-2"
            desc="Video lecture of Macro Procesors Part 2 by Trusha Patel Mam"
          />
        </div>

        <div
          onClick={() => {
            setLink("https://www.youtube.com/embed/6cSqDRN15fo");
            // console.log("hello there", link);
          }}
        >
          <VideoCard
            title="Macro Processors: Part-3"
            desc="Video lecture of Macro Procesors Part 3 by Trusha Patel Mam"
          />
        </div>

        <div
          onClick={() => {
            setLink("https://www.youtube.com/embed/nKcdpzFtkJM");
            // console.log("hello there", link);
          }}
        >
          <VideoCard
            title="Macro Processors: Part-4"
            desc="Video lecture of Macro Procesors Part 4 by Trusha Patel Mam"
          />
        </div>

        <div
          onClick={() => {
            setLink("https://www.youtube.com/embed/szuPKdubc9w");
            // console.log("hello there", link);
          }}
        >
          <VideoCard
            title="Macro Processors: Part-5"
            desc="Video lecture of Macro Procesors Part 5 by Trusha Patel Mam"
          />
        </div>
      </div>
    </BasicLayout>
  );
};

export default VideoLectures;
