import './App.css';
import React from 'react';
import ReactPlayer from 'react-player';
import logo from './images/Logo.svg';

import VideoList from './components/VideoList';

class App extends React.Component {
  state = {
    currentVideo: {
      title: 'Mój ulubiony filmik 1',
      description: 'Opis mojego ulubionego filmiku',
      url: 'https://youtu.be/Bey4XXJAqS8',
    },
  };

  setCurrentVideo = (url) => {
    console.log('curent url:', url);
    this.setState({ currentVideo: url });
  };

  render() {
    const { currentVideo } = this.state;

    return (
      <div className="App">
        <main>
          {currentVideo ? (
            <>
              <div className="video-container">
                <div className="container">
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    url={currentVideo.url}
                    controls
                  />
                </div>
                <h2 className="ha2">{currentVideo.title}</h2>
                <p className="main-desc">{currentVideo.description}</p>
              </div>
            </>
          ) : (
            <p>wyboerz co</p>
          )}
        </main>
        <aside>
          <h1>
            <img src={logo} />{' '}
          </h1>
          <nav>
            <VideoList setCurrentVideo={this.setCurrentVideo} />
          </nav>
        </aside>
      </div>
    );
  }
}

export default App;
