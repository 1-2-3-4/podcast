import * as React from 'react'

import { AudioProvider } from './components/audio-provider/audio-provider'
import { AudioList } from './components/audio-list/audio-list'
import { NowPlaying } from './components/now-playing/now-playing'

import './app.css'

export const App = () => {
  return (
    <>
      <nav className="app-nav">
        <h1>Playlist</h1>
      </nav>
      <div className="app-container">
        <AudioProvider>
          <NowPlaying/>
          <AudioList/>
        </AudioProvider>
      </div>
    </>
  );
}

export default App
