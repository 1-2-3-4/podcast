import * as React from 'react'
import { AudioContext } from '../components/audio-provider/audio-context'

export const useAudio = () => React.useContext(AudioContext)