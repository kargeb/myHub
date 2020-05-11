/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Video from './Video';

class VideoList extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    console.log('zaladowalem sie');
    fetch('database.json')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({ videos: [...data] });
      })
      .catch((err) => console.log('MAMY BLAD => ', err));
  }

  setActive = (pickedUrl) => {
    const newVideos = this.state.videos.map((video) => {
      if (video.url == pickedUrl) {
        video.active = true;
      } else {
        video.active = false;
      }

      return video;
    });

    this.setState({ videos: newVideos });
  };

  render() {
    const { videos } = this.state;
    const { setCurrentVideo } = this.props;

    return (
      <div>
        <ul>
          {videos.length &&
            videos.map((video) => (
              <li
                key={video.url}
                onClick={() => {
                  this.setActive(video.url);
                  setCurrentVideo(video);
                }}
              >
                <Video
                  active={video.active}
                  title={video.title}
                  description={video.description}
                  url={video.url}
                />
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
export default VideoList;
