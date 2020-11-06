import * as React from 'react'
import { shallow } from 'enzyme'

import { AudioList } from './audio-list'
import * as useAudioUtil from '../../utils/use-audio'

describe('AudioList', () => {
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

    beforeAll(() => {
      jest.spyOn(useAudioUtil, 'useAudio').mockReturnValue({
        tracks: mockTracks,
        nowPlayingIndex: mockNowPlayingIndex,
      })

      wrapper = shallow(<AudioList/>)
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('renders a track item for each track', () => {
      expect(wrapper.find({ 'data-testid': 'track-item' })).toHaveLength(mockTracks.length)
    })

    it('sets now-playing class on the currently playing track', () => {
      expect(wrapper.find({ 'data-testid': 'track-item' }).at(mockNowPlayingIndex).prop('className')).toContain('track-item-now-playing')
    })

    it('matches snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot()
    })
  })
})
