import React, { useRef } from 'react';
import myVideo from "./assets/videoSong.mp4"

function VideoPlayer() {
  const videoRef = useRef(null); 

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play(); 
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause(); 
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0; 
      videoRef.current.play(); 
    }
  };

  return (
    <div>
      <video
        ref={videoRef} 
        width="600px"
        height="400px"
        controls={false} 
        src={myVideo} 
      ></video>
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleRestart}>Restart</button>
      </div>
    </div>
  );
}

export default VideoPlayer;