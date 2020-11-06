import * as React from 'react'

import { useAudio } from '../../utils/use-audio'

import skipNextIcon from './skip_next.svg'
import skipPrevIcon from './skip_previous.svg'
import './now-playing.css'

export const NowPlaying = () => {
  const { tracks, nowPlayingIndex, setNowPlayingIndex } = useAudio()
  const nowPlayingTrack = tracks[nowPlayingIndex]
  const {
    imageUrl: nowPlayingImageUrl,
    mediaUrl: nowPlayingMediaUrl,
    title: nowPlayingTitle
  } = nowPlayingTrack

  const nextSong = () => {
    const nextIndex = nowPlayingIndex === tracks.length - 1 ? 0 : nowPlayingIndex + 1
    setNowPlayingIndex(nextIndex)
  }

  const prevSong = () => {
    const prevIndex = nowPlayingIndex === 0 ? tracks.length - 1 : nowPlayingIndex - 1
    setNowPlayingIndex(prevIndex)
  }

  return (
    <div className="now-playing-container">
      <div className="now-playing-image-container">
        <img className="now-playing-image" src={nowPlayingImageUrl} alt={nowPlayingTitle}/>
      </div>

      <div className="now-playing-title-container">
        <div className="now-playing-title">{nowPlayingTitle}</div>
      </div>
      
      <div className="now-playing-audio-container">
        <button className="prev-button" onClick={prevSong}>
          <img src={skipPrevIcon} alt="Previous Song" />
        </button>

        <audio
          autoPlay
          controls
          src={nowPlayingMediaUrl}
          onEnded={nextSong}
        >
          {tracks.map(track => {
            const { mediaUrl } = track
            return (
              <source key={mediaUrl} src={mediaUrl} type="audio/mp4" />
            )
          })}
        </audio>

        <button className="next-button" onClick={nextSong}>
          <img src={skipNextIcon} alt="Next Song" />
        </button>
      </div>
    </div>
  )
}