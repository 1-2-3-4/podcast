import { durationDisplay } from './duration-display'

describe('durationDisplay', () => {
  describe('when minutes is zero', () => {
    let result

    beforeAll(() => {
      result = durationDisplay(1000 * 30)
    })

    it('shows double zero in the minutes display and appropriate seconds', () => {
      expect(result).toBe('00:30')
    })
  })

  describe('when minutes is single digit', () => {
    let result

    beforeAll(() => {
      result = durationDisplay((1000 * 60 * 3) + (1000 * 32))
    })

    it('shows leading zero in minutes display and appropriate seconds', () => {
      expect(result).toBe('03:32')
    })
  })

  describe('when minutes is double digit', () => {
    let result

    beforeAll(() => {
      result = durationDisplay((1000 * 60 * 12) + (1000 * 12))
    })

    it('shows leading zero in minutes display and appropriate seconds', () => {
      expect(result).toBe('12:12')
    })
  })
})