import React from 'react';
import ReactPlayer from 'react-player';
import getThumbnail from '../helpers/getThumbnail';
import styles from './Video.module.css';

const Videos = ({ title, description, url }) => {
  const thumbnail = getThumbnail(url);
  console.log(thumbnail);
  const styleThumbnailContainer = {
    backgroundImage: `url(${thumbnail})`,
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.thumbnail} style={styleThumbnailContainer} />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default Videos;

// https://www.youtube.com/embed/bTqVqk7FSmY?origin=https://plyr.io&iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1
