import React from 'react';

const VideoDetail = ({ video }) => {

  if (!video) {
    return <div>Loading...Please wait</div>;
  }

  const vdoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="Youtube video player" src={vdoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
  
};

export default VideoDetail;
