import React from "react";
import './VideoPlayer.css';
const VideoPlayer = () => {
    return (
      <div className="earth-spin">
        <video width="320" height="240" controls autoPlay>
          <source src="./assets/earth-spinning.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
}
export default VideoPlayer;