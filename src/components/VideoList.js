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
                  setCurrentVideo(video);
                }}
              >
                <Video
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
