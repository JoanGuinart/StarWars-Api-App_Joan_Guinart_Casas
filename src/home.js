import React from "react";
import videoplayback from "./videoIntro/videoplayback.mp4";

export const Home = () => {
  return (
    <div className="flex justify-center">
      <video controls autoPlay loop width="750" height="500">
        <source src={videoplayback} type="video/mp4" />
        Sorry, your browser doesn't support videos.
      </video>
    </div>
  );
};
