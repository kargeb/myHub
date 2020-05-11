import React from 'react';
import ReactPlayer from 'react-player';
import styles from './PlayerView.module.scss';

const PlayerView = ({ currentVideo }) => {
  return (
    <>
      <div className={styles.videoContainer}>
        <div className={styles.container}>
          <ReactPlayer
            className={styles.reactPlayer}
            width="100%"
            height="100%"
            url={currentVideo.url}
            controls
          />
        </div>
      </div>
      <h2 className={styles.h2}>{currentVideo.title}</h2>
      <p className={styles.description}>{currentVideo.description}</p>
    </>
  );
};

export default PlayerView;
