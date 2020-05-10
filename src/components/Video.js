import React from 'react';
import ReactPlayer from 'react-player';
import GetThumbnail from '../helpers/GetThumbnail';

const Videos = ({ title, description, url }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <a target="_blank" rel="noopener noreferrer" href={url}>
        {url}
      </a>
      {/* <div
        style={{
          width: '150px',
          height: '150px',
          // overflow: 'hidden',
          border: '4px solid black',
        }}
      > */}
      <GetThumbnail link={url} />
      {/* </div> */}
      {/* <div
        style={{
          width: '200px',
          height: '300px',
          backgroundColor: 'blue',
          position: 'relative',
        }}
      >
        <ReactPlayer width="100%" height="100%" url={url} controls />
      </div> */}
    </div>
  );
};

export default Videos;

// https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1
