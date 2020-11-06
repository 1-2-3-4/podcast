import * as React from 'react'
import cx from 'classnames'

import { durationDisplay } from '../../utils/duration-display'
import { useAudio } from '../../utils/use-audio'
import './audio-list.css'

export const AudioList = () => {
  const { tracks, nowPlayingIndex, setNowPlayingIndex } = useAudio()

  return (
    <>
      {tracks.map((track, i) => {
        const { duration, imageUrl, mediaUrl, title } = track
        const isNowPlaying = i === nowPlayingIndex

        return (
          <div
            className={cx(
              "track-item",
              {["track-item-now-playing"]: isNowPlaying}
            )}
            data-testid="track-item"
            key={mediaUrl}
            onClick={() => setNowPlayingIndex(i)}
          >
            <img className="track-image" src={imageUrl} alt={title} />
            <div className="track-text">
              <div
                className={cx(
                  "track-title",
                  {["track-title-now-playing"]: isNowPlaying}
                )}
              >
                {title}
              </div>
              <div
                className={cx(
                  "track-metadata",
                  {["track-title-now-playing"]: isNowPlaying}
                )}
              >
                {durationDisplay(duration)}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}