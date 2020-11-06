import * as React from 'react'

import { AudioContext } from './audio-context'
import loadingIcon from './loading.svg'
import './audio-provider.css'

export const AudioProvider = ({ children }) => {
  const [trackData, setTrackData] = React.useState({})
  const [loading, setLoading] = React.useState(true)
  const [nowPlayingIndex, setNowPlayingIndex] = React.useState(0)

  React.useEffect(() => {
    const fetchAudioData = async () => {
      const { tracks } = await fetch('https://s3-us-west-2.amazonaws.com/anchor-website/challenges/bsb.json')
      .then(response => response.json()
        .then(data => data)
      )

      setTrackData(tracks)
      setLoading(false)
    }
    
    fetchAudioData()
  }, [setTrackData, setLoading]);

  if (loading) {
    return (
      <div className="loading">
        <img className="loading-icon" src={loadingIcon} alt="loading" />
      </div>
    )
  }

  return (
    <AudioContext.Provider
      value={{
        tracks: trackData,
        nowPlayingIndex,
        setNowPlayingIndex
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}