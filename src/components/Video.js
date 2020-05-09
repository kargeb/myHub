import React from 'react';
import ReactPlayer from 'react-player';

const Videos = ({ title, description, videoUrl }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a target="_blank" rel="noopener noreferrer" href={videoUrl}>
        {videoUrl}
      </a>
      <div
        style={{
          width: '200px',
          height: '300px',
          backgroundColor: 'blue',
          position: 'relative',
        }}
      >
        <ReactPlayer width="100%" height="100%" url={videoUrl} controls />
      </div>
    </div>
  );
};

export default Videos;

// https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1
