import React from 'react';
import VideoItem from './VideoItem';

//each videoItem component is being passed a video( from the videos array) and onVideoSelect 
//callback(which is later bring invoked when a div is clicked)

/* here onvideoselect is a callbck */
const VideoList = ({ videos, onVideoSelect }) => {
  
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
    
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
