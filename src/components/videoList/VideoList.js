import React from 'react';
import Video from './Video';

class VideoList extends React.Component {
  state = {
    videos: [],
  };

  componentDidMount() {
    fetch('database.json')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ videos: [...data] });
      })
      .catch((err) => console.log('MAMY BLAD => ', err));
  }

  setActive = (pickedUrl) => {
    const { videos } = this.state;

    const newVideos = videos.map((video) => {
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
