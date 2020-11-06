import * as React from 'react'
import { shallow } from 'enzyme'

import { AudioProvider } from './audio-provider'
import { AudioContext } from './audio-context'

describe('AudioProvider', () => {
  describe('when loading', () => {
    let wrapper

    beforeAll(() => {
      jest.spyOn(React, 'useEffect').mockImplementation(cb => cb())

      wrapper = shallow(<AudioProvider/>)
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('renders loading spinner', () => {
      expect(wrapper.find({ className: 'loading' }).exists()).toBe(true)
    })

    it('matches snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot()
    })
  })

  describe('when data has loaded', () => {
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

    beforeAll(() => {
      jest.spyOn(React, 'useEffect').mockImplementation(cb => cb())
      jest.spyOn(global, 'fetch').mockImplementation(jest.fn(() =>
        Promise.resolve({
          json: () => Promise.resolve({ tracks: mockTracks }),
        })
      ))

      wrapper = shallow(<AudioProvider/>)
    })

    afterAll(() => {
      jest.restoreAllMocks()
    })

    it('renders provider with data', () => {
      expect(wrapper.find(AudioContext.Provider).prop('value')).toMatchObject({
        tracks: mockTracks,
        nowPlayingIndex: 0
      })
    })

    it('matches snapshot', () => {
      expect(wrapper.getElement()).toMatchSnapshot()
    })
  })
})