import * as React from 'react'
import { shallow } from 'enzyme'

import { NowPlaying } from './now-playing'
import * as useAudioUtil from '../../utils/use-audio'

describe('NowPlaying', () => {
  describe('when it renders', () => {
    let wrapper
    const mockTracks = [
      {
        title: 'This is a Fake Song',
        imageUrl: 'https://image.com/this-is-a-fake-song',
        mediaUrl: 'https://media.com/this-is-a-fake-song',
        duration: 10000
      },
      {
        title: 'Also a Mock Song',
        imageUrl: 'https://image.com/also-a-mock-song',
        mediaUrl: 'https://media.com/also-a-mock-song',
        duration: 10000
      },
      {
        title: 'Yup, Still More Fake Songs',
        imageUrl: 'https://image.com/yup-still-more-fake-songs',
        mediaUrl: 'https://media.com/yup-still-more-fake-songs',
        duration: 10000
      }
    ]
    const mockNowPlayingIndex = 2
    const mockNextTrack = 0
    const mockPrevTrack = 1
    const mockSetNowPlayingIndex = jest.fn()

    beforeAll(() => {
      jest.spyOn(useAudioUtil, 'useAudio').mockReturnValue({
        tracks: mockTracks,
        nowPlayingIndex: mockNowPlayingIndex,
        setNowPlayingIndex: mockSetNowPlayingIndex
      })

      wrapper = shallow(<NowPlaying/>)
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('renders an audio source for each track', () => {
      expect(wrapper.find('source')).toHaveLength(mockTracks.length)
    })

    it('features currently playing track', () => {
      expect(
        wrapper.find({ className: 'now-playing-title' }).contains(mockTracks[mockNowPlayingIndex].title)
      ).toBe(true)
    })

    it('clicking next song button sets the next track', () => {
      wrapper.find({ className: 'next-button' }).simulate('click')
      expect(mockSetNowPlayingIndex).toHaveBeenCalledWith(mockNextTrack)
    })

    it('clicking prev song button sets the prev track', () => {
      wrapper.find({ className: 'prev-button' }).simulate('click')
      expect(mockSetNowPlayingIndex).toHaveBeenCalledWith(mockPrevTrack)
    })

    it('matches snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot()
    })
  })
})
