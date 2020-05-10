import React from 'react';
import ReactPlayer from 'react-player';
import GetThumbnail from '../helpers/GetThumbnail';

const Videos = ({ title, description, url }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <GetThumbnail link={url} />
    </div>
  );
};

export default Videos;

// https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1
