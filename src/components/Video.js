import React from 'react';

const Videos = ({ title, description, video_url }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a target="_blank" rel="noopener noreferrer" href={video_url}>
        {video_url}
      </a>
    </div>
  );
};

export default Videos;
