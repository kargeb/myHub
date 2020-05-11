import React from 'react';
import getThumbnailUrl from '../../helpers/getThumbnailUrl';
import styles from './Video.module.scss';

const Videos = ({ title, description, url, active }) => {
  const thumbnail = getThumbnailUrl(url);

  const styleThumbnailContainer = {
    backgroundImage: `url(${thumbnail})`,
  };

  const styleActive = { opacity: '0.6', backgroundColor: 'grey' };
  const shortDescription = description.substring(0, 55);

  return (
    <div className={styles.wrapper} style={active ? styleActive : {}}>
      <div className={styles.thumbnail} style={styleThumbnailContainer} />
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{shortDescription}</p>
      </div>
    </div>
  );
};

export default Videos;
