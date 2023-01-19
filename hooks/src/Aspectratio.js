import React from "react";
import video from '/home/agva/Desktop/React/hooks/src/video/video.mp4';
const Aspectratio = () => {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (

  <>    

  <video src={video} width={width} height={height} controls autoPlay/>
  </>
  );
};
export default Aspectratio;
