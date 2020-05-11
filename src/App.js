import './App.css';
import React from 'react';
import logo from './images/Logo.svg';

import VideoList from './components/videoList/VideoList';
import PlayerView from './components/playerView/PlayerView';

class App extends React.Component {
  state = {
    currentVideo: {
      title: 'Szkoła Reacta - Formularze',
      description:
        'Jeżeli jesteś programista / programistką i programujesz w ReactJS, to wideo pomoże Ci zacząć korzystać z formularzy. ',
      url: 'https://www.youtube.com/watch?v=wvOmx9e4l2o',
      active: true,
    },
  };

  setCurrentVideo = (url) => {
    this.setState({ currentVideo: url });
  };

  render() {
    const { currentVideo } = this.state;

    return (
      <div className="App">
        <main>
          {currentVideo ? (
            <PlayerView currentVideo={currentVideo} />
          ) : (
            <p>wybierz wideo</p>
          )}
        </main>
        <aside>
          <h1>
            <img src={logo} alt="myTube" />
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
