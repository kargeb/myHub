import React from 'react';
import ReactPlayer from 'react-player';
import getThumbnailUrl from '../helpers/getThumbnailUrl';
import styles from './Video.module.scss';

const Videos = ({ title, description, url, active }) => {
  const thumbnail = getThumbnailUrl(url);

  const styleThumbnailContainer = {
    backgroundImage: `url(${thumbnail})`,
  };

  const styleActive = { opacity: '0.6', backgroundColor: 'grey' };

  return (
    <div className={styles.wrapper} style={active ? styleActive : {}}>
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
