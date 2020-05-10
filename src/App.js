import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';

import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    currentVideo: 'https://youtu.be/Bey4XXJAqS8',
  };

  render() {
    const { currentVideo } = this.state;

    return (
      <div className="App">
        <main>
          {currentVideo ? (
            <>
              <div className="container">
                <ReactPlayer
                  width="80%"
                  height="80%"
                  url={currentVideo}
                  controls
                />
              </div>
            </>
          ) : (
            <p>wyboerz co</p>
          )}
        </main>
        <nav>
          <h2>myHub</h2>
          <VideoList />
        </nav>
      </div>
    );
  }
}

export default App;
